// SLIDESIDE

var timesclicked=0;
$('#settingsbutton').on("click",function(){
	timesclicked+=1;
	var ww=$('#rightp').width();
	if(timesclicked%2!=0){
		$('#outer').show()
		$('#leftp').css("right",ww+30)

		$('#outer').animate({
			width:ww
		})
}
else{
	$('#outer').animate({
			width:0
		},()=>{
			$('#outer').hide()
		});
			// $('#outer').hide()
	$('#leftp').css("right",0)


}
});




// DARK MODE



$('.switch input[type="checkbox"]').click(function(){
	$('body','html').toggleClass('darkmode')
	$('div').toggleClass('grayscale-100')
	// if($(this).is(":checked")){

	// }
});







// FONTSIZE ADJUSTER


const mover=document.querySelector('#mover')
const bearer=document.querySelector('#bearer')


var fontclicked=0;

$('li#fontsi').on("click",function(){
	fontclicked+=1;
	if(fontclicked%2!=0){
			$('#bearer').slideDown();
	}
	else{
			$('#bearer').slideUp();

	}
});



$('#mover').on('input',function(){
	$('#container').css("font-size",Number(this.value));
	$('#fontval').text(this.value)
});







// NOTIFN





// class Sender {

//   constructor(nam) {
//     this.name = nam;
//   }
//   action(){
//   	sharequery();
//   	like();
//   	comment();
//   	sticker();
//   }
// }
// // mycar = new Car("Ford")

// class Receiver {

//   constructor(nam) {
//     this.name = nam;
//     this.notfnos=0;
//   }

// }

Stickers=[':)',':(',':/',':*']
Qlist=[];

class Query{
	constructor(val,qsender,qreceiver){
		this.value=val;
		this.sender=qsender;
		this.receiver=qreceiver;
		this.likenos=0;
		// this.likers=[]
		this.commentnos=0;
		// this.comments={};
		this.sticknos=0;

		this.comments=[];

	}
}


class Comment{
	constructor(val,postt){
		this.poster=postt.name;
		this.value=val;
		this.likenos=0;
		this.replynos=0;
		this.replier=[];
		this.reply=[];
		// this.commentnos
	}
}




class User{
	
	constructor(nam) {
	    this.name = nam;
    	this.notfnos=0;
    	this.notfs=[];
  	}



  	sharequery(queryobj){
  		// receivr=new Receiver($('select#contacts').val())
		// receivr.notifnos+=1;
		queryobj.receiver.notfnos+=1;
		$('span.notf1nos').css("background-color","red")
		$('span.notf1nos').text(queryobj.receiver.notifnos)
		queryobj.receiver.receivenotifn(this.name,queryobj,1)

  	}

  	like(queryobj){
  		// queryobj.receiver.notfnos+=1;

  		receiveuser.notfnos+=1;

  		if(receiveuser!=usr1){
  			$('span.notf1nos').css("background-color","red")
		$('span.notf1nos').text(receiveuser.notifnos)
  		}

  		else{
  			$('span.notf2nos').css("background-color","red")
		$('span.notf2nos').text(receiveuser.notifnos)
  		}
		
		// queryobj.likenos+=1;
		receiveuser.receivenotifn(this.name,queryobj,2)

	

  	}

  	comment(queryobj){

  		receiveuser.notfnos+=1;

  		if(receiveuser!=usr1){
  			$('span.notf1nos').css("background-color","red")
		$('span.notf1nos').text(receiveuser.notifnos)
  		}

  		else{
  			$('span.notf2nos').css("background-color","red")
		$('span.notf2nos').text(receiveuser.notifnos)
  		}
		


		// queryobj.commentnos+=1;
		receiveuser.receivenotifn(this.name,queryobj,3)

  	}

