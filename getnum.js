// Screen size comparerator  getnum.js- David Pavlicko
function getNum() {
    var size = document.getElementById("size"); //projector screen size selection
    var option = size.options[size.selectedIndex].text;
    var txt = document.getElementById("result").value;
	txt=option;
	txt1 = txt*10/3; //shrink the image by dividing pixels by 3
	txt2 = txt1*1.77; //make size 16:9 format
	txt5 = txt1+30; //offset placement by moving down 30px
	sx = this.txt;
    document.getElementById("result").value = txt;
	var style = document.createElement('style');
	var style3 = document.createElement('style');
	style.type = 'text/css';
	style3.type = 'text/css';
	style.innerHTML = '.screensize { width: ' +  txt2+'px; height: ' + txt1+'px;display:block;outline:4px solid #000;}';
	document.getElementsByTagName('head')[0].appendChild(style);
	document.getElementById('screen').className = 'screensize';
	style3.innerHTML = '.screenholdr { top: ' + txt5+'px !important;}';
	document.getElementsByTagName('head')[0].appendChild(style3);
	document.getElementById('screenholder').className = 'screenholdr';
	addCopy(txt);
}

function getSecNum() {
    var size2 = document.getElementById("size2"); // tv screen size selection
    var option2 = size2.options[size2.selectedIndex].text;
    var txtnew = document.getElementById("results").value;
	txtnew=option2;
    txt3 = txtnew*10/3;
	txt4 = txt3*1.77;
	document.getElementById("results").value = txtnew;
	var style2 = document.createElement('style');
	style2.type = 'text/css';
	style2.innerHTML = '.screensizer { width: ' +  txt4+'px; height: ' + txt3+'px;}';
	document.getElementsByTagName('head')[0].appendChild(style2);
	document.getElementById('screensec').className = 'screensizer';
	getTV();
}


function addCopy(z){
	var txtcopy = z;
	var _tvpricer = $('#size2').find(':selected').attr('data-num');  //getting data value
	var projdone = "<a id='newtvlink' href='http://projectorpeople.com/projectors/all-projectors.asp#/?_=1&filter.price.low=399&filter.price.high="+_tvpricer+"&page=1'>Shop projectors up to $"+"<span id='#shopper'>"+ _tvpricer+ "</span>.00 >>";
	//var projdone = projcopy.link("http://projectorpeople.com/projectors/all-projectors.asp#/?_=1&filter.price.low=399&filter.price.high="+_tvpricer+"&page=1");
	var surlcopy = "Shop all "+txtcopy+" inch screens now >>";
	var surlresult = surlcopy.link("http://projectorpeople.com/screens/all-screens.asp#/?_=1&filter.screen_size.low="+txtcopy+"&filter.screen_size.high="+txtcopy+"&page=1");
	var sizer = document.getElementById('screen');
    styler = window.getComputedStyle(sizer);
    var width = styler.getPropertyValue('width');
	var width1 = parseInt(width, 10);
	console.log(width1);
	x = width1;
	resizeMe(x);
	//	if(width1 > 880){
	//console.log('dang you a big box');
	//	}else{
	//	console.log('hi little bitty box');		
	//if(console){
    //    console.log.apply(console, arguments); }//returns the supplied argument 'txt' to console
  //console.log(screenlinks);
  
  document.querySelector('.results').innerHTML =  surlresult + "<br><br>" + projdone;
  
  
	if(x > 800){
	$('.results, #tvinfo').css('bottom', "-470px");
	}else if(x <700){
	$('.results, #tvinfo').css('bottom', "-460px");
	}else{
	$('.results, #tvinfo').css('bottom', "-460px");	
	}

   // <a href='http://projectorpeople.com/screens/all-screens.asp#/?_=1&filter.screen_size.low="+txtcopy+"&filter.screen_size.high="+txtcopy+"&page=1'>
	
}

