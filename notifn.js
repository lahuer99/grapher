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


var Qlist=[];
var C=0;
class Query{
	constructor(val,qsender,qreceiver,idd){
		this.id=idd;
		this.value=val;
		this.sender=qsender;
		this.receiver=qreceiver;
		// this.likenos=0;
		this.likers=[];
		// this.commentnos=0;
		// this.comments={};
		this.availcommentnos=0;

		this.comments=[];

	}
}


class Comment{
	constructor(val,postt){
		this.poster=postt;
		this.value=val;
		this.comlikers=[];
		// this.replynos=0;
		this.availreplynos=0;
		// this.replier=[];
		this.replies=[];
		this.replylikers=[];
		// this.rep
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

var nott2=$('<div></div>').appendTo($('.dropdown2'));
nott2.addClass("dropdown-content2")








///////////////////////////////////////////////////////////////////////////////////////////////////////////////







var usr1=new User('Rahul');
var usr2;


var senduser;
var receiveuser;
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

		query=new Query($('#modal textarea').val(),usr1,usr2,C)
		C+=1;
		usr1.sharequery(query)
	}

	if($('#contacts').val().length!=0){
		$('#modal').css("display","none")
	}
});









///////////////////////////////////////////////////////////////////////////////////////////////////////////////
















 // > div.dropdown-content > div.droplinks


