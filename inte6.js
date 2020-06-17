var chartt;
var seriess;
var titlee="";
var legend;
var xAxis;
var yAxis;
var xx=[];
var yy=[];
var r="";
var plotOptions;
var xname="";
var yname="";

$('#checkk').hide();
$('#histo').hide();
$('#pielabel').hide();
$('#pielabel2').hide();
$('#pieopts').hide();
$('#xsel1').hide();
$('#ysel1').hide();
$('#zsel').hide();


$('#butt').on("click",function(){
  $('#fulfli').removeClass('active')
  $('#fulsli').addClass('active')
  // $('ul li:nth-child(1)').removeClass('active')
  // $('ul li:nth-child(2)').addClass('active')

   action();
   r=xname=yname="";
});

$('#applybutt').on("click",function(){
  $('#sulsli').removeClass('active')
  $('#sulfli').addClass('active')

  if($('#titlename').val()!=""){
    r=$('#titlename').val()
  }
  if($('#xaxisname').val()!=""){
    xname=$('#xaxisname').val()
  }
  if($('#yaxisname').val()!=""){
    yname=$('#yaxisname').val()
  }

  
});


$('select#graphtype').on('change',function(){
   $('#checkk').hide();
   $('#axissel').show();
   $('#histo').hide();
   $('#pielabel').hide();
   $('#pielabel2').hide();
   $('#pieopts').hide();
    $('#yaxislabel').show();
    $('#xaxislabel').show();
    $('#xsel1').hide();
    $('#ysel1').hide();
    $('#zsel').hide();
   if ($(this).val()==='venn') {
      $('#axissel').hide();
      // $('#ysel2').hide();
   }
   else if($(this).val()==='scatter' || $(this).val()==='bubble'){
    $('#axissel').hide();
      $('#xsel1').show();
    $('#ysel1').show();
    $('#zsel').show();
   }
   else if($(this).val()==='pie'){
    $('#axissel').hide();
    $('#pieopts').show();
    $('#yaxislabel').hide();
    $('#xaxislabel').hide();
   }
   else if($(this).val()==='column' || $(this).val()==='area'){
      $('#checkk').show();
      $('#pieopts').hide();
   }
   
   else if($(this).val()==='histogram'){
      $('#axissel').hide();
      $('#histo').show();
      $('#pieopts').hide();
   }
});


$('select#pieopt').on('change',function(){
  if($(this).val()==='mfsch'){
      $('#pielabel').show();
      $('#pielabel2').hide();
  }
  else if($(this).val()==='mfloc'){
      $('#pielabel').hide();
      $('#pielabel2').show();
  }
  else{
    $('#pielabel').hide();
    $('#pielabel2').hide();
  }


});



//////////////////////////////////////////////////////////////////


function action(){
  // console.log("inside action")
   var ty=$('select#graphtype').val();

   switch(ty){
      case 'line':
                  boiler();
                  reset();
                  break;

      case 'bar':
                  // console.log("inside bar")
                  boiler();
                  reset();
                  break;

      case 'table-only':
                  location.reload();
                  break;

      case 'area':
                  boiler();
                  reset();
                  break;

      case 'bubble':
                  scatterbubbler('bubble');
                  reset();
                  break;

      case 'column':
                  boiler();
                  reset();
                  break;

      case 'area':
                  boiler();
                  reset();
                  break;

      case 'combi':
                  boiler();
                  dat=[];
                  for(var i=0;i<$('select#ywhat').val().length;i++){
                    yy=[];
                        $('td.'+$('select#ywhat').val()[i]).each(function(){
                     yy.push(Number($(this).html()));
                  });
                        dat.push(yy);

                  }

                  if(r==""){
                    r=$('th.'+$('select#xwhat').val()).html() + ' vs ' +$('th.'+$('select#ywhat').val()).html()
                  }
                  titlee={
                    text:r
                  }

                  seriess=[]
                  for(var i=0;i<dat.length;i++){

                    seriess.push({
                        type:'line',
                     data:dat[i]
                  });

                  seriess.push({
                     type:'column',
                     data:dat[i]

                    });
                  }


                  // seriess=[{
                  //    type:'line',
                  //    data:yy
                  // },
                  // {
                  //    type:'column',
                  //    data:yy
                  // }];
                  reset();
                  break;

      case 'scatter':
                  scatterbubbler('scatter');
                  reset();
                  break;



      case 'histogram':
                  hist();
                  reset();
                  break;


      case 'venn':
                   vennn();
                  break;


      case 'pie':

                  if($('select#pieopt').val()==='mfsch'){
                    // $('pieval')
                    // console.log("KERI")
                    $('#pielabel').show();
                    $('#pielabel2').hide();
                    flexpie(1);
                  }
                  else if($('select#pieopt').val()==='mfloc'){
                    $('#pielabel2').show();
                    $('#pielabel').hide();
                    flexpie(2);
                  }
                  else{
                  var dic={};
                  yy=[];
                  $('td.'+$('select#pieopt').val()).each(function(){
                     if(dic[$(this).html()]){
                        dic[$(this).html()]+=1;
                     }
                     else{
                        dic[$(this).html()]=1;
                     }
                  });
                  for(var k in dic){
                     yy.push([k,Number(dic[k])])
                  }

                  if(r==""){
                    r='No of '+$('select#pieopt').val()
                  }

                  titlee={text:r}
                  seriess=[{
                     type:'pie',
                     data:yy

                  }]
                }
                  
                  reset();
                  break;

               }
            }


