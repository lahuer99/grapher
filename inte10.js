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

var meann,mediann,perncentile;
// console.log('adyam')

// $('.js-example-basic-multiple').select2();


$('#checkk').hide();
$('#histo').hide();
$('#pielabel').hide();
$('#pielabel2').hide();
$('#pieopts').hide();
// $('#xsel1').hide();
// $('#ysel1').hide();
// $('#zsel').hide();
$('#scatbub').hide();
// $('#basecontainer').hide();
// $('#subsetcontainer').hide();
// $('#vennnos').hide();
// $('#newmakkal').hide();
  $('#vennpart').hide();


$('#percent').hide();


$('#butt').on("click",function(){
  $('#fulfli').removeClass('active')
  $('#fulsli').addClass('active')
  // $('ul li:nth-child(1)').removeClass('active')
  // $('ul li:nth-child(2)').addClass('active')

   action();
   // r=xname=yname="";
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



$('#extrawhat').on("change",function(){
	if($(this).val().includes('percentile')){
		$('#percent').show();
		// setTimeout
	}
	else{
		$('#percent').hide();
	}

});




$('select#graphtype').on('change',function(){
   // console.log("firt")


// var gr=$(this).val();
// switch(gr){

// 	case 'venn':
// 				$('#axissel').hide();
//       // $('#ysel2').hide();
//        // $('#yaxislabel').hide();
//     // $('#xaxislabel').hide();
//       $('#vennnos').show();
//       break;


//     case 



// }





$('#checkk').hide();
   $('#axissel').show();
   $('#histo').hide();
   $('#pielabel').hide();
   $('#pielabel2').hide();
   $('#pieopts').hide();
    $('#yaxislabel').show();
    $('#xaxislabel').show();
    $('#scatbub').hide();
      $('#vennpart').hide();
    // $('#xsel1').hide();
    // $('#ysel1').hide();
    // $('#zsel').hide();
// $('#newmakkal').hide();
//     $('#basecontainer').hide();
// $('#subsetcontainer').hide();
// $('#vennnos').hide();














   if ($(this).val()==='venn') {
      $('#axissel').hide();
      // $('#ysel2').hide();
       // $('#yaxislabel').hide();
    // $('#xaxislabel').hide();
    // $('$newmakkal').show();
    // $('#newmakkal').show();
      // $('#vennnos').show();
      $('#vennpart').show();

   }
   else if($(this).val()==='scatter' || $(this).val()==='bubble'){
    // console.log("iIN")
    $('#axissel').hide();
    // $('#newmakkal').hide();
      $('#vennpart').hide();
//      $('#basecontainer').hide();
// $('#subsetcontainer').hide();
// $('#vennnos').hide();

$('#scatbub').show();
  // $('#xsel1').show();
  //   $('#ysel1').show();
  //   $('#zsel').show();
   }
   else if($(this).val()==='pie'){
    $('#axissel').hide();
    // $('#newmakkal').hide();
    $('#yaxislabel').hide();
    $('#xaxislabel').hide();
//      $('#basecontainer').hide();
// $('#subsetcontainer').hide();
// $('#vennnos').hide();
$('#scatbub').hide();
  $('#vennpart').hide();
$('#pieopts').show();
   }
   else if($(this).val()==='column' || $(this).val()==='area'){
      $('#checkk').show();
      $('#pieopts').hide();
      // $('#newmakkal').hide();
        $('#vennpart').hide();
//        $('#basecontainer').hide();
// $('#subsetcontainer').hide();
// $('#vennnos').hide();
$('#scatbub').hide();
$('#axissel').show();
   }
   
   else if($(this).val()==='histogram'){
      $('#axissel').hide();
      $('#histo').show();
      $('#pieopts').hide();
      // $('#newmakkal').hide();
//        $('#basecontainer').hide();
// $('#subsetcontainer').hide();
// $('#vennnos').hide();
// $('#newmakkal').hide();
  $('#vennpart').hide();
   }


else{
  $('#axissel').show();
$('#yaxislabel').show();
    $('#xaxislabel').show();




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

///////////////////////////////////////////////////////////////////



var arr;
var darr=[];
var xxx=[];

$('#venndiffwhat').on("change",function(){

	xxx=[];
	darr=[];

	$('#maindiv').empty();


$('#maindiv').append('<div class="form-group"><div style="display:inline" id="newselect"></div></div><br>');




arr=[];


	$('td.'+$('#venndiffwhat').val()).each(function(){

		if($(this).html().indexOf(',')>-1 && !(xxx.includes($(this).html()))){
			xxx.push($(this).html());
			// arr.push({val:$(this).html(),text:$(this).html()})
			// console.log("index")
			// segments=$(this).html().split(',');

		}


		else if(xxx.includes($(this).html())){
			// console.log("rem")
			xxx.push($(this).html());
	}
		// darr.push($(this).html())
		// arr.push($(this).val());
		
		else{
			// console.log("arr times")
		arr.push({val:$(this).html(),text:$(this).html()})
		xxx.push($(this).html());
		}
	});




var sel = $('<select>').appendTo($('#newselect'));
sel.addClass("js-example-basic-multiple");
// sel.addClass("form-control");
sel.attr("multiple","multiple");
sel.width("95px");
// sel.addClass("newer")
sel.attr("id","basesetselect");

$(arr).each(function() {
 sel.append($("<option>").attr('value',this.val).text(this.text));
 // sel.attr("id","subsetselect"+ggmu);
 
});


  	// for(var i=0;i<$('#v').val();i++){
   //    arr.push({val:$('#base'+i).val(),text:$('#base'+i).val()})


    // var newOption = $('<option>');
    // newOption.attr('value', $('#base'+i).val()).text($('#base'+i).val());


    // $('#baseselect').append(newOption);
  // }





	// if($(this).val()=='school'){

	// }
});
















// var wnosubs=0;var ggmu=0;

// var nosub=0;
// $('#vennnosinp').on('change',function(){
//   // var x=0;
//   // x=$('#vennnosinp').val()
// if($(this).val()>4){
// 	$(this).val(4);
// }

//   if(Number($('#vennnosinp').val())==2){
//     nosub=1;
//   }
//   else if(Number($('#vennnosinp').val())==3){
//     nosub=4;
//   }
//   else if(Number($('#vennnosinp').val())==4){
//     nosub=9;
//   }

// // $('#subsetcontainer').hide();
// // $('vennnos').hide();
// 	$('#baseadd').empty();
// 	$('#maindiv').empty();
// 	 wnosubs=0; ggmu=0;

//   for(var i=0;i<$('#vennnosinp').val();i++){
  
//   $('#baseadd').append('<div class="form-group" style="width:150px;display:inline"><input type="text" class="form-control" style="width:95px;display:inline;" id="base'+i+'"/></div>&nbsp');
//   	// $('#baseadd').append('<div style="width:20px;display:inline;"><input type="text" id="base'+i+'"/></div>&nbsp');
//     // $('#basecontainer').append('<div><input style="width:20px;display:inline;<input type="text" id="base'+i+'"/></div>');
//   }
//     $('#basecontainer').show();
//     // $('#baseadd').show();
//     $('#subsetcontainer').show();
// });





// var x=0;
// var wnosubs=0;var ggmu=0;
// $('#addbutton').click(function(){


// if(wnosubs<nosub){
//   $('#maindiv').append('<div class="form-group"><input class="form-control" style="width:95px;display:inline;" type="text" id="basenext'+wnosubs+'"/> belongs to <div style="display:inline" id="newselect'+wnosubs+'"></div></div><br>');
//   wnosubs+=1;
// }



// var arr=[];
//   for(var i=0;i<$('#vennnosinp').val();i++){
//       arr.push({val:$('#base'+i).val(),text:$('#base'+i).val()})


//     // var newOption = $('<option>');
//     // newOption.attr('value', $('#base'+i).val()).text($('#base'+i).val());


//     // $('#baseselect').append(newOption);
//   }



// // var arr = [
// //   {val : 1, text: 'One'},
// //   {val : 2, text: 'Two'},
// //   {val : 3, text: 'Three'}
// // ];

// var sel = $('<select>').appendTo($('#newselect'+ggmu));
// sel.addClass("js-example-basic-multiple");
// // sel.addClass("form-control");
// sel.attr("multiple","multiple");
// sel.width("95px");
// // sel.addClass("newer")

// $(arr).each(function() {
//  sel.append($("<option>").attr('value',this.val).text(this.text));
//  sel.attr("id","subsetselect"+ggmu);
 
// });


//   // wnosubs+=1;
// ggmu+=1;




  
// });

























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
                  // labelSetter();
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
                  // labelSetter();
                  scatterbubbler('scatter');
                  reset();
                  break;



      case 'histogram':
                  // labelSetter();
                  hist();
                  // reset();
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


//////////////////////////////////////////////////////////////////////////////////////////////////////

var segments;
function vennn(){
            $(document).ready(function(){
                  var json={};

                var basesets=[];dataa=[];
                 for(var i=0;i<$('#basesetselect').val().length;i++){
                  
                  // dataa.push({sets:[$("#basesetselect").val()[i]],value:2})
                  
                  darr.push($("#basesetselect").val()[i]);
                  // basesets.push($("base'+i+'").val())
                    // $('#basecontainer').append('<div><input type="text" id="base'+i+'"/></div>');
                  }


                  let checker = (arr, target) => target.every(v => arr.includes(v));

// console.log(checker(array2, array1));
// console.log(checker(array3, array1));






                  for(var kk=0;kk<xxx.length;kk++){
                  	var segments=xxx[kk].split(',');

                  	if(checker(darr,segments) && !darr.includes(xxx[kk])){
                  		darr.push(xxx[kk]);
                  	}

                  	// if(!darr.includes(xxx[kk])){

                  	// }
                  }

                  // var strr=$("#basesetselect").val()[0]+','+$("#basesetselect").val()[1];
                  // darr.push(strr)
                  // var data=[];

                  // var yy=[];
                  // for()

                  // yyy=[]
                  // $('td.'+$('#vennforwhat').val()).each(function(){
                  // 	yyy.push($(this).val())
                  // }

                  dict={};


                  // for(var i=0;i< $('td.'+$('#vennforwhat').val()).length;i++){

                  // 	if(darr.includes(xxx[i])){
                  // 		console.log("includes")

                  // 		if(dict[xxx[i]]){
                  // 		dict[xxx[i]]+=Number($('td.'+$('#vennforwhat').val())[i]);
                  // 	}
                  // 	else{
                  // 		dict[xxx[i]]=Number($('td.'+$('#vennforwhat').val())[i]);
                  // 	}

                  // 	}
                  // 	// if([darr[i]]){
                  // 	// 	dict[darr[i]]+=
                  // 	// }
                  // }





                  // dict={};var i=0;

                  var i=0;
                  // console.log(typeof(xxx[i]))
                  $('td.'+$('#vennforwhat').val()).each(function(){

                  	// console.log(typeof(xxx[i]))
                  	// console.log(i)

                  	if(darr.includes(xxx[i])){
                  		// console.log("includes")



                  		if(xxx[i].indexOf(',')>-1){
                  			// console.log(xxx[i].indexOf(','))
                  			segments=xxx[i].split(',');
                  			// console.log(segments)
                  	 		for(var d=0;d<segments.length;d++){
                  				if(darr.includes(segments[d])){
                  					if(dict[segments[d]]){
                  		dict[segments[d]]+=Number($(this).html());
                  	}
                  	else{
                  		dict[segments[d]]=Number($(this).html());
                  	}

                  				}
                  	// console.log("no problemo")
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

                  // 	if()

                  // 	if(dict[darr[i]]){
                  // 		dict[darr[i]]+=Number($(this).html());
                  // 	}
                  // 	else{
                  // 		dict[darr[i]]=Number($(this).html());
                  // 	}
                  // 	i++;
                  // });



                  for(var k in dict){
                  	if(k.indexOf(',')>-1){
                  		var jj=k.split(',')
                  		dataa.push({sets:jj,value:1,name:dict[k].toString()})
                  	}
                  	// var j=[k];
                  	else{
                  		var j=[k];
                  	dataa.push({sets:j,value:2,name:dict[k].toString()})
                  }
                  }








              //       yy=[];  dict={};
              //       for(var j=0;j<wnosubs;j++){
              //         dict[$("#basenext"+j).val()]=[];
              //   for(var i=0;i<$("#subsetselect"+j).val().length;i++){
                  
              //             dict[$("#basenext"+j).val()].push($('#subsetselect'+j).val()[i]);
                      
              //   }
              // }

              //   for(var k in dict){
                  
              //     dataa.push({sets:dict[k],value:1,name:k})
              //   }


                 // if(r==""){
                 //    r='Venn Diagram'
                 //  }


                json.series= [{
                  type: 'venn',
                  name: 'The Unattainable',
                  data:dataa
                }];


                  if(r==""){
                    r='Venn'
                  }

                  json.title={text:r}
                  // seriess=[{
                  //    type:'pie',
                  //    data:yy

                  // }]



  $('#container').highcharts(json);

            });
        }





















































///////////////////////////////////////////////////////////////////////////////////////////////////////////



            function boiler(){
              // labelSetter();
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
                       		// console.log($(this))
                       		// console.log("HI")
                          dict[xx[j]]+=Number($(this).html());
                       }
                       else{
                       	// console.log($(this))
                       		// console.log("HI")
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


                // seriess=[];
                // for(var j=0;j<$('select#ywhat').val().length;j++){
                //       seriess.push({name:$('select#ywhat').val()[j],data:yy[j]});
                // }


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
                    			// plotlines.push({color:random_rgba(),zIndex:2,label:{text:'mean('+$('#ywhat').val()+')'},value:meann});
                    		}
                    		else if($('#extrawhat').val()[i]=='median'){
                    			// var dupyy=yy;
                    			mediann=calcMedian(yy);
                    			// console.log("median")
                    			// yy=[];
                    			// yy=dupyy;
                    			for(var j=0;j<$('#ywhat').val().length;j++){
                    				// console.log("inside")
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
                   
                    // yAxis = {
                    //           // min:0,
                    //    title: {
                    //       text: yname
                    //    },
                    //    labels:{
                    //       overflow:'justify'
                    //    }
                    // };    


                    legend = {
                         layout: 'vertical',
                         align: 'right',
                         verticalAlign: 'middle',
                         borderWidth: 0,
                         shadow:true
                      }; 

                       seriess=[];
                for(var j=0;j<$('select#ywhat').val().length;j++){
                      seriess.push({name:$('select#ywhat').val()[j],data:yy[j]});
                      
                }
                var ll=($('#ywhat').val().length)*($('#extrawhat').val().length)
                for(var l=0;l<ll;l++){
                      seriess.push(plotlines[l]);
                  }

                // seriess.push()

            }





            function calcMean(yy){
            	var avgarr=[];
           		for(var i=0;i<yy.length;i++){
           			var sum=0;var avg=0;
           			 sum = yy[i].reduce((a, b) => a + b, 0);
					 avg = (sum / yy[i].length) || 0;
					 avgarr.push(avg);
           		}
    //         	const sum = times.reduce((a, b) => a + b, 0);
				// const avg = (sum / times.length) || 0;
				 // avg;
				 return avgarr;

            }



            function calcMedian(duppyy){

            	// var dupyy=yy;
            	var medd=[];
            	for(var i=0;i<duppyy.length;i++){
            		var dup=duppyy[i].slice();
            		dup.sort(function(a,b){
					    return a-b;
					  });

					  var half = Math.floor(dup.length / 2);

					  // if (values.length % 2)
					    medd.push(dup[half]);

					  // return (values[half - 1] + values[half]) / 2.0;


            	}
            	return medd;


           		// if(values.length ===0) return 0;

  // values.sort(function(a,b){
  //   return a-b;
  // });

  // var half = Math.floor(values.length / 2);

  // if (values.length % 2)
  //   return values[half];

  // return (values[half - 1] + values[half]) / 2.0;

            }



            function calcPercentile(yy){
            	var perr=[];
            	var req=Number($('#percentileval').val())
            	for(var i=0;i<yy.length;i++){
            		var dup=yy[i].slice();
            		// console.log(req);
            		var q=Math.floor((req/100)*dup.length);
            		// console.log(q)
            		// console.log(dup.sort())
            		// console.log(dup.sort()[q])
            		dup.sort(function(a,b){
					    return a-b;
					  });
            		// console.log(dup)
            		perr.push(dup[q]);

            	}
            	return perr;

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



function pier(){

$(document).ready(function(){
  var json={};



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

                  seriess=[{
                     type:'pie',
                     data:yy

                  }]

                }
                
                if(r==""){
                    r='No of '+$('select#pieopt').val()
                  }

                  titlee={text:r}

json.series=seriess;
json.title=titlee;


  $('#container').highcharts(json);
})

}




////////////////////////////////////////////////////////////////////////////////////////

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

// var dataa=[];var dict={};
//           function vennn(){
//             $(document).ready(function(){
//                   var json={};

//                 var basesets=[];dataa=[];
//                  for(var i=0;i<$('#vennnosinp').val();i++){
//                   dataa.push({sets:[$("#base"+i).val()],value:2})
//                   // basesets.push($("base'+i+'").val())
//                     // $('#basecontainer').append('<div><input type="text" id="base'+i+'"/></div>');
//                   }
//                   // var data=[];

//                   // var yy=[];
//                   // for()





//                     yy=[];  dict={};
//                     for(var j=0;j<wnosubs;j++){
//                       dict[$("#basenext"+j).val()]=[];
//                 for(var i=0;i<$("#subsetselect"+j).val().length;i++){
                  
//                           dict[$("#basenext"+j).val()].push($('#subsetselect'+j).val()[i]);
                      
//                 }
//               }

//                 for(var k in dict){
                  
//                   dataa.push({sets:dict[k],value:1,name:k})
//                 }


//                  // if(r==""){
//                  //    r='Venn Diagram'
//                  //  }



//                 json.series= [{
//                   type: 'venn',
//                   name: 'The Unattainable',
//                   data:dataa
//                 }];


//                   if(r==""){
//                     r='Venn'
//                   }

//                   json.title={text:r}
//                   // seriess=[{
//                   //    type:'pie',
//                   //    data:yy

//                   // }]



//   $('#container').highcharts(json);

//             });
//         }
 
  
  

////////////////////////////////////////////////////////////////////////////////



        //     function vennn(){
        //        $(document).ready(function(){
        //           var json={};
        //           if(r==""){
        //       r='The Location Map'
        //      }
        //           seriess= [{
        //            type: 'venn',
        //            name: 'The Location Map',
        //            data: [{
        //              sets: ['North'],
        //              value: 2
        //           }, {
        //              sets: ['East'],
        //              value: 2
        //           }, 
        //           {
        //              sets: ['West'],
        //              value: 2

        //           }, 
        //           {
        //              sets: ['South'],
        //              value: 2

        //           }, 

        //           {
        //              sets: ['North','East'],
        //              value: 1,
        //              name: 'WAS'
        //           }, {
        //              sets: ['North','West'],
        //              value: 1,
        //              name: 'NZ'
        //           }, {
        //              sets: ['West','East'],
        //              value: 1,
        //              name: 'PEN'
        //           },
        //           {
        //              sets: ['North','West','East'],
        //              value: 1,
        //              name: 'SCR'
        //           },
        //           {
        //              sets: ['North','West','South'],
        //              value: 1,
        //              name: 'LA'
        //           },

        //           {
        //            sets: ['South','West'],
        //            value: 1,
        //            name: 'CAN'
        //         },
        //         {
        //            sets: ['South','North'],
        //            value: 1,
        //            name: 'NY'
        //         },

        //         ]
        //      }],


             
        //      title= {
        //       text: r
        //    }

        //      json.series=seriess;
        //      json.title=title;

        //      $('#container').highcharts(json);

        //     });
        // }




//////////////////////////////////////////////////////////////////////////////////////////////////////





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

                 // data=[];
                 // if(r==""){
                 //      r='Highcharts Histogram'
                 //    }
                 // for(var i=0;i<$('select#histwhat').val().length;i++){
                 //  da=[];
                 //  $('td.'+$('select#histwhat').val()[i]).each(function(){
                 //    da.push(Number($(this).html()))
                 // });
                 //  data.push(da)
                 // }


                 

                
                 //  chartt={
                 //         },

                    
                 //    titlee= {
                 //     text: r
                 //  }

                 //  if(xname==""){
                 //    xname='Data'
                 //  }
                 //  if(yname==""){
                 //    yname="Data"
                 //  }
                 //  xAxis= [{
                 //     title: { text: 'Histogram' },
                 //     alignTicks: false,
                 //     opposite: true,
                 //     // range:1000
                 //  },
                 //  {
                 //     title: { text: xname },
                 //     alignTicks: false
                 //  }],

                 //  yAxis= [{
                 //     title: { text: yname }
                 //  }, {
                 //     title: { text: 'Histogram' },
                 //     opposite: true
                 //  }],

                 //  seriess= [{
                 //     name: 'Histogram',
                 //     type: 'histogram',
                 //     xAxis: 1,
                 //     yAxis: 1,
                 //     baseSeries: 's1',
                 //     zIndex: -1
                 //  }, {
                 //     name: 'Data',
                 //     type: 'scatter',
                 //     data: data[0],
                 //     id: 's1'
                 //    //  marker: {
                 //    //    radius: 1.5
                 //    // }
                 // },
                 // {
                 //     name: 'Histogram',
                 //     type: 'histogram',
                 //     xAxis: 1,
                 //     yAxis: 1,
                 //     baseSeries: 's2',
                 //     zIndex: 1,
                 //     color:'rgba(0,0,0,0.50)'
                 //  }, {
                 //     name: 'Data',
                 //     type: 'scatter',
                 //     data: data[1],
                 //     id: 's2'
                 //    //  marker: {
                 //    //    radius: 1.5
                 //    // }
                 // },




                 // ]
                 //   legend = {
                 //         layout: 'vertical',
                 //         align: 'right',
                 //         verticalAlign: 'middle',
                 //         borderWidth: 1,
                 //         shadow: true,

                 //      }; 
      
      



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