  	sticker(queryobj){
  		receiveuser.notfnos+=1;

		if(receiveuser!=usr1){
  			$('span.notf1nos').css("background-color","red")
		$('span.notf1nos').text(receiveuser.notifnos)
  		}

  		else{
  			$('span.notf2nos').css("background-color","red")
		$('span.notf2nos').text(receiveuser.notifnos)
  		}

		receiveuser.receivenotifn(this.name,queryobj,4)
		// queryobj.stickernos+=1;

  	}

  	likecomment(queryobj){
  		receiveuser.notfnos+=1;

		if(receiveuser!=usr1){
  			$('span.notf1nos').css("background-color","red")
		$('span.notf1nos').text(receiveuser.notifnos)
  		}

  		else{
  			$('span.notf2nos').css("background-color","red")
		$('span.notf2nos').text(receiveuser.notifnos)
  		}

		receiveuser.receivenotifn(this.name,queryobj,5)
  	}

  	replycomment(queryobj){
		receiveuser.notfnos+=1;

		if(receiveuser!=usr1){
  			$('span.notf1nos').css("background-color","red")
		$('span.notf1nos').text(receiveuser.notifnos)
  		}

  		else{
  			$('span.notf2nos').css("background-color","red")
		$('span.notf2nos').text(receiveuser.notifnos)
  		}

		receiveuser.receivenotifn(this.name,queryobj,6)
  	}


  	receivenotifn(sendr,val,t){
  		// add to notflist
  		var rn="";

  		switch(t){

  			case 1:
  					rn+='You received a query from '+sendr;
  					// if(!Qlist.includes(val)){
  					// console.log(this.notfs)	
  				// 	if(this.notfs.length==0){
  				// 		// console.log("insi")
						// // this.notfs.pop(0);  		
						// // console.log(this.notfs)	
						// $('div.dropdown-content div.droplinks').remove();			
  				// 	}


  				    // ?? if(!Qlist.includes(val)){

  					Qlist.push(val)
  					// }
  					this.notfs.push(rn)
  					// console.log(this.notfs)
  					break;

  			case 2:
  					rn+=sendr + ' liked your reaction';
  					this.notfs.push(rn)
  					// console.log(this.notfs)
  					break;

  			case 3:
  					rn+=sendr + ' commented on your reaction';
  					this.notfs.push(rn)
  					// console.log(this.notfs)
  					break;

  			case 4:
  					rn+=sendr+' reacted to your reaction';
  					this.notfs.push(rn)
  					break;

  			case 5:
  					rn+=sendr+' liked your comment';
  					this.notfs.push(rn)
  					console.log(this.notfs)
  					break;

  			case 6:
  					rn+=sendr+' replied to your comment';
  					this.notfs.push(rn)
  					console.log(this.notfs)
  					break;

  			default:console.log('scene aan')
  					break;
  		}

  		var indx=Qlist.indexOf(val)
  		this.updateNotif(val,indx);
  		
  	}


  	updateNotif(qqoobbjj,indx){

  		// console.log("updater")


  		if(receiveuser!=usr1){
			var adder=$('.dropdown-content1')

  		var ll=indx;

  		// adder.append($("<li></li>").attr('value','qq'+ll))
  		adder.append($("<a></a>").attr('id','1q'+idinc1+'q'+ll))
  		adder.append($("<hr>"))

  		$('a#1q'+idinc1+'q'+ll).text(usr2.notfs[idinc1])
		$('a#1q'+idinc1+'q'+ll).addClass("droplinks")


		$('span.notf1nos').css("background-color","red")
		$('span.notf1nos').text(usr2.notfnos)


		idinc1+=1;

  		}
  		
		else{
		var adder=$('.dropdown-content2')

  		// var ll=this.notfs.length-1

  		var ll=indx;

  		// adder.append($("<li></li>").attr('value','qq'+ll))
  		adder.append($("<a></a>").attr('id','2q'+idinc2+'q'+ll))
  		adder.append($("<hr>"))

  		$('a#2q'+idinc2+'q'+ll).text(usr1.notfs[idinc2])
		$('a#2q'+idinc2+'q'+ll).addClass("droplinks")


		$('span.notf2nos').css("background-color","red")
		$('span.notf2nos').text(usr1.notfnos)

		idinc2+=1;
		}

}
}