//////////////////////////////////////////////////////////////////////////////////////////////////////



            function boiler(){
              labelSetter();
               chartt={
                  type:$('select#graphtype').val()
                };
                
                xx=[];
                $('td.'+$('select#xwhat').val()).each(function(){
                     xx.push($(this).html());
                });
      
                yy=[];
                for(var i=0;i<$('select#ywhat').val().length;i++){
                    dict={};j=0;

                    $('td.'+$('select#ywhat').val()[i]).each(function(){
                       if(dict[xx[j]]){
                          dict[xx[j]]+=Number($(this).html());
                       }
                       else{
                          dict[xx[j]]=Number($(this).html());
                       }
                       j++;
                    });

                    yyy=[];l=0;
                    for(var k in dict){
                       xx[l]=k;
                       yyy[l]=dict[xx[l]];
                       l++;
                    }

                    yy.push(yyy);
                    // yyy=[];dict={};
                };


                seriess=[];
                for(var j=0;j<$('select#ywhat').val().length;j++){
                      seriess.push({name:$('select#ywhat').val()[j],data:yy[j]});
                }


                    xAxis = {
                      categories: xx
                     
                    };

                   
                    yAxis = {
                              // min:0,
                       title: {
                          text: yname
                       },
                       labels:{
                          overflow:'justify'
                       }
                    };    


                    legend = {
                         layout: 'vertical',
                         align: 'right',
                         verticalAlign: 'middle',
                         borderWidth: 0,
                         shadow:true
                      }; 

            }



//////////////////////////////////////////////////////////////////////////////////////////////////////



function labelSetter(){
                    if(r==""){
                    r=$('th.'+$('select#xwhat').val()).html()+' vs ( '
                        for(var i=0;i<$('select#ywhat').val().length;i++){
                          r+=$('th.'+$('select#ywhat').val()[i]).html()+', '
                    }
                    r+=')'  }
                    titlee={
                      text:r
                    }

                    if(xname==""){
                      xname=$('th.'+$('select#xwhat').val()).html()
                    }

                    if(yname==""){
                      yname=$('th.'+$('select#ywhat').val()).html()
                    }

}



//////////////////////////////////////////////////////////////////////////////////////////////////////


function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + '1' + ')';
    // r().toFixed(1)
}



