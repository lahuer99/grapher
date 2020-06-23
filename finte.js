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
var plotlines=[];
var meann,mediann,percentile;

//////////////////////////////////////////////////////////////////////////////////////////

var classArray=[]
$('th').each(function(){
  var k=$(this).html().split(/-| /);
  var ss=k.join("")
  $(this).addClass(ss);
  classArray.push(ss);
});

var ca=0;
$('tr td').each(function(){
  $(this).addClass(classArray[ca]);
  ca+=1;
  if(ca==classArray.length){
    ca=0;
  }
});




var numArr=[];
var catArr=[];
$('tr:first-child td').each(function(){
  if($(this).html().match(/^\s*\d[\d,\.]*\s*$/)){
    numArr.push($(this).attr('class'))
  }
  else{
    catArr.push($(this).attr('class'))
  }
})


////////////////////////////////////////////////////////////////////////////////////////////


$('#xaxisselect').append('<div style="display:inline" id="xselect"></div><br>');


var sel1 = $('<select>').appendTo($('#xselect'));
sel1.addClass("js-example-basic-multiple");
sel1.addClass("form-control");
sel1.width("375px");
sel1.attr("name","xlabel")
sel1.attr("id","xwhat");


for(var i=0;i<catArr.length;i++){
  sel1.append($("<option>").attr('value',catArr[i]).text(catArr[i]));
}

/////////////////////////////////////////////////////////////////////////////////////////////

$('#yaxisselect').append('<div style="display:inline" id="yselect"></div><br>');


var sel2 = $('<select>').appendTo($('#yselect'));
sel2.addClass("js-example-basic-multiple");
sel2.addClass("form-control");
sel2.attr("multiple","multiple");
sel2.width("375px");
sel2.attr("name","ylabel")
sel2.attr("id","ywhat");


for(var i=0;i<numArr.length;i++){
  sel2.append($("<option>").attr('value',numArr[i]).text(numArr[i]));
}

/////////////////////////////////////////////////////////////////////////////////////////////

$('#scatbubyselect').append('<div style="display:inline" id="yselect1"></div><br>');


var sel2 = $('<select>').appendTo($('#yselect1'));
sel2.addClass("js-example-basic-multiple");
sel2.addClass("form-control");
sel2.width("375px");
sel2.attr("name","ylabel1")
sel2.attr("id","ywhat1");


for(var i=0;i<numArr.length;i++){
  sel2.append($("<option>").attr('value',numArr[i]).text(numArr[i]));
}

/////////////////////////////////////////////////////////////////////////////////////////////

$('#scatbubxselect').append('<div style="display:inline" id="xselect1"></div><br>');


var sel2 = $('<select>').appendTo($('#xselect1'));
sel2.addClass("js-example-basic-multiple");
sel2.addClass("form-control");
sel2.width("375px");
sel2.attr("name","xlabel1")
sel2.attr("id","xwhat1");


for(var i=0;i<numArr.length;i++){
  sel2.append($("<option>").attr('value',numArr[i]).text(numArr[i]));
}


/////////////////////////////////////////////////////////////////////////////////////////////

$('#scatbubzselect').append('<div style="display:inline" id="zselect1"></div><br>');


var sel2 = $('<select>').appendTo($('#zselect1'));
sel2.addClass("js-example-basic-multiple");
sel2.addClass("form-control");
sel2.width("375px");
sel2.attr("name","zlabel")
sel2.attr("id","zwhat");


for(var i=0;i<catArr.length;i++){
  sel2.append($("<option>").attr('value',catArr[i]).text(catArr[i]));
}


/////////////////////////////////////////////////////////////////////////////////////////////

$('#venndiffselect').append('<div style="display:inline" id="vennselect"></div><br>');


var sel2 = $('<select>').appendTo($('#vennselect'));
sel2.addClass("js-example-basic-multiple");
sel2.addClass("form-control");
sel2.width("375px");
sel2.attr("name","venndifflabel")
sel2.attr("id","venndiffwhat");


for(var i=0;i<catArr.length;i++){
  sel2.append($("<option>").attr('value',catArr[i]).text(catArr[i]));
}

