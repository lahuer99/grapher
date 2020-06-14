var chartt;
var seriess;
var titlee;
var legend;
var xAxis;
var yAxis;
var xx=[];
var yy=[];

$('#checkk').hide();
$('#histo').hide();
$('#pielabel').hide();
$('#pielabel2').hide();
$('#pieopts').hide();

$('#butt').on("click",function(){
   action();
});

$('select.graphtype').on('change',function(){
   $('#checkk').hide();
   $('#axissel').show();
   // $('#xsel').show();
   $('#histo').hide();
   $('#pielabel').hide();
   $('#pielabel2').hide();
   $('#pieopts').hide();
   // $('#xval').html('Choose X-axis:')
   // $('select.ywhat').attr("multiple","multiple")
   if ($(this).val()==='venn' || $(this).val()==='bubble') {
      // $('#hidd').hide();
      // $('#xsel').hide();
      $('#axissel').hide();
      // $('#pielabel').hide();
      // $('#pielabel2').hide();
      // $('#pieopts').hide();
   }
   else if($(this).val()==='pie'){
    $('#axissel').hide();
    // $('#xsel').show();
    // $('xsel').hide();
    $('#pieopts').show();
    // $('#xval').html('Choose value')
   }
   else if($(this).val()==='column' || $(this).val()==='area'){
      $('#checkk').show();
      // $('#pielabel').hide();
      // $('#pielabel2').hide();
      $('#pieopts').hide();
      // $('#pieoptions').hide();
   }
   // else if($(this).val()==='combi'){
   //    // $('select.ywhat').removeAttr("multiple");
   //    // $('#pielabel').hide();
   //    // $('#pielabel').hide();
   //    // $('#pielabel2').hide();
   //    $('#pieopts').hide();

   // }
   else if($(this).val()==='histogram'){
      // $('#hidd').hide();
      // $('#xsel').hide();
      $('#axissel').hide();
      $('#histo').show();
      // $('#pielabel').hide();
      // $('#pielabel2').hide();
      $('#pieopts').hide();
      // $('#pielabel').hide();
   }
});