var idinc1=0;
var idinc2=0;


var nott=$('<div></div>').appendTo($('.dropdown1'));
nott.addClass("dropdown-content1")
// nott.append($("<div></div>").attr('id','qq'+0))
// .text(val)
// nott.append($("<hr>"))

// $('div#qq'+0).text('currently no notifications')
// $('div#qq'+0).addClass("droplinks")


var nott2=$('<div></div>').appendTo($('.dropdown2'));
nott2.addClass("dropdown-content2")








///////////////////////////////////////////////////////////////////////////////////////////////////////////////







var usr1=new User('Rahul');
var usr2;

// senduser=usr1;
// var receiveuser;

$('li#sharebutton').on("click",function(){
	var content=$('input#query').val();

	if(content!=""){

		$('#modal').css("display","block")
		$('#modal textarea').val(content)

	}

});



$('#closebutton1').on("click",function(){
		$('#modal').css("display","none");

})





$('#okbutt').on("click",function(){
	senduser=usr1;
			receiveuser=usr2;

	for(var i=0;i<$('#contacts').val().length;i++){
		// $('#modal').css("display","none")

		if(!receiveuser){
			usr2=new User($('#contacts').val()[i]);
					// receiveuser=new User($('#contacts').val()[i])

		}

		query=new Query($('#modal textarea').val(),usr1,usr2)
		usr1.sharequery(query)
	}

	if($('#contacts').val().length!=0){
		$('#modal').css("display","none")
	}
});









///////////////////////////////////////////////////////////////////////////////////////////////////////////////





 // > div.dropdown-content > div.droplinks


var qobject;
var senduser;
var receiveuser;


$(document).on("click",'.dropdown-content2 > a.droplinks',function(){
	// var id=$('').attr('id')

	var valuee=$(this).attr('id');
	var nos=valuee.slice(-1)



	// console.log(valuee)

	// console.log("kerii")
	// console.log(qobject)
	if(Qlist.length!=0){
			qobject=Qlist[nos]
			$('#modal2').css("display","block")
			$('#modal2 textarea').val(qobject.value)
			$('span#likenos').text(qobject.likenos)
			$('span#commentnos').text(qobject.commentnos)
			// $('#reactdisp').text('React')
			$('#reactdisp').text(qobject.sticknos)
			// $('#alreadycomment').empty();
			for(var i=0;i<qobject.commentnos;i++){
				var addr=$('#alreadycomment')
				addr.append($('<div id="commentos'+i+'"'+'class="commentos"></div>').html('<b><div style="font-size:15px;text-indent:5px;">'+qobject.comments[i].poster+'</div></b>'+'<em><div style="font-size:14px;text-indent:12px;">'+qobject.comments[i].value+'</div><em>'));


				$('#commentos'+i).append($('<div class="commentreactions"><ul style="display: inline;list-style: none;"><li class="clickme" id="colike'+i+'"'+'><i style="font-size: 13px; color: #383838; margin-right: 3px;" class="far fa-thumbs-up"></i><span id="comlikenos'+i+'"'+'>'+qobject.comments[i].likenos+'</span></li><li class="clickme" id="cocomment'+i+'"'+'><i style="font-size: 13px;color: #383838;margin-right: 3px;" class="fas fa-comments"></i><span id="comreply'+i+'"'+'>'+qobject.comments[i].replynos+'</span></li></ul>'))
					// text(qobject.comments[i].poster+" : "+qobject.comments[i].value))


					$('#commentos'+i).append($('<div id="replies'+qobject.comments[i].replynos+'">'));


				for(var j=0;j<qobject.comments[i].replynos;j++){
					$('#replies'+qobject.comments[i].replynos).append($('<div id="reply'+qobject.comments[i].replynos+'">'+'<i style="rotation:90deg" class="fas fa-share"></i><hr style="color:white"><div id="replyos'+qobject.comments[i].replynos+'" '+'class="commentos"></div>').html('<b><div style="font-size:15px;text-indent:35px;">'+qobject.comments[i].replier[j].name+'</div></b>'+'<em><div style="font-size:14px;text-indent:46px;">'+qobject.comments[i].reply[j]+'</div><em>'))
				}

			}


			
			senduser=usr1;
			receiveuser=usr2;

	}
	
		
});










