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
		$('span.notf2nos').css("background-color","red")
		$('span.notf2nos').text(queryobj.receiver.notifnos)
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
		
		queryobj.likenos+=1;
		receiveuser.receivenotifn(this.name,queryobj,2)

	

  	}

  	comment(queryobj){
  		queryobj.receiver.notfnos+=1;
		$('span.notf2nos').css("background-color","red")
		$('span.notf2nos').text(queryobj.receiver.notifnos)
		queryobj.receiver.receivenotifn(this.name,queryobj,3)

		queryobj.commentnos+=1;

  	}

  	sticker(){
  		queryobj.receiver.notfnos+=1;
		$('span.notf2nos').css("background-color","red")
		$('span.notf2nos').text(queryobj.receiver.notifnos)
		queryobj.receiver.receivenotifn(this.name,queryobj,4)
		queryobj.stickernos+=1;

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

  					Qlist.push(val)
  					// }
  					this.notfs.push(rn)
  					// console.log(this.notfs)
  					break;

  			case 2:
  					rn+=sendr + 'liked your reaction';
  					this.notfs.push(rn)
  					break;

  			case 3:
  					rn+=sendr+' commented on your reaction';
  					this.notfs.push(rn)
  					break;

  			case 4:
  					rn+=sendr+' reacted to your reaction';
  					this.notfs.push(rn)
  					break;

  			default:console.log('scene aan')
  					break;
  		}

  		this.updateNotif();
  		
  	}


  	updateNotif(){

  		// console.log("updater")


  		if(receiveuser!=usr1){
			var adder=$('.dropdown-content1')

  		var ll=this.notfs.length-1

  		// adder.append($("<li></li>").attr('value','qq'+ll))
  		adder.append($("<a></a>").attr('id','1qq'+ll))
  		adder.append($("<hr>"))

  		$('a#1qq'+ll).text(this.notfs[ll])
		$('a#1qq'+ll).addClass("droplinks")


		$('span.notf1nos').css("background-color","red")
		$('span.notf1nos').text(this.notfnos)




  		}
  		
		else{
		var adder=$('.dropdown-content2')

  		var ll=this.notfs.length-1

  		// adder.append($("<li></li>").attr('value','qq'+ll))
  		adder.append($("<a></a>").attr('id','2qq'+ll))
  		adder.append($("<hr>"))

  		$('a#2qq'+ll).text(this.notfs[ll])
		$('a#2qq'+ll).addClass("droplinks")


		$('span.notf2nos').css("background-color","red")
		$('span.notf2nos').text(this.notfnos)


		}

}
}






var nott=$('<div></div>').appendTo($('.dropdown1'));
nott.addClass("dropdown-content1")
// nott.append($("<div></div>").attr('id','qq'+0))
// .text(val)
// nott.append($("<hr>"))

// $('div#qq'+0).text('currently no notifications')
// $('div#qq'+0).addClass("droplinks")


var nott2=$('<div></div>').appendTo($('.dropdown2'));
nott2.addClass("dropdown-content2")



usr1=new User('Njan');
usr2=new User($('#contacts').val()[0]);

senduser=usr1;
var receiveuser;

$('li#sharebutton').on("click",function(){
	var content=$('input#query').val();

	if(content!=""){

		$('#modal').css("display","block")
		$('#modal textarea').val(content)

	}

});





$('#okbutt').on("click",function(){

	for(var i=0;i<$('#contacts').val().length;i++){
		// $('#modal').css("display","none")

		if(!receiveuser){
					receiveuser=new User($('#contacts').val()[i])

		}

		query=new Query($('#modal textarea').val(),senduser,receiveuser)
		senduser.sharequery(query)
	}

	if($('#contacts').val().length!=0){
		$('#modal').css("display","none")
	}
});








 // > div.dropdown-content > div.droplinks


var qobject;
$(document).on("click",'a.droplinks',function(){
	// var id=$('').attr('id')

	var valuee=$(this).attr('id');
	var nos=valuee.charAt(3)



	console.log(valuee)

	// console.log("kerii")
	// console.log(qobject)
	if(Qlist.length!=0){
			qobject=Qlist[nos]
			$('#modal2').css("display","block")
			$('#modal2 textarea').val(qobject.value)
			$('span#likenos').text(qobject.likenos)
			$('#reactdisp').text('React')


			senduser=qobject.receiver;
			receiveuser=qobject.sender;

	}
	
		
});


// i.fa-thumbs-up
// if($('#modal2').css('display')=='block'){
// 	console.log("in")
$('#lilike').on("click",function(){
		// console.log(qobject.likenos)
			if(qobject.likenos==0){
				console.log('times')
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
			console.log(cls)
			// $('#reactdisp').html(('<i class='.concat(cls)).concat('></i>'))
			$('#reactdisp').text('emoticon comes here')

			$('span#reactnos').css("display","none")
			});
// }





// ADding comments section



$(document).on("click",'#licomment',function(){

})


























$('#okbutt2').on("click",function(){
	$('#modal2').css("display","none")
	receiveuser=senduser;
	senduser=usr1;
			
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


