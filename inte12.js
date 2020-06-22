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
// console.log('adyam')

// $('.js-example-basic-multiple').select2();
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

// console.log("fidst")
var sel1 = $('<select>').appendTo($('#xselect'));
sel1.addClass("js-example-basic-multiple");
sel1.addClass("form-control");
// sel.attr("multiple","multiple");
sel1.width("375px");
sel1.attr("name","xlabel")
// sel.addClass("newer")
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
// sel.addClass("newer")
sel2.attr("id","ywhat");


for(var i=0;i<numArr.length;i++){
  sel2.append($("<option>").attr('value',numArr[i]).text(numArr[i]));
}

/////////////////////////////////////////////////////////////////////////////////////////////

$('#scatbubyselect').append('<div style="display:inline" id="yselect1"></div><br>');


var sel2 = $('<select>').appendTo($('#yselect1'));
sel2.addClass("js-example-basic-multiple");
sel2.addClass("form-control");
// sel2.attr("multiple","multiple");
sel2.width("375px");
sel2.attr("name","ylabel1")
// sel.addClass("newer")
sel2.attr("id","ywhat1");


for(var i=0;i<numArr.length;i++){
  sel2.append($("<option>").attr('value',numArr[i]).text(numArr[i]));
}

/////////////////////////////////////////////////////////////////////////////////////////////

$('#scatbubxselect').append('<div style="display:inline" id="xselect1"></div><br>');


var sel2 = $('<select>').appendTo($('#xselect1'));
sel2.addClass("js-example-basic-multiple");
sel2.addClass("form-control");
// sel2.attr("multiple","multiple");
sel2.width("375px");
sel2.attr("name","xlabel1")
// sel.addClass("newer")
sel2.attr("id","xwhat1");


for(var i=0;i<numArr.length;i++){
  sel2.append($("<option>").attr('value',numArr[i]).text(numArr[i]));
}


/////////////////////////////////////////////////////////////////////////////////////////////

$('#scatbubzselect').append('<div style="display:inline" id="zselect1"></div><br>');


var sel2 = $('<select>').appendTo($('#zselect1'));
sel2.addClass("js-example-basic-multiple");
sel2.addClass("form-control");
// sel2.attr("multiple","multiple");
sel2.width("375px");
sel2.attr("name","zlabel")
// sel.addClass("newer")
sel2.attr("id","zwhat");


for(var i=0;i<catArr.length;i++){
  sel2.append($("<option>").attr('value',catArr[i]).text(catArr[i]));
}


/////////////////////////////////////////////////////////////////////////////////////////////

$('#venndiffselect').append('<div style="display:inline" id="vennselect"></div><br>');


var sel2 = $('<select>').appendTo($('#vennselect'));
sel2.addClass("js-example-basic-multiple");
sel2.addClass("form-control");
// sel2.attr("multiple","multiple");
sel2.width("375px");
sel2.attr("name","venndifflabel")
// sel.addClass("newer")
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
// sel.addClass("newer")
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
// sel2.attr("name","vennforlabel")
// sel.addClass("newer")
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
// sel2.attr("name","vennforlabel")
// sel.addClass("newer")
sel2.attr("id","pieopt");


for(var i=0;i<numArr.length;i++){
  sel2.append($("<option>").attr('value',numArr[i]).text(numArr[i]));
}


/////////////////////////////////////////////////////////////////////////////////////////////




$('#pieoffs').append('<div style="display:inline" id="pieoffsselect"></div><br>');


var sel2 = $('<select>').appendTo($('#pieoffsselect'));
sel2.addClass("js-example-basic-multiple");
sel2.addClass("form-control");
// sel2.attr("multiple","multiple");
sel2.width("375px");
// sel2.attr("name","vennforlabel")
// sel.addClass("newer")
sel2.attr("id","pieoffopt");


for(var i=0;i<catArr.length;i++){
  sel2.append($("<option>").attr('value',catArr[i]).text(catArr[i]));
}