var qobject;



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
			$('span#likenos').text(qobject.likers.length)
			$('span#commentnos').text(qobject.comments.lengths)
			// $('#reactdisp').text('React')
			// $('#reactdisp').text(qobject.sticknos)
			// $('#alreadycomment').empty();
			for(var i=0;i<qobject.comments.length;i++){

				// if(qobject.comments[i]!=null){

				var addr=$('#alreadycomment')
				// addr.append
				addr.append($('<div id="commentos'+i+'"'+'class="commentos"></div>').html('<div class="commain"><b><div style="font-size:15px;text-indent:5px;font-family: "OpenSansCondensed-Light";">'+qobject.comments[i].poster.name+' <li style="position: relative;right:-190px;" id="edcom'+i+'" class="deled"><i  class="far fa-edit"></i><li style="position: relative;right: -188px;" class="deled" id="delcom'+i+'"><i  class="fas fa-trash-alt"></i></li></div></b>'+'<em><div style="font-size:14px;text-indent:12px;	font-family: "OpenSansCondensed-LightItalic";" id="comno'+i+'"><span  id="comno'+i+'">'+qobject.comments[i].value+'</span>     </div><em>    <div class="commentreactions"><ul style="display: inline;list-style: none;"><li class="clickme" id="colike'+i+'"'+'><i style="font-size: 13px; color: #383838; margin-right: 3px;" class="far fa-thumbs-up"></i><span id="comlikenos'+i+'"'+'>'+qobject.comments[i].comlikers.length+'</span></li><li class="clickme" id="cocomment'+i+'"'+'><i style="font-size: 13px;color: #383838;margin-right: 3px;" class="fas fa-comments"></i><span id="comreply'+i+'"'+'>'+qobject.comments[i].replies.length+'</span></li></ul></div>'))
					// text(qobject.comments[i].poster+" : "+qobject.comments[i].value))

					// $('#commentos'+i).append($('<li id="edcom'+i+'" class="deled"><i style="position: relative;bottom: 56px;left: 239px;" class="far fa-edit"></i><li class="deled" id="delcom'+i+'"><i style="position: relative;bottom: 74px;left: 260px;" class="fas fa-trash-alt"></i></li>'))


					$('#commentos'+i).append($('<div class="replymain" id="replies'+i+'">'));


					$('#commentos'+i).append($('<input class="comreplyinp" type="text" id="replyinput'+i+'"'+'><input class="comreplies" id="replybutton'+i+'" type="button" value="REPLY">'));


				for(var j=0;j<qobject.comments[i].replies.length;j++){

					// if(qobject.comments[i].replies[j]!=null){


					$('#replies'+i).append($('<div id="'+i+'reply'+j+'" class="comrep">'+'<i style="rotation:90deg" class="fas fa-share"></i><hr style="color:white"><div id="'+i+'replyos'+j+'" '+'class="commentos"></div>').html('<b><div style="font-size:15px;text-indent:15px;">'+qobject.comments[i].replies[j][1].name+'<li style="position: relative;right: -113px;" id="'+i+'edrep'+j+'" class="repdeled"><i  class="far fa-edit"></i><li style="position: relative;right: -100px;    margin-left: 7px;" class="repdeled" id="'+i+'delrep'+j+'"><i  class="fas fa-trash-alt"></i></li></div></b>'+'<em><div style="font-size:14px;text-indent:26px;"><span id="'+i+'repno'+j+'">'+qobject.comments[i].replies[j][0]+'</span></div></em>'))
					

					$('#'+i+'reply'+j).append($('<li class="repclickme" id="'+i+'replike'+j+'"'+'><i style="font-size: 12px; color: #383838; margin-right: 3px;" class="far fa-thumbs-up"></i><span style="font-size:11px" id="'+i+'comreplikenos'+j+'"'+'>'+qobject.comments[i].replies[j].length+'</span></li>'))

					// $('#'+i+'reply'+j).append($('<li id="'+i+'edrep'+j+'" class="repdeled"><i style="position: relative;bottom:45px;left: 185px;" class="far fa-edit"></i><li class="repdeled" id="'+i+'delrep'+j+'"><i style="position: relative;bottom:62px;left: 206px;" class="fas fa-trash-alt"></i></li>'))
				// }
			// }

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
			for(var i=0;i<qobject.comments.length;i++){

				// if(qobject.comments[i]!=null){


				var addr=$('#alreadycomment')
				addr.append($('<div id="commentos'+i+'"'+'class="commentos"></div>').html('<div class="commain"><b><div style="font-size:15px;text-indent:5px;	font-family: "OpenSansCondensed-Light";">'+qobject.comments[i].poster+'<li style="position: relative;right: -190px;" id="edcom'+i+'" class="deled"><i  class="far fa-edit"></i><li style="position: relative;right: -188px;" class="deled" id="delcom'+i+'"><i  class="fas fa-trash-alt"></i></li></div></b>'+'<em><div style="font-size:14px;text-indent:12px;	font-family: "OpenSansCondensed-LightItalic";"><span  id="comno'+i+'">'+qobject.comments[i].value+'</span>      </div><em>      <div class="commentreactions"><ul style="display: inline;list-style: none;"><li class="clickme" id="colike'+i+'"'+'><i style="font-size: 13px; color: #383838; margin-right: 3px;" class="far fa-thumbs-up"></i><span id="comlikenos'+i+'"'+'>'+qobject.comments[i].likenos+'</span></li><li class="clickme" id="cocomment'+i+'"'+'><i style="font-size: 13px;color: #383838;margin-right: 3px;" class="fas fa-comments"></i><span id="comreply'+i+'"'+'>'+qobject.comments[i].replies.length+'</span></li></ul></div></div>'))


					// $('#commentos'+i).append($('<li  id="edcom'+i+'" class="deled"><i style="position: relative;bottom: 56px;left: 239px;" class="far fa-edit"></i><li class="deled" id="delcom'+i+'"><i style="position: relative;bottom: 74px;left: 260px;" class="fas fa-trash-alt"></i></li>'))


						
				$('#commentos'+i).append($('<div class="replymain" id="replies'+i+'">'));

				$('#commentos'+i).append($('<input class="comreplyinp" type="text" id="replyinput'+i+'"'+'><input class="comreplies" id="replybutton'+i+'" type="button" value="REPLY">'));


				for(var j=0;j<qobject.comments[i].replies.length;j++){

					// if(qobject.comments[i].reply[j]!=null){


					$('#replies'+i).append($('<div id="'+i+'reply'+j+'" class="comrep">'+'<i style="rotation:90deg" class="fas fa-share"></i><hr style="color:white"><div id="'+i+'replyos'+j+'" '+'class="commentos"></div>').html('<b><div style="font-size:15px;text-indent:15px;">'+qobject.comments[i].replies[j][1].name+'<li style="position: relative;right: -113px;" id="'+i+'edrep'+j+'" class="repdeled"><i  class="far fa-edit"></i><li style="position: relative;right: -100px;" class="repdeled" id="'+i+'delrep'+j+'"><i  class="fas fa-trash-alt"></i></li></div></b>'+'<em><div style="font-size:14px;text-indent:26px;"><span id="'+i+'repno'+j+'">'+qobject.comments[i].replies[j][0]+'</span></div></em>'))


					$('#'+i+'reply'+j).append($('<li class="repclickme" id="'+i+'replike'+j+'"'+'><i style="font-size: 12px; color: #383838; margin-right: 3px;" class="far fa-thumbs-up"></i><span style="font-size:11px" id="comreplikenos'+j+'"'+'>'+qobject.comments[i].replies[j].length+'</span></li>'))

					// $('#'+i+'reply'+j).append($('<li id="'+i+'edrep'+j+'" class="repdeled"><i style="position: relative;bottom:45px;left: 185px;" class="far fa-edit"></i><li class="repdeled" id="'+i+'delrep'+j+'"><i style="position: relative;bottom:62px;left: 206px;" class="fas fa-trash-alt"></i></li>'))

				// }
			// }




			}
		}


			
			senduser=usr2;
			receiveuser=usr1;

	}
	
		
});