$(document).on("click",'.dropdown-content1 > a.droplinks',function(){
	// var id=$('').attr('id')

	var valuee=$(this).attr('id');
	var nos=valuee.slice(-1)



	// console.log(valuee)

	// console.log("kerii")
	// console.log(qobject)
	if(Qlist.length!=0){
			qobject=Qlist[nos]
			$('#modal2').css("display","block")
			$('#modal2 textarea').val(qobject.value)
			$('span#likenos').text(qobject.likenos)
			// $('#reactdisp').text('React')
			$('span#commentnos').text(qobject.commentnos)
			$('#reactdisp').text(qobject.sticknos)
		// $('#alreadycomment').empty();
			for(var i=0;i<qobject.commentnos;i++){
				var addr=$('#alreadycomment')
				addr.append($('<div id="commentos'+i+'"'+'class="commentos"></div>').html('<b><div style="font-size:15px;text-indent:5px;">'+qobject.comments[i].poster+'</div></b>'+'<em><div style="font-size:14px;text-indent:12px;">'+qobject.comments[i].value+'</div><em>'))
					// text(qobject.comments[i].poster+" : "+qobject.comments[i].value))


				$('#commentos'+i).append($('<div class="commentreactions"><ul style="display: inline;list-style: none;"><li class="clickme" id="colike'+i+'"'+'><i style="font-size: 13px; color: #383838; margin-right: 3px;" class="far fa-thumbs-up"></i><span id="comlikenos'+i+'"'+'>'+qobject.comments[i].likenos+'</span></li><li class="clickme" id="cocomment'+i+'"'+'><i style="font-size: 13px;color: #383838;margin-right: 3px;" class="fas fa-comments"></i><span id="comreply'+i+'"'+'>'+qobject.comments[i].replynos+'</span></li></ul></div>'))
						
				$('#commentos'+i).append($('<div id="replies'+qobject.comments[i].replynos+'">'));

				for(var j=0;j<qobject.comments[i].replynos;j++){
					$('#replies'+qobject.comments[i].replynos).append($('<div id="reply'+qobject.comments[i].replynos+'">'+'<i style="rotation:90deg" class="fas fa-share"></i><hr style="color:white"><div id="replyos'+qobject.comments[i].replynos+'" '+'class="commentos"></div>').html('<b><div style="font-size:15px;text-indent:35px;">'+qobject.comments[i].replier[j].name+'</div></b>'+'<em><div style="font-size:14px;text-indent:46px;">'+qobject.comments[i].reply[j]+'</div><em>'))
				}




			}


			
			senduser=usr2;
			receiveuser=usr1;

	}
	
		
});







///////////////////////////////////////////////////////////////////////////////////////////////////////////////