/////////////////////////////////////////////////////////////////////////////////////////////

$('#vennforselect').append('<div style="display:inline" id="vennforselect"></div><br>');


var sel2 = $('<select>').appendTo($('#vennforselect'));
sel2.addClass("js-example-basic-multiple");
sel2.addClass("form-control");
sel2.attr("multiple","multiple");
sel2.width("375px");
sel2.attr("name","vennforlabel")
sel2.attr("id","vennforwhat");


for(var i=0;i<numArr.length;i++){
  sel2.append($("<option>").attr('value',numArr[i]).text(numArr[i]));
}


/////////////////////////////////////////////////////////////////////////////////////////////


$('#histosect').append('<div style="display:inline" id="histselect"></div><br>');


var sel2 = $('<select>').appendTo($('#histselect'));
sel2.addClass("js-example-basic-multiple");
sel2.addClass("form-control");
sel2.attr("multiple","multiple");
sel2.width("375px");
sel2.attr("id","histwhat");


for(var i=0;i<numArr.length;i++){
  sel2.append($("<option>").attr('value',numArr[i]).text(numArr[i]));
}


/////////////////////////////////////////////////////////////////////////////////////////////




$('#pieadders').append('<div style="display:inline" id="pieadderselect"></div><br>');


var sel2 = $('<select>').appendTo($('#pieadderselect'));
sel2.addClass("js-example-basic-multiple");
sel2.addClass("form-control");
sel2.attr("multiple","multiple");
sel2.width("375px");
sel2.attr("id","pieopt");


for(var i=0;i<numArr.length;i++){
  sel2.append($("<option>").attr('value',numArr[i]).text(numArr[i]));
}


/////////////////////////////////////////////////////////////////////////////////////////////




$('#pieoffs').append('<div style="display:inline" id="pieoffsselect"></div><br>');


var sel2 = $('<select>').appendTo($('#pieoffsselect'));
sel2.addClass("js-example-basic-multiple");
sel2.addClass("form-control");
sel2.width("375px");
sel2.attr("id","pieoffopt");


for(var i=0;i<catArr.length;i++){
  sel2.append($("<option>").attr('value',catArr[i]).text(catArr[i]));
}



/////////////////////////////////////////////////////////////////////////////////////////////

pieboom();
$('#pieoffopt').on('change',pieboom);

function pieboom(){


  $('#piewanted').empty();


$('#piewanted').append('<div style="display:inline" id="piewantedselect"></div><br>');

var sel2 = $('<select>').appendTo($('#piewantedselect'));
sel2.addClass("js-example-basic-multiple");
sel2.addClass("form-control");
sel2.width("375px");
sel2.attr("id","piewantedopt");


dicc={};
piearr=[];

$('td.'+$('#pieoffopt').val()).each(function(){
  var k=$(this).html().split(',');
  k.sort()
  var kk=k.join(',')

  if(dicc[kk]){
    // piearr.push({val:kk,text:kk});
  }
  else{
    dicc[kk]=1;
     piearr.push({val:kk,text:kk});
  }

});


$(piearr).each(function(){
  sel2.append($("<option>").attr('value',this.val).text(this.text));
});

}
  

/////////////////////////////////////////////////////////////////////////////////////////////



var arr;
var darr=[];
var xxx=[];

boom();
$('#venndiffwhat').on("change",boom);


function boom(){

  xxx=[];
  darr=[];

  $('#maindiv').empty();


$('#maindiv').append('<div class="form-group" style="margin-left:30px;"><div style="display:inline" id="newselect"></div></div><br>');


  

arr=[];


  $('td.'+$('#venndiffwhat').val()).each(function(){

    var k=$(this).html().split(',')
    k.sort()
    var kk=k.join(',')

    if(kk.indexOf(',')>-1 && !(xxx.includes(kk))){
      xxx.push(kk);
      

    }


    else if(xxx.includes(kk)){
      xxx.push(kk);
  }
    
    
    else{
    arr.push({val:kk,text:kk})
    xxx.push(kk);
    }
  });




var sel = $('<select>').appendTo($('#newselect'));
sel.addClass("js-example-basic-multiple");
sel.addClass("form-control");
sel.attr("multiple","multiple");
sel.width("95px");
sel.attr("id","basesetselect");

$(arr).each(function() {
 sel.append($("<option>").attr('value',this.val).text(this.text));

 
});
arr=[];

}