$(document).on("click",'.postbutton',function(){
	var comm=$('input#newcup').val()

	var comment=new Comment(comm,senduser)

	qobject.comments.push(comment)

	// qobject.commentnos+=1;
	// qobject.availcommentnos.push(true);

	$('span#commentnos').text(qobject.comments.length)

	var adder=$('#alreadycomment');
	// var 

	adder.append($('<div id="commentos'+qobject.availcommentnos+'"'+'class="commentos"></div>').html('<div class="commain"><b><div style="font-size:15px;text-indent:5px;display:inline">'+qobject.comments[qobject.comments.length-1].poster.name+'<li style="position: relative;right: -200px;" id="edcom'+qobject.availcommentnos+'" class="deled" ><i  class="far fa-edit"></i><li style="position: relative;right: -200px;" class="deled" id="delcom'+qobject.availcommentnos+'"><i  class="fas fa-trash-alt"></i></li> </div></b>'+'<em><div style="font-size:14px;text-indent:12px;"><span  id="comno'+qobject.availcommentnos+'">'+qobject.comments[qobject.comments.length-1].value+'</span>    </div><em>     <div class="commentreactions"><ul style="display: inline;list-style: none;"><li class="clickme" id="colike'+qobject.availcommentnos+'"'+'><i style="font-size: 13px; color: #383838; margin-right: 3px;" class="far fa-thumbs-up"></i><span id="comlikenos'+qobject.availcommentnos+'"'+'>'+qobject.comments[qobject.comments.length-1].comlikers.length+'</span></li><li class="clickme" id="cocomment'+qobject.availcommentnos+'"'+'><i style="font-size: 13px;color: #383838;margin-right: 3px;" class="fas fa-comments"></i><span id="comreply'+qobject.availcommentnos+'"'+'>'+qobject.comments[qobject.comments.length-1].replies.length+'</span></li></ul></div></div>'))
						
			// $('#commentos'+(qobject.commentnos-1)).append($('<li  id="edcom'+(qobject.commentnos-1)+'" class="deled"><i style="position: relative;bottom: 56px;left: 239px;" class="far fa-edit"></i><li class="deled" id="delcom'+(qobject.commentnos-1)+'"><i style="position: relative;bottom: 74px;left: 260px;" class="fas fa-trash-alt"></i></li>'))


				

				$('#commentos'+qobject.availcommentnos).append($('<div class="replymain" id="replies'+qobject.availcommentnos+'">'));


				$('#commentos'+qobject.availcommentnos).append($('<input class="comreplyinp" type="text" id="replyinput'+qobject.availcommentnos+'"'+'><input class="comreplies" id="replybutton'+qobject.availcommentnos+'" type="button" value="REPLY">'));
				// $('#commentos'+noss).append($('<div id="replies'+qcomment.replynos+'">'));



				// $('#replybutton').on('click',function(){

					
				// 	$('#replies'+qobject.comments[qobject.commentnos-1].replynos).append($('<div id="reply'+qobject.comments[qobject.commentnos-1].replynos+'" class="comrep">'+'<i style="rotation:90deg" class="fas fa-share"></i><hr style="color:white"><div id="replyos'+qobject.comments[qobject.commentnos-1].replynos+'" '+'class="commentos"></div>').html('<b><div style="font-size:15px;text-indent:35px;">'+senduser.name+'</div></b>'+'<em><div style="font-size:14px;text-indent:46px;">'+$('#replyinput').val()+'</div><em>'))

				// 		// console.log("agathai")
				// 			// console.log("ivdai")
				// 	qobject.comments[qobject.commentnos-1].replynos+=1;
				// $('span#comreply'+noss).text(qobject.comments[qobject.commentnos-1].replynos)
				// qobject.comments[qobject.commentnos-1].replier.push(senduser)
				// qobject.comments[qobject.commentnos-1].reply.push($('#replyinput').val())
				
				// senduser.replycomment(qobject)

				// $('#replyinput').val("")
				// // $('#replybutton').remove();
				// });

// $('#replyinput').remove()
// 				$('#replybutton').remove();

	senduser.comment(qobject)

	// $('#alreadycomment').css("display","block")
	$('#newcup').val("");

	 $('#alreadycomment').animate({
        scrollTop: $('#commentos'+qobject.availcommentnos).offset().top
    }, 1000);

	 qobject.availcommentnos+=1;

	// $('.postbutton').remove();

	// var commentt=$('<div></div>').appendTo($('#alreadycomment'));

	// commentt.html(receiveruser.name+' : '+comm)
});