$('select.pieopt').on('change',function(){
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
   var ty=$('select.graphtype').val();

   switch(ty){
      case 'line':
                  boiler();
                  reset();
                  break;

      case 'bar':
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
                  bubbler();
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
                  for(var i=0;i<$('select.ywhat').val().length;i++){
                    yy=[];
                        $('td.'+$('select.ywhat').val()[i]).each(function(){
                     yy.push(Number($(this).html()));
                  });
                        dat.push(yy);

                  }
                  
                  titlee={
                    text:$('th.'+$('select.xwhat').val()).html() + ' vs ' +$('th.'+$('select.ywhat').val()).html()
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
                  boiler();
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

                  if($('select.pieopt').val()==='mfsch'){
                    // $('pieval')
                    console.log("KERI")
                    $('#pielabel').show();
                    $('#pielabel2').hide();
                    flexpie(1);
                  }
                  else if($('select.pieopt').val()==='mfloc'){
                    $('#pielabel2').show();
                    $('#pielabel').hide();
                    flexpie(2);
                  }
                  else{
                  var dic={};
                  yy=[];
                  $('td.'+$('select.pieopt').val()).each(function(){
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

                  titlee={text:'No of '+$('select.pieopt').val()}
                  seriess=[{
                     type:'pie',
                     data:yy

                  }]
                }
                  
                  reset();
                  break;

               }
            }


/////////////////////////////////////////////////////////////////////////////////////////////////////////////

function flexpie(inc){



// xx=[];
//                   $('td.'+$('select.xwhat').val()).each(function(){
//                      xx.push($(this).html());
//                   });
      
//                  yy=[];
//                  for(var i=0;i<$('select.ywhat').val().length;i++){
//                     dict={};j=0;

//                     $('td.'+$('select.ywhat').val()[i]).each(function(){
//                        if(dict[xx[j]]){
//                           dict[xx[j]]+=Number($(this).html());
//                        }
//                        else{
//                           dict[xx[j]]=Number($(this).html());
//                        }
//                        j++;
//                     });

//                     yyy=[];l=0;
//                     for(var k in dict){
//                        xx[l]=k;
//                        yyy[l]=dict[xx[l]];
//                        l++;

                var add=""
                var calc=""
                switch(inc){

                  // case 1:
                  //       break;

                  // case 2:
                  //       break;

                  case 1:
                        add+='school'
                        calc+='pieval'
                        break;

                  case 2:
                        add+='schloc'
                        calc+='pieval2'
                        break;

                  }
                            xx=[]
                            $('td.'+add).each(function(){
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
                           var mval=100*(Number(dict[$('select.'+calc).val()][0])/(Number((dict[$('select.'+calc).val()][0]))+Number(dict[$('select.'+calc).val()][1])))
                           var feval=100-mval
                           yyy.push(['Male',mval])
                           yyy.push(['Female',feval])

                           seriess=[{
                            type:'pie',
                            data:yyy
                           }]
                          
}





    /////////////////////////////////////////////////////////////////////////////////



            function bubbler(){
  
                  xx=[]
                  $('td.school').each(function(){
                    xx.push($(this).html())
                  });

                  chartt = {
                     type: 'bubble',
                     zoomType: 'xy'
                  };
                  
                  xAxis={
                     title:{
                              text:'males'
                            }
                  }

                  yAxis = {
                                    min:0,
                            title:{
                              text:'females'
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


                  titlee = {
                     text: 'Male:Female ratio in schools'   
                  };   

                  yy=[];
                  $('td.male').each(function(){
                    yy.push($(this).html())
                  })

                  zz=[];
                  $('td.female').each(function(){
                    zz.push($(this).html())
                  })

                 

                  dasta=[];dastaa=[];
                  for(var l=0;l<xx.length;l++){

                    dasta.push({x:Number(yy[l]),y:Number(zz[l]),z:Number(yy[l]/zz[l]),name:xx[l]})
                    // dasta.push(Number(zz[l]))
                    // dasta.push(Number(yy[l]/zz[l]));
                    // // dasta.push({name:xx[l]})

                      // dastaa.push(dasta);
                      // dasta=[]
                  }
                  // data
                  seriess=[];
                  seriess.push({data:dasta});
            }




    ////////////////////////////////////////////////////////////////////////////////////////////////////////





            function vennn(){
               $(document).ready(function(){
                  var json={};
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
              text: 'The Location Map'
           }

             json.series=seriess;
             json.title=title;

             $('#container').highcharts(json);

            });
        }




        //////////////////////////////////////////////////////////////////////////////





            function boiler(){
               chartt={
                  type:$('select.graphtype').val()},
                  xx=[];
                  $('td.'+$('select.xwhat').val()).each(function(){
                     xx.push($(this).html());
                  });
      
                 yy=[];
                 for(var i=0;i<$('select.ywhat').val().length;i++){
                    dict={};j=0;

                    $('td.'+$('select.ywhat').val()[i]).each(function(){
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
                    yyy=[];dict={};
                  }


                   seriess=[];
                    for(var j=0;j<$('select.ywhat').val().length;j++){
                      seriess.push({name:$('select.ywhat').val()[j],data:yy[j]});
                   }


                    
                    var r=$('th.'+$('select.xwhat').val()).html()+' vs ( '
                        for(var i=0;i<$('select.ywhat').val().length;i++){
                          r+=$('th.'+$('select.ywhat').val()[i]).html()+', '
                    }
                    r+=')'  
                    titlee={
                      text:r
                    }


                    xAxis = {
                      categories: xx
                    };

                    yAxis = {
                              min:0,
                       title: {
                          text: $('th.'+$('select.ywhat').val()).html()
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
            }




/////////////////////////////////////////////////////////////////////////////////////////////



      function hist(){
                 data=[];
                 for(var i=0;i<$('select.histwhat').val().length;i++){
                  da=[];
                  $('td.'+$('select.histwhat').val()[i]).each(function(){
                    da.push(Number($(this).html()))
                 });
                  data.push(da)
                 }


                 

                
                  chartt={
                         },

                    titlee= {
                     text: 'Highcharts Histogram'
                  }

                  xAxis= [{
                     title: { text: 'Histogram' },
                     alignTicks: false,
                     opposite: true,
                     // range:1000
                  },
                  {
                     title: { text: 'Data' },
                     alignTicks: false
                  }],

                  yAxis= [{
                     title: { text: 'Data' }
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
                         borderWidth: 0
                      }; 
      
      }



    ////////////////////////////////////////////////////////////////////////////////////////////////




      function reset(){
         $(document).ready(function() {
            var json = {};

            // if($('select.graphtype').val()==='histogram'){
            //   json.plotOptions= {
            //                   series: {
            //                       pointWidth: 50
            //                   }
            //               }
            // }

            if($('select.graphtype').val()==='bubble'){
               json.plotOptions= {
        series: {
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }
    }
    json.tooltip={
        useHTML: true,
        headerFormat: '<table>',
        pointFormat: '<tr><th colspan="2"><h3>{point.name}</h3></th></tr>' +
            '<tr><th>Males:</th><td>{point.x}</td></tr>' +
            '<tr><th>Females:</th><td>{point.y}</td></tr>' +
            '<tr><th>M:F ratio:</th><td>{point.z}</td></tr>',
        footerFormat: '</table>',
        followPointer: true
    }
    }



            if($('input[type="checkbox"]').is(":checked")){
               if($('select.graphtype').val()==='column'){
                 json.plotOptions={
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
             else if($('select.graphtype').val()==='area'){
              json.plotOptions={ area: {
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
             }


             json.chart=chartt;
             json.title = titlee;
             json.xAxis = xAxis;
             json.yAxis = yAxis;
             json.legend=legend;
             json.series = seriess;


             $('#container').highcharts(json);
          });
      }