function scatterbubbler(typee){

                  chartt = {
                     type: typee,
                     zoomType: 'xy'
                  };

                 

                  if(xname==""){
                    xname='males'
                  }
                  xAxis={
                     title:{
                              text:xname
                            }
                  }



                  if(yname==""){
                    yname='females'
                  }
                  yAxis = {
                                    min:0,
                            title:{
                              text:yname
                            },
                             labels:{
                                overflow:'justify'
                             }
                          };  


                  legend = {
                               layout: 'vertical',
                               align: 'right',
                               verticalAlign: 'middle',
                               borderWidth: 0
                            }; 



                  xx=[]
                  $('td.'+$('select#xwhat1').val()).each(function(){
                    xx.push(Number($(this).html()))
                  });

                  yy=[];
                  $('td.'+$('select#ywhat1').val()).each(function(){
                    yy.push(Number($(this).html()))
                  })

                  zz=[];
                  $('td.'+$('select#zwhat').val()).each(function(){
                    zz.push($(this).html())
                  })


                  dictt={};
                  for(var i=0;i<zz.length;i++){
                    if(dictt[zz[i]]){
                      dictt[zz[i]][0]+=xx[i];
                      dictt[zz[i]][1]+=yy[i];
                    }
                    else{
                      dictt[zz[i]]=[xx[i],yy[i]];
                    }
                  }

                  dasta=[];xxx=[];
                  for(var k in dictt){
                    xxx.push(k)
                    dasta.push(dictt[k])
                  }

                  seriess=[];
                  if(typee=='scatter'){
                  for(var l=0;l<xxx.length;l++){
                      seriess.push({name:xxx[l],data:[dasta[l]]})
                  }
                }
                  else{

                    for(var k in dictt){
                          seriess.push({data:[{x:dictt[k][0],y:dictt[k][1],z:Number(dictt[k][1]/dictt[k][0]),name:k}]});

                    }
                  }
}



//////////////////////////////////////////////////////////////////////////////////////////////////////




function flexpie(inc){



                var add=""
                var calc=""
                switch(inc){

                  case 1:
                        add='.school'
                        calc='#pieval'
                        break;

                  case 2:
                        add='.schloc'
                        calc='#pieval2'
                        break;

                  }
                            xx=[]
                            $('td'+add).each(function(){
                              xx.push($(this).html())
                            })
                            yy=[];
                            $('td.male').each(function(){
                              yy.push($(this).html())
                            })

                            zz=[];
                            $('td.female').each(function(){
                              zz.push($(this).html())
                            })
                            dict={}
                            for(var i=0;i<xx.length;i++){
                              if(dict[xx[i]]){
                                    dict[xx[i]]=[dict[xx[i]][0]+Number(yy[i]),dict[xx[i]][1]+Number(zz[i])]
                              }
                              else{
                              dict[xx[i]]=[Number(yy[i]),Number(zz[i])]
                            }
                            }


                           yyy=[] 
                           var mval=100*(Number(dict[$('select'+calc).val()][0])/(Number((dict[$('select'+calc).val()][0]))+Number(dict[$('select'+calc).val()][1])))
                           var feval=100-mval
                           yyy.push(['Male',mval])
                           yyy.push(['Female',feval])

                           seriess=[{
                            type:'pie',
                            data:yyy
                           }]
                          
}




//////////////////////////////////////////////////////////////////////////////////////////////////////






            function vennn(){
               $(document).ready(function(){
                  var json={};
                  if(r==""){
              r='The Location Map'
             }
                  seriess= [{
                   type: 'venn',
                   name: 'The Location Map',
                   data: [{
                     sets: ['North'],
                     value: 2
                  }, {
                     sets: ['East'],
                     value: 2
                  }, 
                  {
                     sets: ['West'],
                     value: 2

                  }, 
                  {
                     sets: ['South'],
                     value: 2

                  }, 

                  {
                     sets: ['North','East'],
                     value: 1,
                     name: 'WAS'
                  }, {
                     sets: ['North','West'],
                     value: 1,
                     name: 'NZ'
                  }, {
                     sets: ['West','East'],
                     value: 1,
                     name: 'PEN'
                  },
                  {
                     sets: ['North','West','East'],
                     value: 1,
                     name: 'SCR'
                  },
                  {
                     sets: ['North','West','South'],
                     value: 1,
                     name: 'LA'
                  },

                  {
                   sets: ['South','West'],
                   value: 1,
                   name: 'CAN'
                },
                {
                   sets: ['South','North'],
                   value: 1,
                   name: 'NY'
                },

                ]
             }],


             
             title= {
              text: r
           }

             json.series=seriess;
             json.title=title;

             $('#container').highcharts(json);

            });
        }