$(document).on("click",".comreplies",function(){
// $('#replybutton').on('click',function(){

var vall=$(this).attr('id')
aid=vall.slice(-1)
	// console.log(aid)
					
					$('#replies'+aid).append($('<div id="'+aid+'reply'+qobject.comments[aid].availreplynos+'" class="comrep">'+'<i style="rotation:90deg" class="fas fa-share"></i><hr style="color:white"><div id="'+aid+'replyos'+qobject.comments[aid].availreplynos+'" '+'class="commentos"></div>').html('<b><div style="font-size:15px;text-indent:15px;display:inline">'+senduser.name+'</div></b>'+'<em><div style="font-size:14px;text-indent:26px;"><span id="'+aid+'repno'+qobject.comments[aid].availreplynos+'">'+$('#replyinput'+aid).val()+'</span>  <li style="position: relative;bottom: 14px;right:-103px;" id="'+aid+'edrep'+qobject.comments[aid].availreplynos+'" class="repdeled"><i style="  width:0px;"  class="far fa-edit"></i><li style="position: relative;bottom:14px;right:-80px;" class="repdeled" id="'+aid+'delrep'+qobject.comments[aid].availreplynos+'"><i style="  width:0px;" class="fas fa-trash-alt"></i></li>   </div><em>	<li class="repclickme" id="'+aid+'replike'+qobject.comments[aid].availreplynos+'"'+'><i style="font-size: 12px; color: #383838; margin-right: 3px;" class="far fa-thumbs-up"></i><span style="font-size:11px;" id="comreplikenos'+qobject.comments[aid].availreplynos+'"'+'>'+qobject.comments[aid].availreplynos+'</span></li>'))

					// $('#'+aid+'reply'+qobject.comments[aid].replynos).append($('<li id="'+aid+'edrep'+qobject.comments[aid].replynos+'" class="repdeled"><i style="position: relative;bottom: 45px;left: 185px;" class="far fa-edit"></i><li class="repdeled" id="'+aid+'delrep'+qobject.comments[aid].replynos+'"><i style="position: relative;bottom:62px;left: 206px;" class="fas fa-trash-alt"></i></li>'))


						// console.log("agathai")
							// console.log("ivdai")
							$('#alreadycomment').animate({
      			  scrollTop: $('#'+aid+'reply'+(qobject.comments[aid].availreplynos)).offset().top
  				  }, 1000);

					// qobject.comments[aid].repls+=1;
	
				// qobject.comments[aid].replier.push(senduser)
				qobject.comments[aid].replies.push([$('#replyinput'+aid).val(),senduser])
				qobject.comments[aid].replylikers.push([])

				$('span#comreply'+(aid)).text(qobject.comments[aid].replies.length)
				// qobject.comments[aid].replylikenos.push(0)

				senduser.replycomment(qobject)

				$('#replyinput'+aid).val("")

				qobject.comments[aid].availreplynos+=1;
				// $('#replybutton').remove();
				});