var noss;
$(document).on('click','li.clickme',function(){
// $('li.clickme').on('click',function(){
	noss=0;
	var vall=$(this).attr('id')
	noss=vall.slice(-1)

	var qcomment=qobject.comments[noss]
	console.log(qcomment)

	if(vall.slice(0,3)=='col')
	{
	// if(qcomment.likenos==0){
				// console.log('times')
				qcomment.likenos+=1;
				$('span#comlikenos'+noss).text(qcomment.likenos)

				senduser.likecomment(qobject)
			// }
		}
	else{
			// if(qcomment.replynos==0){
				// console.log('times')
			
				// console.log(qcomment.replynos)

				$('.commentsection').append($('<input type="text" id="replyinput"><input id="replybutton" type="button" value="REPLY">'));


				$('#commentos'+noss).append($('<div id="replies'+qcomment.replynos+'">'));

	$('#replybutton').on('click',function(){

					
					$('#replies'+qcomment.replynos).append($('<div id="reply'+qcomment.replynos+'">'+'<i style="rotation:90deg" class="fas fa-share"></i><hr style="color:white"><div id="replyos'+qcomment.replynos+'" '+'class="commentos"></div>').html('<b><div style="font-size:15px;text-indent:35px;">'+senduser.name+'</div></b>'+'<em><div style="font-size:14px;text-indent:46px;">'+$('#replyinput').val()+'</div><em>'))

						// console.log("agathai")
							// console.log("ivdai")
					qcomment.replynos+=1;
				$('span#comreply'+noss).text(qcomment.replynos)
				qcomment.replier.push(senduser)
				qcomment.reply.push($('#replyinput').val())
				
				senduser.replycomment(qobject)

				$('#replyinput').remove()
				$('#replybutton').remove();
				});

			
			// }

		}
});




// $('li.clickme').on('click',function(){

// 	var vall=$(this).attr('id')
// 	var noss=vall.slice(-1)

// 	var qcomment=qobject.comment[noss]
// 	console.log(qcomment)
// 	if(qcomment.replynos==0){
// 				// console.log('times')
// 				qcomment.replynos+=1;
// 				$('span#comreply'+noss).text(qcomment.replynos)

// 				senduser.replycomment(qcomment,noss)
// 			}
// })






// i.fa-thumbs-up
// if($('#modal2').css('display')=='block'){
// 	console.log("in")
$('#lilike').on("click",function(){
		// console.log(qobject.likenos)
			if(qobject.likenos==0){
				// console.log('times')
				qobject.likenos+=1;
				$('span#likenos').text(qobject.likenos)

				senduser.like(qobject)
			}
});

// }




$('#lireact').on("click",function(){
	$('span#reactnos').css("display","block")
});



// var reacticons=$('#reactnos i')
// for(const r of reacticons){
// 	r.on("click",function(){
// 		var cls=r.attr('class')
// 		console.log(cls)
// 		$('#reactdisp').html('<i class='+cls+'></i>')
// 		$('span#reactnos').css("display","none")
// 	})
// }


// $('#reactnos li i').

// for(var i=0;i<$('#reactul li i').length;i++){

$(document).on("click",'#reactul>li',function(){

// })
			// $('#reactul li i').on("click",function(){
			// console.log(e.class)
			var cls=$(this).attr('id')
			// console.log(cls)
			// $('#reactdisp').html(('<i class='.concat(cls)).concat('></i>'))
	
			qobject.sticknos+=1;

			$('#reactdisp').text(qobject.sticknos)

			$('span#reactnos').css("display","none")

			senduser.sticker(qobject);
			});
// }





// ADding comments section


// var adder=$('.dropdown-content2')

//   		var ll=this.notfs.length-1

//   		// adder.append($("<li></li>").attr('value','qq'+ll))
//   		adder.append($("<a></a>").attr('id','2qq'+ll))
//   		adder.append($("<hr>"))

//   		$('a#2qq'+ll).text(this.notfs[ll])
// 		$('a#2qq'+ll).addClass("droplinks")


// 		$('span.notf2nos').css("background-color","red")
// 		$('span.notf2nos').text(this.notfnos)







$(document).on("click",'#licomment',function(){

	$('#alreadycomment').css("display","block")

	// console.log("keyari")
	// var adder=$('.commentsection')
	// adder.append($('<input type="text">').attr('id','newcup'))
	// var newcomment=$('<input type="text">').appendTo($('.commentsection'));
	// adder.append($('<input type="button" class="postbutton" value="POST">'))
	// var newcommentbutton=$('<input type="button" class="postbutton">').appendTo($('.commentsection'));
	// newcomment.attr('id','newcup')
	// newcomment.addClass("dropdown-content2")

	
})