///////////////////////////////////////////////////////////////////////////////////////

$('#checkk').hide();
$('#histo').hide();
$('#scatbub').hide();
$('#vennpart').hide();
$('#piepart').hide();
$('#percent').hide();

///////////////////////////////////////////////////////////////////////////////////////


$('#butt').on("click",function(){
  $('#fulfli').removeClass('active')
  $('#fulsli').addClass('active')

   action();
});



$('#applybutt').on("click",function(){
  $('#sulsli').removeClass('active')
  $('#sulfli').addClass('active')

  action();
});



$('#extrawhat').on("change",function(){
  if($(this).val().includes('gpercentile') || $(this).val().includes('ipercentile')){
    $('#percent').show();
    // setTimeout
  }
  else{
    $('#percent').hide();
  }
});


$('#checkbox2').on('change',function(){
    if($('input#checkbox2[type="checkbox"]').is(":checked")){
           $('#pieaddopts').show();
              $('#piewantedlabel').show();}
              else{
                  $('#pieaddopts').hide();
              $('#piewantedlabel').hide();
              }

});


///////////////////////////////////////////////////////////////////////////////////////



$('select#graphtype').on('change',function(){
   


   $('#checkk').hide();
   $('#axissel').show();
   $('#histo').hide();
   $('#piepart').hide();
   $('#checkk2').hide();
   $('#pieaddopts').hide();
   $('#piewantedlabel').hide();
   $('#yaxislabel').show();
   $('#xaxislabel').show();
   $('#scatbub').hide();
   $('#vennpart').hide();


   if ($(this).val()==='venn') {
      $('#axissel').hide();
      $('#yaxislabel').hide();
      $('#xaxislabel').hide();
      $('#vennpart').show();
   }

   else if($(this).val()==='scatter' || $(this).val()==='bubble'){
      $('#axissel').hide();
      $('#vennpart').hide();
      $('#scatbub').show();
    }

   else if($(this).val()==='pie'){
    $('#axissel').hide();
    $('#yaxislabel').hide();
    $('#xaxislabel').hide();
    $('#scatbub').hide();
    $('#vennpart').hide();
    $('#piepart').show();
    $('#checkk2').show();
    $('#pieaddopts').hide();
    $('#piewantedlabel').hide();
   }

   else if($(this).val()==='column' || $(this).val()==='area' || $(this).val()==='bar'){
      $('#checkk').show();
      $('#piepart').hide();
      $('#vennpart').hide();
      $('#scatbub').hide();
      $('#axissel').show();
   }
   
   else if($(this).val()==='histogram'){
      $('#axissel').hide();
      $('#histo').show();
      $('#piepart').hide();
      $('#vennpart').hide();
   }


  else{
      $('#axissel').show();
      $('#yaxislabel').show();
      $('#scatbub').hide();
      $('#xaxislabel').show();
      $('#histo').hide();
      $('#piepart').hide();
      $('#vennpart').hide();
}

});


///////////////////////////////////////////////////////////////////



function action(){

   var ty=$('select#graphtype').val();

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
                  labelSetter2();
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

                  reset();
                  break;

      case 'scatter':
                  labelSetter2();
                  scatterbubbler('scatter');
                  reset();
                  break;



      case 'histogram':
                  histoSetter();
                  hist();
                  break;


      case 'venn':
                  titleSetter();
                  vennn();
                  break;


      case 'pie':
                titleSetter();
                pier();
                break;

               }

            $('#xaxisname').val("");
            $('#yaxisname').val("");
            $('#titlename').val("");
            }



///////////////////////////////////////////////////////////////////////////////////////////////////////