/////////////////////////////////////////////////////////////////////////////////////////////

pieboom();

$('#pieoffopt').on('change',pieboom);

function pieboom(){
  // console.log("times")


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
  
























///////////////////////////////////////////////////////////////////////////////////////

$('#checkk').hide();
$('#histo').hide();
// $('#pieofflabel').hide();
// $('#piewantedlabel').hide();
// $('#pieaddopts').hide();
// $('#xsel1').hide();
// $('#ysel1').hide();
// $('#zsel').hide();
$('#scatbub').hide();
// $('#basecontainer').hide();
// $('#subsetcontainer').hide();
// $('#vennnos').hide();
// $('#newmakkal').hide();
  $('#vennpart').hide();
$('#piepart').hide();

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

  if($('#titlename').val()!=""){ console.log("in");
   r=$('#titlename').val(); }
  if($('#xaxisname').val()!=""){ xname=$('#xaxisname').val() }
  if($('#yaxisname').val()!=""){ yname=$('#yaxisname').val() }

  
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




$('select#graphtype').on('change',function(){
   


   $('#checkk').hide();
   $('#axissel').show();
   $('#histo').hide();
   $('#piepart').hide();
   // $('#pieofflabel').hide();
   // $('#piewantedlabel').hide();
   // $('#pieaddopts').hide();
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
       $('#yaxislabel').hide();
    $('#xaxislabel').hide();
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
  $('#piepart').show();
// $('#pieaddopts').show();
// $('#pieofflabel').show();
   }
   else if($(this).val()==='column' || $(this).val()==='area' || $(this).val()==='bar'){
      $('#checkk').show();
      // $('#pieaddopts').hide();
      // $('#pieofflabel').hide();
      $('#piepart').hide();
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
      $('#piepart').hide();
      // $('#pieaddopts').hide();
      // $('#pieofflabel').hide();
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
$('#scatbub').hide();
    $('#xaxislabel').show();
     $('#histo').hide();
      // $('#pieaddopts').hide();
      // $('#pieofflabel').hide();
      $('#piepart').hide();
  $('#vennpart').hide();
}

});

/////////////////////////////////////////////////////////////////////

// $('#pieoffopt').on('change',pieboom);

///////////////////////////////////////////////////////////////////



var arr;
var darr=[];
var xxx=[];
boom();
$('#venndiffwhat').on("change",boom);
function boom(){
  // console.log("times")

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
			// console.log("rem")
			xxx.push(kk);
	}
		
		
		else{
			// console.log("arr times")
		arr.push({val:kk,text:kk})
		xxx.push(kk);
		}
	});




var sel = $('<select>').appendTo($('#newselect'));
sel.addClass("js-example-basic-multiple");
sel.addClass("form-control");
sel.attr("multiple","multiple");
sel.width("95px");
// sel.addClass("newer")
sel.attr("id","basesetselect");

$(arr).each(function() {
 sel.append($("<option>").attr('value',this.val).text(this.text));

 
});
arr=[];

}







//   function(){
	
// 	action();
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
                  // reset();
                  break;


      case 'venn':
                  vennn();
                  // r=xname=yname="";
                  break;


      case 'pie':
                pier();
                break;

               }

                // r=xname=yname="";
            }



///////////////////////////////////////////////////////////////////////////////////////////////////////


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

console.log("piarr")
console.log(piarr)

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
                    // console.log(dict)
                    for(var k in dict){


                       // piarr[l]=k;
                       realpiarr[l]=k;
                       yyy[l]=dict[realpiarr[l]];
                       l++;
                    }

                    yy.push(yyy);
                    // yyy=[];dict={};
                };