//////////////////////////////////////////////////////////////////////////////////////////////////////





      function hist(){
                 data=[];
                 if(r==""){
                      r='Highcharts Histogram'
                    }
                 for(var i=0;i<$('select#histwhat').val().length;i++){
                  da=[];
                  $('td.'+$('select#histwhat').val()[i]).each(function(){
                    da.push(Number($(this).html()))
                 });
                  data.push(da)
                 }


                 

                
                  chartt={
                         },

                    
                    titlee= {
                     text: r
                  }

                  if(xname==""){
                    xname='Data'
                  }
                  if(yname==""){
                    yname="Data"
                  }
                  xAxis= [{
                     title: { text: 'Histogram' },
                     alignTicks: false,
                     opposite: true,
                     // range:1000
                  },
                  {
                     title: { text: xname },
                     alignTicks: false
                  }],

                  yAxis= [{
                     title: { text: yname }
                  }, {
                     title: { text: 'Histogram' },
                     opposite: true
                  }],

                  seriess= [{
                     name: 'Histogram',
                     type: 'histogram',
                     xAxis: 1,
                     yAxis: 1,
                     baseSeries: 's1',
                     zIndex: -1
                  }, {
                     name: 'Data',
                     type: 'scatter',
                     data: data[0],
                     id: 's1'
                    //  marker: {
                    //    radius: 1.5
                    // }
                 },
                 {
                     name: 'Histogram',
                     type: 'histogram',
                     xAxis: 1,
                     yAxis: 1,
                     baseSeries: 's2',
                     zIndex: 1,
                     color:'rgba(0,0,0,0.50)'
                  }, {
                     name: 'Data',
                     type: 'scatter',
                     data: data[1],
                     id: 's2'
                    //  marker: {
                    //    radius: 1.5
                    // }
                 },




                 ]
                   legend = {
                         layout: 'vertical',
                         align: 'right',
                         verticalAlign: 'middle',
                         borderWidth: 1,
                         shadow: true,

                      }; 
      
      }



    ////////////////////////////////////////////////////////////////////////////////////////////////



    function plotOpt(){
      switch($('select#graphtype').val()){
        case 'bar':
                  plotOptions = {
                     bar: {
                        dataLabels: {
                           enabled: true
                        }
                     }
                  };
                  break;

        case 'column':
                if($('input[type="checkbox"]').is(":checked")){
                      plotOptions={
                        column: {
                         stacking: 'normal',
                         dataLabels: {
                            enabled: true,
                            style: {
                               textShadow: '0 0 3px black'
                            }
                         }
                      }
                   }
               }
               else{         
                    plotOptions = {
                           column: {
                              pointPadding: 0.2,
                              borderWidth: 0
                           }
                        };   
                      } 
              break;

        case 'area':
         if($('input[type="checkbox"]').is(":checked")){
          plotOptions={ 
            area: {
               stacking: 'normal',
               lineColor: '#666666',
               lineWidth: 1,

               marker: {
                  lineWidth: 1,
                  lineColor: '#666666'
               }
                      }
                   };
                 }
          else{

            plotOptions = {
               area: {
                  pointStart: 1940,
                  marker: {
                     enabled: false,
                     symbol: 'circle',
                     radius: 2,
                     
                     states: {
                        hover: {
                           enabled: true
                        }
                     }
                  }
               }
            };  

            }
            break;


        case 'line':
                   plotOptions: {
                        series: {
                            label: {
                                connectorAllowed: false
                            }
                            // pointStart: 2010
                        }
                    }
            break;


        case 'scatter':
              plotOptions = {
               scatter: {
                  marker: {
                     radius: 5,
                     states: {
                        hover: {
                           enabled: true,
                           lineColor: 'rgb(100,100,100)'
                        }
                     }
                  },
                  states: {
                     hover: {
                        marker: {
                           enabled: false
                        }
                     }
                  },
                  tooltip: {
                     headerFormat: '<b>{series.name}</b><br>',
                     // pointFormat: '{point.x} cm, {point.y} kg'
                  }
               }
            }
            break;


        case 'bubble':
                plotOptions= {
                    series: {
                        dataLabels: {
                            enabled: true,
                            format: '{point.name}'
                        }
                    }
                }
                break;

      }
    }



//////////////////////////////////////////////////////////////////////////////////////////////////////




      function reset(){
        plotOpt();
         $(document).ready(function() {
            var json = {};

             json.credits = {
               enabled: false
             };

             json.chart=chartt;
             json.title = titlee;
             json.xAxis = xAxis;
             json.yAxis = yAxis;
             json.legend=legend;
             json.series = seriess;
             json.plotOptions=plotOptions;

             $('#container').highcharts(json);
          });
      }