function boiler(){
              labelSetter();
              seriess=[];
               chartt={
                  type:$('select#graphtype').val()
                };
                




                xx=[];
                $('td.'+$('#xwhat').val()).each(function(){
                     var k=$(this).html().split(',');
                     k.sort()
                     var kk=k.join(',')
                     xx.push(kk)
                           
                });
    

                var xxx=[];
                yy=[];
                for(var i=0;i<$('#ywhat').val().length;i++){
                    dict={};j=0;

                    $('td.'+$('#ywhat').val()[i]).each(function(){
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
                       xxx[l]=k
                       yyy[l]=dict[xxx[l]];
                       l++;
                    }
                    yy.push(yyy);
                };

                    xAxis = {
                      categories: xxx
                     
                    };
                    var gcount=0;


                    if($('#extrawhat').val().length==0){

                       yAxis = {
                              // min:0,
                       title: {
                          text: yname
                       },
                       labels:{
                          overflow:'justify'
                       }
                    };   


                    }

                    else{

                      
                      plotlines=[];
                     
                      for(var i=0;i<$('#extrawhat').val().length;i++){


                        if($('#extrawhat').val()[i]=='gmean'){
                          gcount+=1;
                          meann=calcMean(yy);


                          for(var j=0;j<$('#ywhat').val().length;j++){
                            plotlines.push({color:random_rgba(),zIndex:2,name:'mean('+$('#ywhat').val()[j]+')',value:meann[j]});
                          }
                          
                        }


                        else if($('#extrawhat').val()[i]=='gmedian'){
                          gcount+=1;
                        
                          mediann=calcMedian(yy);
                          
                          for(var j=0;j<$('#ywhat').val().length;j++){
                          
                          plotlines.push({color:random_rgba(),zIndex:2,name:'median('+$('#ywhat').val()[j]+')',value:mediann[j]});
                        }
                        }


                        else if($('#extrawhat').val()[i]=='gpercentile'){
                          gcount+=1;
                          percentile=calcPercentile(yy);
                          for(var j=0;j<$('#ywhat').val().length;j++){
                          plotlines.push({color:random_rgba(),zIndex:2,name:(Number($('#percentileval').val())).toString()+'% ile('+$('#ywhat').val()[j]+')',value:percentile[j]});
                        }

                      }


                      else if($('#extrawhat').val()[i]=='imean'){
                            var meanarr=[];
                            for(var i=0;i<xx.length;i++){
                              var sum=0;
                              for(var j=0;j<$('#ywhat').val().length;j++){
                                sum+=Number(yy[j][i])
                              }
                             meanarr.push(sum/$('#ywhat').val().length);
                            }
                            seriess.push({name:'i.means',data:meanarr})

                            }


                      else if($('#extrawhat').val()[i]=='imedian'){
                            var medianarr=[];

                            for(var i=0;i<xx.length;i++){
                              var subarr=[];
                             for(var j=0;j<$('#ywhat').val().length;j++){
                                subarr.push(Number(yy[j][i]))
                              }
                             medianarr.push(subarr);
                            }


                            var reqdata=[];
                            for(var k=0;k<medianarr.length;k++){
                              var m=calcImedian(medianarr[k])
                              reqdata.push(m)
                            }

                            seriess.push({name:'i.medians',data:reqdata})

                      }



                       else if($('#extrawhat').val()[i]=='ipercentile'){
                        var percentilearr=[];

                            for(var i=0;i<xx.length;i++){
                              var subpercentilearr=[];
                             for(var j=0;j<$('#ywhat').val().length;j++){
                                subpercentilearr.push(Number(yy[j][i]))
                              }
                             percentilearr.push(subpercentilearr);
                            }


                             var reqdata=[];
                            for(var k=0;k<percentilearr.length;k++){
                              var p=calcIpercentile(percentilearr[k])
                              reqdata.push(p)
                            }

                            seriess.push({name:'i.percentile',data:reqdata})

                       }
         
    }
        


                       yAxis = {
                              // min:0,
                       title: {
                          text: yname
                       },
                       labels:{
                          overflow:'justify'
                       },
                       plotLines:plotlines
                    };    


      }
                   
                 

                    legend = {
                         layout: 'vertical',
                         align: 'right',
                         verticalAlign: 'middle',
                         borderWidth: 0,
                         shadow:true,
                         labelFormatter:function(){
                          return this.name
                         }
                      };


                if(!$('#extrawhat').val().includes('imean') && !$('#extrawhat').val().includes('imedian') && !$('#extrawhat').val().includes('ipercentile')) {

                       
                for(var j=0;j<$('#ywhat').val().length;j++){
                      seriess.push({name:$('#ywhat').val()[j],data:yy[j]});
                      
                }
                var ll=($('#ywhat').val().length)*($('#extrawhat').val().length)
                for(var l=0;l<gcount;l++){
                      seriess.push(plotlines[l]);
                  }
                }

}


/////////////////////////////////////////////////////////



        function calcMean(yy){
              var avgarr=[];
              for(var i=0;i<yy.length;i++){
                var sum=0;var avg=0;
                 sum = yy[i].reduce((a, b) => a + b, 0);
           avg = (sum / yy[i].length) || 0;
           avgarr.push(avg);
              }
    
         return avgarr;

        }



       function calcMedian(duppyy){
              var medd=[];
              for(var i=0;i<duppyy.length;i++){
                var dup=duppyy[i].slice();
                dup.sort(function(a,b){
              return a-b;
            });

            var half = Math.floor(dup.length / 2);

            if (dup.length % 2)
            {   medd.push(dup[half]);}
          else{
            medd.push((dup[half - 1] + dup[half]) / 2.0);

          }

            

              }
              return medd;

        }




        function calcPercentile(yy){
              var perr=[];
              var req=Number($('#percentileval').val())
              for(var i=0;i<yy.length;i++){
                var dup=yy[i].slice();
           
                var q=Math.floor((req/100)*dup.length);
                
                dup.sort(function(a,b){
              return a-b;
            });
                
                perr.push(dup[q]);

              }
              return perr;

       }




        function calcImedian(arrr){
          arrr1=arrr.slice();
          arrr1.sort(function(a,b){
                      return a-b;
                    });

                    var half = Math.floor(arrr1.length / 2);

                    if (arrr1.length % 2)
                    {   return arrr1[half];}
                  else{
                    return ((arrr1[half - 1] + arrr1[half]) / 2.0);

                  }

        }





          function calcIpercentile(ar){
            ar1=ar.slice();
            var req=Number($('#percentileval').val())
           var q=Math.floor((req/100)*ar1.length);
                          
                          ar1.sort(function(a,b){
                        return a-b;
                      });
                          
                         return ar1[q];
          }




/////////////////////////////////////////////////////////////


function labelSetter(){
                    if($('#titlename').val()==""){
                        r=$('th.'+$('select#xwhat').val()).html()+' vs ( '
                            for(var i=0;i<$('select#ywhat').val().length;i++){
                              r+=$('th.'+$('select#ywhat').val()[i]).html()+', '
                        }
                        r+=')'  
                    }
                    else{
                      r=$('#titlename').val()
                    }

                    titlee={
                      text:r
                    }



                    if($('#xaxisname').val()==""){
                      xname=$('th.'+$('select#xwhat').val()).html()
                    }
                    else{
                      xname=$('#xaxisname').val()
                    }



                    if($('#yaxisname').val()==""){
                      yname=$('th.'+$('select#ywhat').val()).html()
                    }
                    else{
                      yname=$('#yaxisname').val()
                    }

}





////////////////////////////////////////////////////////////////////////////////////////////////////////////////



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

                    var k=$(this).html().split(',')
                    k.sort()
                    var kk=k.join(',')
                    zz.push(kk)
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


/////////////////////////////////////////////////////////////////


function labelSetter2(){
                    if($('#titlename').val()==""){
                        r=$('th.'+$('select#xwhat1').val()).html()+' vs ( '
                              r+=$('th.'+$('select#ywhat1').val()).html();
                              r+=')';
                    }
                    else{
                      r=$('#titlename').val()
                    }
                      
                    titlee={
                      text:r
                    }



                    if($('#xaxisname').val()==""){
                      xname=$('th.'+$('select#xwhat1').val()).html()
                    }
                    else{
                      xname=$('#xaxisname').val()
                    }



                    if($('#yaxisname').val()==""){
                      yname=$('th.'+$('select#ywhat1').val()).html()
                    }
                    else{
                      yname=$('#yaxisname').val()
                    }

}




////////////////////////////////////////////////////////////////////////////////////////////////////////////////






function hist(){

          $(document).ready(function(){
            var json={};

                 data=[];

                 for(var i=0;i<$('select#histwhat').val().length;i++){
                  da=[];
                  $('td.'+$('select#histwhat').val()[i]).each(function(){
                    da.push(Number($(this).html()))
                 });
                  data.push(da)
                 }

                    
                    json.title= titlee;

                  json.xAxis= [{
                     title: { text: 'Histogram' },
                     alignTicks: false,
                     opposite: true,
                     // range:1000
                  },
                  {
                     title: { text: xname },
                     alignTicks: false
                  }]

                  json.yAxis= [{
                     title: { text: yname }
                  }, {
                     title: { text: 'Histogram' },
                     opposite: true
                  }]

                  var seriess=[];

                  for(var i=0;i<data.length;i++){
                    seriess.push({
                      name: 'Histogram',
                     type: 'histogram',
                     xAxis: 1,
                     yAxis: 1,
                     baseSeries: 's'+i,
                     zIndex: -1,
                     color:random_rgba()
                    },
                    {
                     name: 'Data',
                     type: 'scatter',
                     data: data[i],
                     id: 's'+i
                    //  marker: {
                    //    radius: 1.5
                    // }
                 },
                    )
                  }

                  json.series=seriess;
        
                  json.legend = {
                         layout: 'vertical',
                         align: 'right',
                         verticalAlign: 'middle',
                         borderWidth: 1,
                         shadow: true,

                      }; 



 $('#container').highcharts(json);

          });
}


/////////////////////////////////////////////////////////////////


function histoSetter(){

                    if($('#titlename').val()==""){
                      r='Histogram of '
                      for(var i=0;i<$('#histwhat').val().length;i++){
                        r+=$('th.'+$('#histwhat').val()[i]).html()+', '
                      }
                    }
                    else{
                      r=$('#titlename').val()
                    }

                      
                    titlee={
                      text:r
                    }



                    if($('#xaxisname').val()==""){
                      xname='Data'
                    }
                    else{
                      xname=$('#xaxisname').val()
                    }



                    if($('#yaxisname').val()==""){
                      yname='Data'
                    }
                    else{
                      yname=$('#yaxisname').val()
                    }

}






////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function pier(){


$(document).ready(function(){
                  var json={};

                  var piarr=[];
                  $('td.'+$('#pieoffopt').val()).each(function(){
                    var k=$(this).html().split(',')
                    k.sort()
                    var kk=k.join(',')
                    piarr.push(kk)
                  })

  
var data=[];
if($('input#checkbox2[type="checkbox"]').is(":checked")){

               $('#pieaddopts').show();
              $('#piewantedlabel').show();


                yy=[];var realpiarr=[];
                for(var i=0;i<$('#pieopt').val().length;i++){
                    dict={};j=0;

                    $('td.'+$('#pieopt').val()[i]).each(function(){
                       if(dict[piarr[j]]){
                          dict[piarr[j]]+=Number($(this).html());
                       }
                       else{
                     
                          dict[piarr[j]]=Number($(this).html());
                       }
                       j++;
                    });

                    yyy=[];l=0;
                    for(var k in dict){
                       realpiarr[l]=k;
                       yyy[l]=dict[realpiarr[l]];
                       l++;
                    }

                    yy.push(yyy);
                };


                var data=[];
                var sum=0;var qq;
                for(var i=0;i<realpiarr.length;i++){
                  if($('#piewantedopt').val()==realpiarr[i]){
                    qq=i;
                    for(var j=0;j<$('#pieopt').val().length;j++){
                      sum+=Number(yy[j][i])
                    }
                   }
                }
                 

               for(var j=0;j<$('#pieopt').val().length;j++){
                      data.push([$('#pieopt').val()[j],(Number(yy[j][qq])/sum)*100])
                    }
    }

    else{
                 data=[];
                  var dictc={};
                  for(var i=0;i<piarr.length;i++){
                    if(dictc[piarr[i]]){
                      dictc[piarr[i]]+=1;
                    }
                    else{
                       dictc[piarr[i]]=1;
                    }
                  }

                  for(var k in dictc){
                    data.push([k,dictc[k]])
                  }
                }


seriess=[{
                     type:'pie',
                     data:data

                  }]

          titlee={text:r}

json.series=seriess;
json.title=titlee;


  $('#container').highcharts(json);
})


}

