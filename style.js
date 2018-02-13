var ht = 50;
var fnt = 14;
function zoom(z){


	var drop = document.getElementsByClassName('dropContainer');
	var lbl = document.getElementsByClassName('unitLbl');
	
	if(z == 'i' && ht < 90){
		ht+= 10;
		fnt+= 0.5;
		for(var i = 0; i < 6; i++){
			drop[i].style.height = ht + "px";
			drop[i].style.fontSize =  fnt + "px";	
		}
		for(var i = 0; i < 4; i++){
			lbl[i].style.lineHeight = ht + "px";
		}
	}

	if(z == 'o' && ht >50){
		ht-= 10;
		fnt-= 0.5;
		for(var i = 0; i < 6; i++){
			drop[i].style.height = ht + "px";
			drop[i].style.fontSize =  fnt + "px";
		}
		for(var i = 0; i < 4; i++){
			lbl[i].style.lineHeight = ht + "px";
		}
	}
	
}


function dispCntl(status){

	var d = document.getElementById('dispCntl');
	if(status == "show"){
		d.style.display = "block";
	}
	if(status == "h"){
		d.style.display = "none";
	}
}