console.log(yy)

                var data=[];
                // $('#pieopts').val().length
                var sum=0;var qq;
                for(var i=0;i<realpiarr.length;i++){
                  if($('#piewantedopt').val()==realpiarr[i]){
                    qq=i;
                    for(var j=0;j<$('#pieopt').val().length;j++){
                      sum+=Number(yy[j][i])

                      // data.push([piearr[i],yy[j][i]/])
                    }
                    // break;

                    // piearr[i],yyy[j]
                    // data.push()
                  }
                }

                // for(var i=0;i<piearr.length;i++){
                //   if($('#piewantedopt').val()==piearr[i]){
                    for(var j=0;j<$('#pieopt').val().length;j++){
                      // sum+=yy[j][i]

                      data.push([$('#pieopt').val()[j],(Number(yy[j][qq])/sum)*100])
                    }

console.log(data)
                    // piearr[i],yyy[j]
                    // data.push()
                //   }
                // }


seriess=[{
                     type:'pie',
                     data:data

                  }]
// if(r==""){
                    r='No of '+$('select#piewantedopt').val()
                  // }

                  titlee={text:r}

json.series=seriess;
json.title=titlee;


  $('#container').highcharts(json);
})


}










///////////////////////////////////////////////////////////////////////////////////////////////////////////