//////////////////////////////////////////////////////////////////////////////////////////////////////




var segments;
function vennn(){
            $(document).ready(function(){
                  var json={};

                var basesets=[];dataa=[];
                 for(var i=0;i<$('#basesetselect').val().length;i++){
                  
                
                  
                  darr.push($("#basesetselect").val()[i]);
                  
                  }


                  let checker = (arr, target) => target.every(v => arr.includes(v));


                  for(var kk=0;kk<xxx.length;kk++){
                    var segments=xxx[kk].split(',');

                    if(checker(darr,segments) && !darr.includes(xxx[kk])){
                      darr.push(xxx[kk]);
                    }

                  }

               

                  dict={};


                  var i=0;
                 
                  $('td.'+$('#vennforwhat').val()).each(function(){

                    if(darr.includes(xxx[i])){
                    



                    //  if(xxx[i].indexOf(',')>-1){
                    
                    //    segments=xxx[i].split(',');
                        
                    //      for(var d=0;d<segments.length;d++){
                    //      if(darr.includes(segments[d])){
                    //        if(dict[segments[d]]){
                    //  dict[segments[d]]+=Number($(this).html());
                    // }
                    // else{
                    //  dict[segments[d]]=Number($(this).html());
                    // }

                    //      }
                 
                    //    }


                    //  }


                      if(dict[xxx[i]]){
                      dict[xxx[i]]+=Number($(this).html());
                    }
                    else{
                      dict[xxx[i]]=Number($(this).html());
                    }




                    }



                    i+=1;


                  });

               


                  darr=[];
                  for(var k in dict){
                    if(k.indexOf(',')>-1){
                      var jj=k.split(',')
                      dataa.push({sets:jj,value:1,name:k+ "\n" +dict[k].toString()})
                    }
                    else{
                      var j=[k];
                    dataa.push({sets:j,value:2,name:k+ "\n"  +(dict[k]).toString()})
                  }
                  }






                json.series= [{
                  type: 'venn',
                  name: 'The Unattainable',
                  data:dataa
                }];

               
               json.title={text:r}
              


  $('#container').highcharts(json);

            });
        }



///////////////////////////////////////////////////////////////////////////////////////////////////////////

function titleSetter(){
 
    if($('#graphtype').val()=='pie'){
      if($('#titlename').val()==""){
        r='No of '+$('select#pieoffopt').val()
      }
      else{
       r=$('#titlename').val()
      }
    }
  else{
    if($('#titlename').val()==""){
       r='venn of '
                  for(var i=0;i<$('#basesetselect').val().length;i++){
                      r+=($("#basesetselect").val()[i])+',';             
                  }
      }
      else{
       r=$('#titlename').val()
      }
  }
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////





function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    if($('#graphtype').val()=='histogram'){
          return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
    }
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + '1' + ')';
    // r().toFixed(1)
}


               

//////////////////////////////////////////////////////////////////////////////////////////////////////////////




function plotOpt(){
      switch($('select#graphtype').val()){
        case 'bar':
              if($('input[type="checkbox"]').is(":checked")){
                plotOptions={
                        series: {
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
                     bar: {
                        dataLabels: {
                           enabled: true
                        }
                     }
                  };
              }
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
                              // pointWidth:3,
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
                  // pointStart: 1940,
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
                   plotOptions= {
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

        default:plotOptions={}

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