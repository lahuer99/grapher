// highcharts variables

var chartt;
var seriess;
var titlee="";
var legend;
var xAxis;
var yAxis;
var plotOptions;

// other variables

var xx=[];
var yy=[];
var r="";
var xname="";
var yname="";
var plotlines=[];
var meann,mediann,percentile;

//for venn section
var arr=[];
var darr=[];
var xxx=[];

var segments;


// hide on initial showup

$('#stackCheck').hide();
$('#histogramSelect').hide();
$('#pieOptions').hide();

// $('#pieOptions').hide();
// $('#pieOptions2').hide();

$('#scatterBubble').hide();
$('#vennSection').hide();
$('#percentileLabel').hide();


// to switch tabs on goButton click(table->chart tab)

$('#goButton').on("click",function(){
  $('#fulfli').removeClass('active')
  $('#fulsli').addClass('active')
  action();
});


// to show percentile value input box,if percentile is selected

$('#extrawhat').on("change",function(){
	if($(this).val().includes('percentile')){
		$('#percentileLabel').show();
	}
	else{
		$('#percentLabel').hide();
	}
});



// $('select#pieopt').on('change',function(){
//   if($(this).val()==='mfsch'){
//       $('#pielabel').show();
//       $('#pielabel2').hide();
//   }
//   else if($(this).val()==='mfloc'){
//       $('#pielabel').hide();
//       $('#pielabel2').show();
//   }
//   else{
//     $('#pielabel').hide();
//     $('#pielabel2').hide();
//   }

// });


//section for venn

$('#venndiffwhat').on("change",function(){

	xxx=[];
	// darr=[];
	$('#maindiv').empty();


$('#maindiv').append('<div class="form-group" style="margin-left:30px;"><div style="display:inline" id="newselect"></div></div><br>');

arr=[];


	$('td.'+$('#venndiffwhat').val()).each(function(){

		if($(this).html().indexOf(',')>-1 && !(xxx.includes($(this).html()))){
			xxx.push($(this).html());
		}

		else if(xxx.includes($(this).html())){
				xxx.push($(this).html());
		}
		
		else{
				arr.push({val:$(this).html(),text:$(this).html()})
				xxx.push($(this).html());
		}
	});


//creating dynamic select for basesets

var sel = $('<select>').appendTo($('#newselect'));
sel.addClass("js-example-basic-multiple");
// sel.addClass("form-control");
sel.attr("multiple","multiple");
sel.width("95px");
sel.attr("id","basesetselect");

$(arr).each(function() {
 sel.append($("<option>").attr('value',this.val).text(this.text));
});

});



//setting up user selected names and switching
//b/w customize and choose tabs

$('#applybutton').on("click",function(){
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


//on change of graphtypes

$('select#graphtype').on('change',function(){
   


   $('#stackCheck').hide();
   $('#axissel').show();
   $('#histogramSelect').hide();
   // $('#pielabel').hide();
   // $('#pielabel2').hide();
   $('#pieOptions').hide();
   $('#yaxislabel').show();
   $('#xaxislabel').show();
   $('#scatterBubble').hide();
   $('#vennSection').hide();



   if ($(this).val()==='venn') {
      $('#axissel').hide();
      $('#vennSection').show();
   }

   else if($(this).val()==='scatter' || $(this).val()==='bubble'){
    	$('#axissel').hide();
    	$('#vennSection').hide();
		$('#scatterBubble').show();
   }

   else if($(this).val()==='pie'){
    	$('#axissel').hide();
    	$('#yaxislabel').hide();
	    $('#xaxislabel').hide();
		$('#scatterBubble').hide();
  		$('#vennSection').hide();
		$('#pieOptions').show();
   }

   else if($(this).val()==='column' || $(this).val()==='area' || $(this).val()==='bar'){
        $('#stackCheck').show();
   	    $('#pieOptions').hide();
        $('#vennSection').hide();
		$('#scatterBubble').hide();
		$('#axissel').show();
   }
   
   else if($(this).val()==='histogram'){
      $('#axissel').hide();
      $('#histogramSelect').show();
      $('#pieOptions').hide();
      $('#vennSection').hide();
   }


	else{
  	  $('#axissel').show();
	  $('#yaxislabel').show();
	  $('#scatterBubble').hide();
      $('#xaxislabel').show();
      $('#histogramSelect').hide();
      $('#pieOptions').hide();
      $('#vennSection').hide();
}

});

/////////////////////////////////////////////////////////////////


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
                  labelSetter2();
                  scatterbubbler('scatter');
                  reset();
                  break;



      case 'histogram':
                  // labelSetter();
                  hist();
                  break;


      case 'venn':
                  vennn();
                  break;


      case 'pie':
                pier();
                break;

               }

                r=xname=yname="";
            }




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




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
                };


              


                    xAxis = {
                      categories: xx
                     
                    };






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

                    	// var plotlines=[];
                    	plotlines=[];
                    	// var meann,mediann,perncentile;

                    	
                    	for(var i=0;i<$('#extrawhat').val().length;i++){
                    		

                    		if($('#extrawhat').val()[i]=='mean'){
                    			meann=calcMean(yy);


                    			for(var j=0;j<$('#ywhat').val().length;j++){
                    				plotlines.push({color:random_rgba(),zIndex:2,name:'mean('+$('#ywhat').val()[j]+')',value:meann[j]});
                    			}
                    			
                    		}


                    		else if($('#extrawhat').val()[i]=='median'){
                    		
                    			mediann=calcMedian(yy);
                    			
                    			for(var j=0;j<$('#ywhat').val().length;j++){
                    			
                    			plotlines.push({color:random_rgba(),zIndex:2,name:'median('+$('#ywhat').val()[j]+')',value:mediann[j]});
                    		}
                    		}


                    		else if($('#extrawhat').val()[i]=='percentile'){
                    			percentile=calcPercentile(yy);
for(var j=0;j<$('#ywhat').val().length;j++){
                    			plotlines.push({color:random_rgba(),zIndex:2,name:(Number($('#percentileval').val())).toString()+'% ile('+$('#ywhat').val()[j]+')',value:percentile[j]});
                    		}

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

                       seriess=[];
                for(var j=0;j<$('select#ywhat').val().length;j++){
                      seriess.push({name:$('select#ywhat').val()[j],data:yy[j]});
                      
                }
                var ll=($('#ywhat').val().length)*($('#extrawhat').val().length)
                for(var l=0;l<ll;l++){
                      seriess.push(plotlines[l]);
                  }


            }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Venn Part

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
                  	



	                  	if(xxx[i].indexOf(',')>-1){
	                  	
	                  		segments=xxx[i].split(',');
	                  			
	                  	 for(var d=0;d<segments.length;d++){
	                  				if(darr.includes(segments[d])){
	                  					if(dict[segments[d]]){
				                  					dict[segments[d]]+=Number($(this).html());
						                  	}
						                  	else{
						                  		dict[segments[d]]=Number($(this).html());
						                  	}
	                  				
	                  				}                 
	                  			}

	                  	}


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



                  if(r==""){
                    r='Venn'
                  }

                  json.title={text:r}
                 
  $('#container').highcharts(json);

            });

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////