function labelSetter2(){
	 if(r==""){
                    r=$('th.'+$('select#xwhat1').val()).html()+' vs ( '
                        // for(var i=0;i<$('select#ywhat1').val().length;i++){
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

                  	// if(!darr.includes(xxx[kk])){

                  	// }
                  }

               

                  dict={};


                  var i=0;
                 
                  $('td.'+$('#vennforwhat').val()).each(function(){

                  	if(darr.includes(xxx[i])){
                  	



                  	// 	if(xxx[i].indexOf(',')>-1){
                  	
                  	// 		segments=xxx[i].split(',');
                  			
                  	//  		for(var d=0;d<segments.length;d++){
                  	// 			if(darr.includes(segments[d])){
                  	// 				if(dict[segments[d]]){
                  	// 	dict[segments[d]]+=Number($(this).html());
                  	// }
                  	// else{
                  	// 	dict[segments[d]]=Number($(this).html());
                  	// }

                  	// 			}
                 
                  	// 		}


                  	// 	}


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
                  	// var j=[k];
                  	else{
                  		var j=[k];
                  	dataa.push({sets:j,value:2,name:k+ "\n"  +(dict[k]).toString()})
                  }
                  }






                json.series= [{
                  type: 'venn',
                  name: 'The Unattainable',



                  // dataLabels:{
                  // 	enabled:true,
                  // 	format:'{point.name}'
                  // },

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
              // console.log("boiler")
              seriess=[];
               chartt={
                  type:$('select#graphtype').val()
                };
                




                xx=[];
                $('td.'+$('#xwhat').val()).each(function(){
                  // console.log("xx")
                     var k=$(this).html().split(',');
                     k.sort()
                     var kk=k.join(',')
                     // console.log(k);

                     xx.push(kk)
                     // for(var i=0;i<k.length;i++){
                     //  xx.push(k[i]);
                     // }
                    
                });
                // console.log(xx)
      


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
                       // xx[l]=k;
                       xxx[l]=k
                       yyy[l]=dict[xxx[l]];
                       l++;
                    }
// console.log(xx)
// xxx=xx.slice();
                    yy.push(yyy);
                    // yyy=[];dict={};
                };


              
// console.log(xxx)

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

                    	// var plotlines=[];
                    	plotlines=[];
                    	// var meann,mediann,perncentile;

                    	
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

                        var mea=[]
                        // for(var z=0;z<xx.length;z++){
                        //   mea[z]=0;
                        // }
                        // console.log(mea)
                        // var mea=n('0').split('').map(parseFloat);
                        var k=0;
                          for(var ii=0;ii<$('#ywhat').val().length;ii++){
                             // var sum=0;
                             $('td.'+$('#ywhat').val()[ii]).each(function(){
                              if(ii==0){
                              mea[k]=Number($(this).html())
                            }
                            else{
                              mea[k]+=Number($(this).html())
                            }
                            k+=1;
                            if(k==xx.length){
                              k=0;
                            }

                             });
                             // console.log(mea)
                            }



                            for(var mo=0;mo<mea.length;mo++){
                              mea[mo]=mea[mo]/$('#ywhat').val().length;
                            }

                          
                      seriess.push({type:'scatter',data:mea});
                      }



                      // else if($('#extrawhat').val()[i]=='imedian'){
                      //     percentile=calcPercentile(yy);
                      //     for(var j=0;j<$('#ywhat').val().length;j++){
                      //     plotlines.push({color:random_rgba(),zIndex:2,name:(Number($('#percentileval').val())).toString()+'% ile('+$('#ywhat').val()[j]+')',value:percentile[j]});
                      //   }

                      // }

                      // else if($('#extrawhat').val()[i]=='ipercentile'){
                  // }
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

                       
                for(var j=0;j<$('#ywhat').val().length;j++){
                      seriess.push({name:$('#ywhat').val()[j],data:yy[j]});
                      
                }
                var ll=($('#ywhat').val().length)*($('#extrawhat').val().length)
                for(var l=0;l<gcount;l++){
                      seriess.push(plotlines[l]);
                  }
                  // console.log("nboiler")
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



// function pier(){

// $(document).ready(function(){
//                   var json={};

//                   if($('select#pieopt').val()==='mfsch'){
//                     // $('pieval')
//                     // console.log("KERI")
//                     $('#pielabel').show();
//                     $('#pielabel2').hide();
//                     flexpie(1);
//                   }
//                   else if($('select#pieopt').val()==='mfloc'){
//                     $('#pielabel2').show();
//                     $('#pielabel').hide();
//                     flexpie(2);
//                   }
//                   else{
//                   var dic={};
//                   yy=[];
//                   $('td.'+$('select#pieopt').val()).each(function(){
//                      if(dic[$(this).html()]){
//                         dic[$(this).html()]+=1;
//                      }
//                      else{
//                         dic[$(this).html()]=1;
//                      }
//                   });
//                   for(var k in dic){
//                      yy.push([k,Number(dic[k])])
//                   }

//                   seriess=[{
//                      type:'pie',
//                      data:yy

//                   }]

//                 }
                
//                 if(r==""){
//                     r='No of '+$('select#pieopt').val()
//                   }

//                   titlee={text:r}

// json.series=seriess;
// json.title=titlee;


//   $('#container').highcharts(json);
// })

// }




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



//////////////////////////////////////////////////////////////////////////////////////////////////////




// function flexpie(inc){



//                 var add=""
//                 var calc=""
//                 switch(inc){

//                   case 1:
//                         add='.school'
//                         calc='#pieval'
//                         break;

//                   case 2:
//                         add='.schloc'
//                         calc='#pieval2'
//                         break;

//                   }
//                             xx=[]
//                             $('td'+add).each(function(){
//                               xx.push($(this).html())
//                             })
//                             yy=[];
//                             $('td.male').each(function(){
//                               yy.push($(this).html())
//                             })

//                             zz=[];
//                             $('td.female').each(function(){
//                               zz.push($(this).html())
//                             })
//                             dict={}
//                             for(var i=0;i<xx.length;i++){
//                               if(dict[xx[i]]){
//                                     dict[xx[i]]=[dict[xx[i]][0]+Number(yy[i]),dict[xx[i]][1]+Number(zz[i])]
//                               }
//                               else{
//                               dict[xx[i]]=[Number(yy[i]),Number(zz[i])]
//                             }
//                             }


//                            yyy=[] 
//                            var mval=100*(Number(dict[$('select'+calc).val()][0])/(Number((dict[$('select'+calc).val()][0]))+Number(dict[$('select'+calc).val()][1])))
//                            var feval=100-mval
//                            yyy.push(['Male',mval])
//                            yyy.push(['Female',feval])

//                            seriess=[{
//                             type:'pie',
//                             data:yyy
//                            }]
                          
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

               

    ////////////////////////////////////////////////////////////////////////////////////////////////



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