//checks if checkbox is checked and then displays select group based on this
function wtUnit(){

 var chk =  document.getElementById('wtChk');
 var kg = document.getElementById('wtDrop');
 var lbs = document.getElementById('wtDropLbs');
 var lbl = document.getElementById('wtLbl');
	
	if(chk.checked == true){
		kg.style.display = "block";
		lbs.style.display = "none";	
		lbl.innerHTML = "Kg <i class='glyphicon glyphicon-sort'></i>";

	}else if(chk.checked == false){
		kg.style.display = "none";
		lbs.style.display = "block";	
		lbl.innerHTML = "Lbs <i class='glyphicon glyphicon-sort'></i>";
	}	
}
//checks if checkbox is checked and then displays select group based on this
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
		lbl.innerHTML = "Feet <i class='glyphicon glyphicon-sort'></i>";

	}else if(chk.checked == false){
		f1.style.display = "none";
		f2.style.display = "none";
		m.style.display = "block";	
		lbl.innerHTML = "cm <i class='glyphicon glyphicon-sort'></i>";
	}	
}
htUnit();


function selectData(min, max, name, unit){
	for(var i =min; i < max; i++){
		var opt = document.createElement('option');
		opt.value = i;
		opt.innerHTML = i + unit;
		document.getElementById(name).appendChild(opt);
	}
}
selectData(30, 200, 'wtDrop', ' kg');
selectData(50, 500, 'wtDropLbs', ' lbs');
selectData(5, 8, 'htDropF', ' feet');
selectData(0, 12,'htDropF2',' inches');
selectData(152, 300, 'htDropM', 'cm');
selectData(18, 120, 'ageDrop', '');
selectData(0, 1000, 'creatDrop', '');



//function to calculate the creatinine clearance
function calculate(){

 	var	wtkg = document.getElementById('wtDrop').selectedIndex +29;
 	var wtlb = document.getElementById('wtDropLbs').selectedIndex +49;
 	var chk =  document.getElementById('wtChk');
 	var weight;


 	//checks which unit has been inputed by user then converts lbs to kg
 	if(chk.checked == true){
 		weight = wtkg.toFixed();
 	}else if(chk.checked == false){
 		weight = (wtlb*0.453592).toFixed();
 	}

 	//height function to check which height is used

 	var htf = document.getElementById('htDropF').selectedIndex + 4;
 	var hti = document.getElementById('htDropF2').selectedIndex-1;
 	var htC = (htf * 30.48) + (hti *2.54);
 	

 	var htm = document.getElementById('htDropM').selectedIndex +151;
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
 	var mIBW = (inchover5 * 2.3) + 50;
	var fIBW = (inchover5 * 2.3) + 45.5;
	var mABW = mIBW + 0.4 * (weight - mIBW);
	var fABW = fIBW + 0.4 * (weight - fIBW);


	//age and creatinine
 	var age = document.getElementById('ageDrop').selectedIndex + 17;
 	var srcr = document.getElementById('creatDrop').selectedIndex -1;

 	var CRCLAnswer = document.getElementById('ansDisplay');
 	var crcl = 0;
 	if(gender == 1.23 && (weight > (1.2 * mIBW))){
		crcl = (((140 - age) * mABW * gender) /srcr).toFixed(2);
		CRCLAnswer.innerHTML = crcl + " ml/min";

	} else if(gender == 1.23 && (weight < (1.2 * mIBW))){
		crcl = (((140 - age) * weight * gender)/srcr).toFixed(2);
		CRCLAnswer.innerHTML = crcl + " ml/min";
		
	} else if(gender == 1.04 && (weight > (1.2 * mIBW))){
		crcl = (((140 - age) * fABW * gender) /srcr).toFixed(2);
		CRCLAnswer.innerHTML = crcl + " ml/min";
			
	} else if(gender == 1.04 && (weight < (1.2 * mIBW))){
		crcl = (((140 - age) * weight * gender) /srcr).toFixed(2);
		CRCLAnswer.innerHTML = crcl + " ml/min";
	}


	//displays answer jumbo if criteria matches
	if(weight >= 30 && inchover5 >= 0 && age > 18 && srcr > 1 && gender > 1){
		console.log("criteria matches");
		document.getElementById('ansJumbo').style.display = "block";
		document.getElementById('inputForm').style.display = "none";
		document.getElementById('title').innerHTML = "Creatinine Clearance"

	}
 	console.log("\nweight: " + weight + "\nHeight: " + height +"\ninches over 5 foot: " + inchover5 +  " \nage: " + age + "\nsrcr: " + srcr + " \ngender: " + gender);
 	return crcl;
}

//resets the select groups when the unit is changed
function resetWt(){
    document.getElementById('wtDrop').selectedIndex = 0;  
    document.getElementById('wtDropLbs').selectedIndex = 0;

}
function resetHt(){
	 document.getElementById('htDropF').selectedIndex = 0;
	 document.getElementById('htDropF2').selectedIndex = 0;
	document.getElementById('htDropM').selectedIndex = 0;
}
function recalculate(){
	document.getElementById('inputForm').style.display = "block";
	document.getElementById('ansJumbo').style.display = "none";
	document.getElementById('doseDisplay').style.display = "none";
	document.getElementById('title').innerHTML = "Renal Impairement Dosing"
}
function doseCalculate(){
	var crcl = calculate();
	document.getElementById('doseDisplay').style.display = "block";
	console.log("crcl: " + crcl);
}