function resizeMe(x){
	//get #screen width ..if bigger than 800 move screen to left
	if(x > 1000){
		$('.screenholdr').css('margin-left', "-110px");
		$('.screenholdr').css('margin-bottom', "190px");
		$('#man').css('margin-left', "-210px");
		$('.tooltipB-content').html("Now THAT'S big screen entertainment!");
		$('.tooltipB-content').css('margin-left', "-275px");
		$('.tooltipB-content').css('margin-top', "-175px");
	}else if(x <1000 && x > 883){
		$('.screenholdr').css('margin-left', "15px");
		$('.screenholdr').css('margin-bottom', "110px");
		$('#man').css('margin-left', "-110px");
		$('.tooltipB-content').html("Whoa, that's a huge difference.");
	}else if(x <884 && x >= 784){
		$('.screenholdr').css('margin-left', "40px");
		$('.screenholdr').css('margin-bottom', "90px");
		$('#man').css('margin-left', "-110px");
		$('.tooltipB-content').html("Why in the world would you get a TV when you could have this?");
		$('.tooltipB-content').css('margin-top', "-175px");
	}else if(x <784 && x >700){
		$('.screenholdr').css('margin-left', "50px");
		$('.screenholdr').css('margin-bottom', "80px");
		$('#man').css('margin-left', "-110px");
		$('.tooltipB-content').html("That's pretty darn big");
	}else if(x <700 && x >677){
		$('.screenholdr').css('margin-left', "50px");
		$('.screenholdr').css('margin-bottom', "80px");
		$('#man').css('margin-left', "-110px");
		$('.tooltipB-content').html("Imagine watching sports on THAT");
	}else if(x <677 && x >647){
		$('.screenholdr').css('margin-left', "50px");
		$('.screenholdr').css('margin-bottom', "80px");
		$('#man').css('margin-left', "-110px");
		$('.tooltipB-content').html("I could cry I'm so happy with that big image");
	}else if(x <647 && x >623){
		$('.screenholdr').css('margin-left', "50px");
		$('.screenholdr').css('margin-bottom', "80px");
		$('#man').css('margin-left', "-110px");
		$('.tooltipB-content').html("TV vs This? No comparison");
	}else if(x <623 && x >588){
		$('.screenholdr').css('margin-left', "50px");
		$('.screenholdr').css('margin-bottom', "80px");
		$('#man').css('margin-left', "-110px");
		$('.tooltipB-content').html("No more squinting to read subtitles");
	}else if(x === undefined){
		$('.screenholdr').css('margin-left', "-20px");
		$('.screenholdr').css('margin-bottom', "70px");
		$('#man').css('margin-left', "-110px");
		$('.tooltipB-content').html("");
	}else{
		$('.screenholdr').css('margin-left', "-20px");
		$('.screenholdr').css('margin-bottom', "70px");	
		$('#man').css('margin-left', "-110px");
		$('.tooltipB-content').html("This is great for small rooms");
		$('.tooltipB-content').css('margin-left', "");
	}
}




function showImage(){
	//show first set of images
	var _ran = Math.floor(Math.random()*13)+1;
	document.getElementById("screen").style.backgroundImage = "url('images/action"+_ran+".jpg')";
	document.getElementById("screen").style.backgroundRepeat = "no-repeat";
	document.getElementById("screen").style.backgroundSize = "cover";
	document.getElementById("screensec").style.backgroundImage = "url('images/action"+_ran+".jpg')";
	document.getElementById("screensec").style.backgroundRepeat = "no-repeat";
	document.getElementById("screensec").style.backgroundSize = "cover";
	console.log("action"+_ran);
}


function hideImage(){
	//do something	
	document.getElementById("screen").style.background = "";
	document.getElementById("screensec").style.background = "";

}

function hideSImage(){
	//do something	
	var op = $("#screensec").css("opacity");
	if (op == 1){
	document.getElementById("screensec").style.opacity = "0";
	}else{
	document.getElementById("screensec").style.opacity = "1";
	}
}


function getTV(){
	var _val = $('#size2').find(':selected').attr('data-tv')  //getting selected value
    var _item = $('#size2').find(':selected').attr('data-price');  //getting data value
    var _tvprices = $('#size2').find(':selected').attr('data-num');  //getting data value

    //var shoppy = document.getElementById("#shopper");
    $("#tvinfo").html("Selected :"+_val + "<br>Average Selling Price: " + _item);
    $('#tvinfo').addClass('tvinfor');
    //shoppy.innerHTML = _tvprices;  
    var _tvpricer = $('#size2').find(':selected').attr('data-num');
    var newprice = _tvprices;
    $('#newtvlink').empty().append("<a id='newtvlinks' href='http://projectorpeople.com/projectors/all-projectors.asp#/?_=1&filter.price.low=399&filter.price.high="+_tvpricer+"&page=1'>Shop projectors up to $"+"<span id='#shopper'>"+ _tvpricer+ "</span>.00 >>");
 
 }  

//open and close content
/*
$("#close").click(function(){
	alert("clicked");
        $(".expand-content").slideUp();
		$("#close").hide();
		$("#open").show();
    });

$("#open").click(function(){
	alert("clicked open");
        $(".expand-content").slideDown();
		$("#open").hide();
		$("#close").show();
 });
 */

function closedIt(){
 		$(".expand-content").slideUp();
		$("#close").hide();
		$("#open").show();

}

function openedIt(){
	$(".expand-content").slideDown();
	$("#open").hide();
	$("#close").show();
}