///////////////////////////////////////////////////////////////////////////////////////////////////////////////






$(document).on('click','.repdeled',function(){
	var vall=$(this).attr('id')
	var noz=vall.slice(-1)
	var comnoz=vall.slice(0,1)


if(comnoz>=qobject.comments.length){
	comnoz=qobject.comments.length-1
}

if(noz>=qobject.comments[comnoz].replies.length){
	noz=qobject.comments[comnoz].replies.length-1
}


	// console.log(noz)
	// console.log(comnoz)

	if(qobject.comments[comnoz].replies[noz][1]==senduser){
		
	if(vall.slice(1,3)=='ed'){
		$('#modal3').css('display','block')


		$(document).on('click','#editbutton',function(){
			// $('.postbutton').trigger('click')
			// var n=
			if(vall.slice(1,3)=='ed'){
			// console.log($('#comno'+noz).text())
			$('#'+comnoz+'repno'+noz).text($('input#newcomm').val())
			// console.log($('#comno'+noz).text())
			qobject.comments[comnoz].replies[noz][0]=$('input#newcomm').val()
			// $('input#newcomm').val("")
			$('#modal3').css('display','none');

		// 	console.log("aai")
		// console.log("rep edit")
	}
		})
	}
	else{
		$('#'+comnoz+'reply'+noz).remove()
		qobject.comments[comnoz].replies.splice(noz,1);
		qobject.comments[comnoz].replylikers.splice(noz,1);

		// Qlist.splice(Qlist.indexOf(qobject),1)
		// qobject.comments.splice(noz,1)
		// qobject.comments[comnoz].replynos-=1;
		$('span#comreply'+comnoz).text(qobject.comments[comnoz].replies.length)	
	}

}

})









$(document).on('click','.deled',function(){
	var vall=$(this).attr('id')
	var noz=vall.slice(-1)

	if(noz>=qobject.comments.length){
		noz=qobject.comments.length-1
	}


	if(qobject.comments[noz].poster==senduser){
		
	if(vall.slice(0,2)=='ed'){
		$('#modal3').css('display','block')


		$(document).on('click','#editbutton',function(){
			// $('.postbutton').trigger('click')
			// var n=
			if(vall.slice(0,2)=='ed'){
			// console.log($('#comno'+noz).text())
			$('#comno'+noz).text($('input#newcomm').val())
			// console.log($('#comno'+noz).text())
			qobject.comments[noz].value=$('input#newcomm').val()
			// $('input#newcomm').val("")
			$('#modal3').css('display','none');

			// console.log("aai")
}
})
		// qobject
		// console.log("editable aai")
		// qobject.comments[qobject.commentnos-1].value=$('input#newcomm').val()

	}
	else{
		$('#commentos'+noz).remove()
		// qobject.availcommentnos[noz]=false;
		qobject.comments.splice(noz,1);
		// Qlist[Qlist.indexOf(qobject)]=null;
		// Qlist.splice(Qlist.indexOf(qobject),1)
		// qobject.comments.splice(noz,1)
		// qobject.commentnos-=1;
		$('span#commentnos').text(qobject.comments.length)
	}
	}

})