$(document).on("click",'.postbutton',function(){
	var comm=$('input#newcup').val()

	var comment=new Comment(comm,senduser)

	qobject.comments.push(comment)

	qobject.commentnos+=1;
	$('span#commentnos').text(qobject.commentnos)

	var adder=$('#alreadycomment');

	adder.append($('<div class="postcomment"></div>').html('<b><div style="font-size:15px;text-indent:5px;">'+senduser.name+'</div></b>'+'<em><div style="font-size:14px;text-indent:12px;">'+comm+'</div><em>'))

	senduser.comment(qobject)

	$('#alreadycomment').css("display","block")
	$('#newcup').val("");
	// $('.postbutton').remove();

	// var commentt=$('<div></div>').appendTo($('#alreadycomment'));

	// commentt.html(receiveruser.name+' : '+comm)
});
























$('#okbutt2').on("click",function(){
	$('#modal2').css("display","none");
		$('#alreadycomment').css("display","none")
		$('.postcomment').remove()
		$('.commentos').remove()
		$('.commentreactions').remove()
	// receiveuser=senduser;
	// senduser=usr1;
			
});















// $('#notif1').on("click",function(){
// 	senduser=usr1;
// 	receiveuser=usr2;
// });





// $('#notif2').on("click",function(){
// });


//////////////////////////////////////////////////////////////////////////////////////////////////////////////



// $('#notif1').on("click",function(){
// 	senduser=receiveuser;
// 	receiveuser=usr1;
// });


// $('#notif2').on("click",function(){
// 	receiveuser=senduser;
// 	senduser=user1;
// });




//////////////////////////////////////////////////////////////////////////////////////////////////////////////













//////////////////////////////////////////////////////////////////////////////////////////////////////////////





// var sel = $('<select>').appendTo($('#newselect'));
// sel.addClass("js-example-basic-multiple");
// // sel.addClass("form-control");
// sel.attr("multiple","multiple");
// sel.width("95px");
// sel.attr("id","basesetselect");

// $(arr).each(function() {
//  sel.append($("<option>").attr('value',this.val).text(this.text));
// });

// });



















// var notifRnos=0;
// function incnot(){

// 	receivr=new Receiver($('select#contacts').val())
// 	receivr.notifnos+=1;
// 	$('span.notfRnos').css("background-color","red")
// 	$('span.notfRnos').text(receivr.notifnos)
// }























// var 

// function incnot(){
// 	notifRnos+=1;
// 	$('span.notfRnos').css("background-color","red")
// 	$('span.notfRnos').text(notifRnos)
// }


// var receive=false;
// $('#okbutt').on("click",function(){

// 	if($('#contacts').val().length!=0){
// 		$('#modal').css("display","none")
// 		if(!receive){
// 		incnot();
// 	}
// }
// });







// $('li#sharebutton').on("click",function(){
// 	var content=$('input#query').val();
// 	// console.log(content)

// 	if(content!=""){

// 		$('#modal').css("display","block")
// 		$('#modal textarea').val(content)

// }
// });




// $('#notifR').on("click",function(){
// 	if($('span.notfRnos').text()!=""){
// 		notifRnos-=1;
// 		receive=true;
// 		// $('#modal').css("display","block")
// 		// $('#modal textarea').val(content)

// 		if(notifRnos==0){
// 					$('span.notfRnos').text("")

// 				$('span.notfRnos').css("background-color","")
// 		}
// 		else{
// 			$('span.notfRnos').text(notifRnos)
// 		// $('#modal').css("display","block")
// 		// $('#modal textarea').val(content)
// 		}

// 		receive=false;
		
// 	}

// });