//scatterBubble

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


////////////////////////////////////////////////////////////////////////////////////////////////



function hist(){

          $(document).ready(function(){
            var json={};



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


                 
                  json.chart={
                         },

                    
                    json.title= {
                     text: r
                  }

                  if(xname==""){
                    xname='Data'
                  }
                  if(yname==""){
                    yname="Data"
                  }
                  json.xAxis= [{
                     title: { text: 'Histogram' },
                     alignTicks: false,
                     opposite: true,
                     // range:1000
                  },
                  {
                     title: { text: xname },
                     alignTicks: false
                  }],

                  json.yAxis= [{
                     title: { text: yname }
                  }, {
                     title: { text: 'Histogram' },
                     opposite: true
                  }],

                  json.series= [{
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


////////////////////////////////////////////////////////////////////////////////////////////



function pier(){

$(document).ready(function(){
  var json={};



                  if($('select#pieOptions').val()==='mfsch'){
                    // $('pieval')
                    // console.log("KERI")
                    $('#pielabel').show();
                    $('#pielabel2').hide();
                    flexpie(1);
                  }
                  else if($('select#pieOptions').val()==='mfloc'){
                    $('#pielabel2').show();
                    $('#pielabel').hide();
                    flexpie(2);
                  }
                  else{
                  var dic={};
                  yy=[];
                  $('td.'+$('select#pieOptions').val()).each(function(){
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

                  seriess=[{
                     type:'pie',
                     data:yy

                  }]

                }
                
                if(r==""){
                    r='No of '+$('select#pieOptions').val()
                  }

                  titlee={text:r}

json.series=seriess;
json.title=titlee;


  $('#container').highcharts(json);
})

}

/////////////////////////////////////////////////////////////////////////////////////////////


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





////////////////////////////////////////////////////////////////////////////////////////////

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + '1' + ')';
}


///////////////////////////////////////////////////////////////////////////////////////////

//the statistics functions

//////////////////////////////////////////////////////////////////////////////////////////


//1.mean

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

//////////////////////////////////////////////////////////////////////////////////////////


//2.median

      
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



//////////////////////////////////////////////////////////////////////////////////////////


//3.percentile

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



//////////////////////////////////////////////////////////////////////////////////////////


//the labelsetters



/////////////////////////////////////////////////////////////////////////////////////////


//1.the boiler labelSetter

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


///////////////////////////////////////////////////////////////////////////////////////////////


//2.the labelSetter for scatterBubbler

function labelSetter2(){
	 if(r==""){
                    r=$('th.'+$('select#xwhat1').val()).html()+' vs ( '
                          r+=$('th.'+$('select#ywhat1').val()).html();
                          r+=')';
                    }
                      
                    titlee={
                      text:r
                    }

                    if(xname==""){
                      xname=$('th.'+$('select#xwhat1').val()).html()
                    }

                    if(yname==""){
                      yname=$('th.'+$('select#ywhat1').val()).html()
                    }

}


////////////////////////////////////////////////////////////////////////////////////////


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
                           	  pointWidth:3,
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






//////////////////////////////////////////////////////////////////////




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
