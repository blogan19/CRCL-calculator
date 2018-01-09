function wtUnit(){

 var chk =  document.getElementById('wtChk');
 var kg = document.getElementById('wtDrop');
 var lbs = document.getElementById('wtDropLbs');
 var lbl = document.getElementById('wtLbl');
	
	if(chk.checked == true){
		kg.style.display = "block";
		lbs.style.display = "none";	
		lbl.innerHTML = "Kg <i class='fa fa-exchange'></i>";

	}else if(chk.checked == false){
		kg.style.display = "none";
		lbs.style.display = "block";	
		lbl.innerHTML = "Lbs <i class='fa fa-exchange'></i>";
	}	
}

function htUnit(){
	var chk =  document.getElementById('htChk');
	var f1 = document.getElementById('htDropF');
	var f2 = document.getElementById('htDropF2');
	var m = document.getElementById('htDropM');
	var lbl = document.getElementById('htLbl');
	
	if(chk.checked == true){
		f1.style.display = "block";
		f2.style.display = "block";
		m.style.display = "none";	
		lbl.innerHTML = "Feet <i class='fa fa-exchange'></i>";

	}else if(chk.checked == false){
		f1.style.display = "none";
		f2.style.display = "none";
		m.style.display = "block";	
		lbl.innerHTML = "cm <i class='fa fa-exchange'></i>";
	}	
}
htUnit();

function weightKg(min, max){

	for(var i = min; i < max; i++){
		var opt = document.createElement('option');
		opt.value = i;
		opt.innerHTML = i + " kg";
		document.getElementById('wtDrop').appendChild(opt);
	}
	
}
weightKg(30, 200);

function weightLbs(min, max){

	for(var i =min; i < max; i++){
		var opt = document.createElement('option');
		opt.value = i;
		opt.innerHTML = i + "Lbs";
		document.getElementById('wtDropLbs').appendChild(opt);
	}
	
}
weightLbs(50, 500);

function heightF(){

	for(var i =1; i < 8; i++){
		var opt = document.createElement('option');
		opt.value = i;
		opt.innerHTML = i + " feet";
		document.getElementById('htDropF').appendChild(opt);
	}
	for(var i=0; i < 12; i++){
		var opt = document.createElement('option');
		opt.value = i;
		opt.innerHTML = i + " inches";
		document.getElementById('htDropF2').appendChild(opt);
	}

}
heightF();


function heightM(min, max){

	for(var i =min; i < max; i++){
		var opt = document.createElement('option');
		opt.value = i;
		opt.innerHTML = i + "cm";
		document.getElementById('htDropM').appendChild(opt);
	}
	
}
heightM(0, 220);

function age(min, max){

	for(var i =min; i < max; i++){
		var opt = document.createElement('option');
		opt.value = i;
		opt.innerHTML = i;
		document.getElementById('ageDrop').appendChild(opt);
	}
	
}
age(18, 120);

function creat(min, max){

	for(var i =min; i < max; i++){
		var opt = document.createElement('option');
		opt.value = i;
		opt.innerHTML = i + "";
		document.getElementById('creatDrop').appendChild(opt);
	}
	
}
creat(0, 1000);


function calculate(){

	//weights function to check which weight untis are being used all weights are converted to Kg
 	var	wtkg = document.getElementById('wtDrop').selectedIndex +29;
 	var wtlb = document.getElementById('wtDropLbs').selectedIndex +49;
 	var chk =  document.getElementById('wtChk');
 	var weight;


 	if(chk.checked == true){
 		weight = wtkg.toFixed();
 	}else if(chk.checked == false){
 		weight = (wtlb*0.453592).toFixed();
 	}

 	//height function to check which height is used

 	var htf = document.getElementById('htDropF').selectedIndex;
 	var hti = document.getElementById('htDropF2').selectedIndex-1;
 	var htC = (htf * 30.48) + (hti *2.54);
 	

 	var htm = document.getElementById('htDropM').selectedIndex -1;
 	var htChk = document.getElementById('htChk');
 	

 	var height;

 	if(htChk.checked == true && hti >= 0){
 		height = htC;
 	}else if(htChk.checked == false){
 		height = htm;
 	}

 	//gender
 	var r1 = document.getElementById('mRad');
 	var r2 = document.getElementById('fRad');
 	var gender;
 	if(r1.checked == true){
 		gender = 1.23;
 	}else if(r2.checked == true){
 		gender = 1.04;
 	}
 	
 	//calculate height over 5 foot, IBW and ABW

 	var inchover5 = (height - 152.4)/2.54;
 	var mIBW = inchover5 * 2.3 + 50;
	var fIBW = inchover5 * 2.3 + 45.5;
	var mABW = mIBW + 0.4 * (weight - mIBW);
	var fABW = fIBW + 0.4 * (weight - fIBW);



	//age and creatinine
 	var age = document.getElementById('ageDrop').selectedIndex + 17;
 	var srcr = document.getElementById('creatDrop').selectedIndex -1;

 	var CRCLAnswer = document.getElementById('ansDisplay');
 	
 	if(gender == 1.23 && (weight > (1.2 * mIBW))){
		CRCLAnswer.innerHTML = (((140 - age) * mABW * gender) /srcr).toFixed(2) +" ml/min";
		console.log("weight used: ABW male");

	} else if(gender == 1.23 && (weight < (1.2 * mIBW))){
		CRCLAnswer.innerHTML = (((140 - age) * weight * gender)/srcr).toFixed(2) + " ml/min";
		console.log("weight used: actual weight male");
		
	} else if(gender == 1.04 && (weight > (1.2 * mIBW))){
			CRCLAnswer.innerHTML = (((140 - age) * fABW * gender) /srcr).toFixed(2) + " ml/min";
			console.log("weight used: ABW female");
	} else if(gender == 1.04 && (weight < (1.2 * mIBW))){
			CRCLAnswer.innerHTML = (((140 - age) * weight * gender) /srcr).toFixed(2) + " ml/min";
			console.log("weight used: Actual weight female");
	}


	//displays answer jumbo if criteria matches
	
	if(weight >= 30 && height > 1 && age > 18 && srcr > 1 && gender > 1){
		console.log("criteria matches");
		document.getElementById('ansDisplay').style.display = "block";
	}



 	console.log("\nweight: " + weight + "\nHeight: " + height +"\ninches over 5 foot: " + inchover5 +  " \nage: " + age + "\nsrcr: " + srcr + " \ngender: " + gender);
 	
}

function resetWt(){
    document.getElementById('wtDrop').selectedIndex = 0;  
    document.getElementById('wtDropLbs').selectedIndex = 0;

}
function resetHt(){
	 document.getElementById('htDropF').selectedIndex = 0;
	 document.getElementById('htDropF2').selectedIndex = 0;
	document.getElementById('htDropM').selectedIndex = 0;

}