// $(document).on('click','#editbutton',function(){
// 	$('#modal3').css('display','none');
// 			// $('.postbutton').trigger('click')
// 			var n=
// 			$('#comno'+)
// 			qobject.comments[qobject.commentnos-1].value=$('input#newcomm').val()

// 			console.log("aai")

// })









///////////////////////////////////////////////////////////////////////////////////////////////////////////////





// var noss;
$(document).on('click','li.clickme',function(){
// $('li.clickme').on('click',function(){
	// noss=0;
	var vall=$(this).attr('id')
	noss=vall.slice(-1)

	if(noss>=qobject.comments.length){
		noss=qobject.comments.length-1
	}

	var qcomment=qobject.comments[noss]
	// console.log(qcomment)



	if(vall.slice(0,3)=='col')
	{
	// if(qcomment.likenos==0){
				// console.log('times')
				if(qcomment.comlikers.includes(senduser)){
					qcomment.comlikers.splice(qcomment.comlikers.indexOf(senduser),1)
				}
				else{
					qcomment.comlikers.push(senduser)
				}
				// qcomment.likenos+=1;
				$('span#comlikenos'+noss).text(qcomment.comlikers.length)
				// $()
				senduser.likecomment(qobject)
			// }
		}
	else{

		}
});




$('#lilike').on("click",function(){
		// console.log(qobject.likenos)
		if(qobject.likers.includes(senduser)){
			qobject.likers.splice(qobject.likers.indexOf(senduser),1)
		}
		else{
			qobject.likers.push(senduser)
		}
			// if(qobject.likenos==0){
				// console.log('times')
				// qobject.likenos+=1;
				$('span#likenos').text(qobject.likers.length)

				senduser.like(qobject)
			// }
});




$(document).on("click",'.repclickme',function(){

var vall=$(this).attr('id')
var noo=vall.slice(-1)
var noo1=vall.slice(0,1)
	// qobject.comments[noo1].reply[noo].likenos+=1;

if(noo1>=qobject.comments.length){
	noo1=qobject.comments.length-1
}

if(noo>=qobject.comments[noo1].replies.length){
	noo=qobject.comments[noo1].replies.length-1
}

if(qobject.comments[noo1].replylikers[noo].includes(senduser)){
	qobject.comments[noo1].replylikers[noo].splice(senduser,1)
}
else{
	qobject.comments[noo1].replylikers[noo].push(senduser)
}
	

		// $('span#comreplikenos'+).
$('span#comreplikenos'+noo).text(qobject.comments[noo1].replylikers[noo].length)
				// if(qobject.comments[noo1].replylikenos[noo]==0){
senduser.likecomment(qobject)

				// }
// }
// }
})



$('#okbutt3').on("click",function(){
		$('#modal3').css("display","none");
})



$('#okbutt2').on("click",function(){
	$('#modal2').css("display","none");
		// $('#alreadycomment').css("display","none")
		// $('.postcomment').remove()
		$('.commentos').remove()
		$('.commentreactions').remove()
		$('.comreplyinp').remove()
		$('.comreplies').remove()
		// $('#replyinput').remove()
		// $('#replybutton').remove();
	// receiveuser=senduser;
	// senduser=usr1;
			
});














