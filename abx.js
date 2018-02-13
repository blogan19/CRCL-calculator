function AntibioticInstructions(){
    var selectedABX = document.getElementById("abxSelect");
    var ABX = selectedABX.options[selectedABX.selectedIndex].value;
    var renalFunction = calculate();  

    var ABX_dose = 0;

    if(ABX == "1"){
      document.getElementById('doseDisplay').style.display = "none";
    }


  //Amoxicillin
    if(ABX == "Amoxicillin" && renalFunction >= 10){
      ABX_dose = "\nDose as in normal renal function";
    }else if(ABX == "Amoxicillin" && renalFunction < 10){
      ABX_dose = "\n250mg to 1g every 8 hours";
    }

  //Benzylpenicillin
    if(ABX == "Benzylpenicillin" && renalFunction >= 20){
      ABX_dose = "Dose as in normal renal function";
    }else if(ABX == "Benzylpenicillin" && renalFunction < 20 && renalFunction >= 10){
      ABX_dose = "600mg to 2.4g every 6 hours (depending on severity of infection)";
    }else if(ABX ==  "Benzylpenicillin" && renalFunction < 10){
      ABX_dose = "600mg to 1.2g every 6 hours (depending on severity of infection)";
    }

  //Cefaclor
    if(ABX == "Cefaclor" && renalFunction  >= 10){
      ABX_dose = "Dose as in normal renal function";
    }else if(ABX == "Cefaclor" && renalFunction < 10){
      ABX_dose = "250mg every 8 hours";
    }

  //Cefalexin
    if(ABX == "Cefalexin" && renalFunction >= 20){
      ABX_dose = "Dose as in normal renal function";
    }else if(ABX == "Cefalexin" && renalFunction  < 20 && renalFunction >= 10){
      ABX_dose = " 500mg every 8-12 hours";
    }else if(ABX == "Cefalexin" && renalFunction < 10){
      ABX_dose = "250mg-500mg every 8-12 hours";
    }

  //Cefotaxime
    if(ABX == "Cefotaxime" && renalFunction >= 10){
      ABX_dose = " Dose as in normal renal function";
    }else if(ABX == "Cefotaxime" && renalFunction < 10){
      ABX_dose = "1g every 8-12 hours";
    }

  //ceftazidime
    if(ABX == "Ceftazidime" && renalFunction < 5){
      ABX_dose = "500mg every 48 hours";
    }else if(ABX == "Ceftazidime" && renalFunction  >= 6 && renalFunction <= 15){
      ABX_dose = " 500mg every 24 hours";
    }else if(ABX == "Ceftazidime" && renalFunction  >= 16 && renalFunction <= 30){
      ABX_dose = " 1g every 24 hours";
    }else if(ABX == "Ceftazidime" && renalFunction  >= 31 && renalFunction <= 50){
      ABX_dose = " 1g every 12 hours";
    }else if(ABX == "Ceftazidime" && renalFunction > 50){
      ABX_dose = " Dose as in normal renal function";
    }



  //ceftriaxone
    if(ABX == "CefTRIAXone"){
      ABX_dose = "Dose as in normal renal function";
    }


  //cefuroxime
    if(ABX == "Cefuroxime" && renalFunction >= 50){
      ABX_dose = "Dose as in normal renal function";
    }else if(ABX == "Cefuroxime" && renalFunction >= 20 && renalFunction < 50 ){
      ABX_dose = "750mg-1.5g every 8 hours";
    }else if(ABX == "Cefuroxime" && renalFunction >= 10 && renalFunction < 20){
      ABX_dose = "750mg-1.5g every 12 hours";
    }else if(ABX == "Cefuroxime" && renalFunction < 10){
      ABX_dose = "750mg-1.5g every 12-24 hours";
    }

  //Ciprofloxacin
    if(ABX == "Ciprofloxacin" && renalFunction >= 20){
      ABX_dose = " Dose as in normal renal function";
    }else if(ABX == "Ciprofloxacin" && renalFunction < 20 && renalFunction >= 10 ){
      ABX_dose = "50-100% of dose";
    }else if(ABX == "Ciprofloxacin" && renalFunction < 10){
      ABX_dose = "50% of normal dose";
    }



  //Clarithromycin IV 
    if(ABX == "ClarithromycinIV" && renalFunction >= 20){
      ABX_dose = "Dose as in normal renal function";
    }else if(ABX == "ClarithromycinIV" && renalFunction < 20){
      ABX_dose = "250-500mg every 12 hours";
    }

  //Clarithromycin PO
    if(ABX == "ClarithromycinPO" && renalFunction >= 30){
      ABX_dose = "Dose as in normal renal function";
    }else if(ABX == "ClarithromycinPO" && renalFunction < 30){
      ABX_dose = "250-500mg every 12 hours";
    }

  //Clindamycin 
    if(ABX == "Clindamycin"){
      ABX_dose = "Dose as in normal renal function";
    }

  //co-amoxiclav IV
    if(ABX == "Co-amoxiclavIV" && renalFunction >= 30){
      ABX_dose = "Dose as in normal renal function";
    }else if(ABX == "Co-amoxiclavIV" && renalFunction < 30 && renalFunction >= 10){
      ABX_dose = "1.2g stat then 600mg every 12 hours";
    }else if(ABX == "Co-amoxiclavIV" && renalFunction < 10){
      ABX_dose = "1.2g stat followed by 600mg every 24 hours";
    }

  //co-Amoxiclav PO 
    if(ABX == "Co-amoxiclavPO" && renalFunction >= 30){
      ABX_dose = "Dose as in normal renal function";
    }else if(ABX == "Co-amoxiclavPO" && renalFunction < 30 && renalFunction >= 10 ){
      ABX_dose = "375mg to 625mg TWICE daily";
    }else if(ABX == "Co-amoxiclavPO" && renalFunction < 10){
      ABX_dose = "375mg to 625mg ONCE daily";
    }

  //Doxycycline
    if(ABX == "Doxycycline" ){
      ABX_dose = "Dose as in normal renal function ";
    }

  //Ertapenem
    if(ABX == "Ertapenem" && renalFunction >= 30){
      ABX_dose = "Dose as in normal renal function";
    }else if(ABX == "Ertapenem" && renalFunction < 30 && renalFunction >= 10){
      ABX_dose = "No manufacturer information. 50%-100% of normal dose";
    }else if(ABX == "Ertapenem" && renalFunction < 10){
      ABX_dose = "No manufacturer information. 50% of dose or 1g three times a WEEK is suggested in renal drug handbook";
    }
  //Flucloxacillin
    if(ABX == "Flucloxacillin" && renalFunction >= 10){
      ABX_dose = "Dose as in normal renal function";
    }else if(ABX == "Flucloxacillin" && renalFunction< 10){
      ABX_dose = "Dose as in normal renal function up to a total daily dose of 4g";
    }

  //Fosfomycin
    if(ABX == "Fosfomycin"){
      ABX_dose = "Oral dosing requires no dosage adjustment. For single IV doses give normal loading dose followed by reduced dose if GFR is less than 40ml/min. Refer to drug SPC for further information.";
    }

  //Fusidicacid/sodiumfusidate
    if(ABX == "Fusidic"){
      ABX_dose = "Dose as in normal renal function";
    }

  //Gentamicin 
    if(ABX == "Gentamicin"){
      ABX_dose = "Refer to antibiotics policy on the intranet or Mersey Micro smart app";
    }

  //Levofloxacin
    if(ABX == "Levofloxacin" && renalFunction >= 30){
      ABX_dose = "dose as in normal renal function";
    }else if(ABX == "Levofloxacin" && renalFunction < 50 && renalFunction >= 20){
      ABX_dose = "Initial dose 250-500mg then 125-250mg 12-24 hourly";
    }else if(ABX == "Levofloxacin" && renalFunction < 20 && renalFunction >= 10){
      ABX_dose = "Initial dose 250-500g then 125mg 12-48 hourly";
    }else if(ABX == "Levofloxacin" && renalFunction < 10){
      ABX_dose = "500mg stat followed by 250-500mg every 48 hours";
    }

  //Linezolid
    if(ABX == "Linezolid" && renalFunction >= 30){
      ABX_dose = "Dose as in normal renal function";
    }else if(ABX == "Linezolid" && renalFunction < 10){
      ABX_dose = "Dose as in normal renal function however monitor closely";
    }

  //Meropenem
    if(ABX == "Meropenem" && renalFunction >= 30){
      ABX_dose = "Dose as in normal renal function";
    }else if(ABX == "Meropenem" && renalFunction < 50 && renalFunction >= 20){
      ABX_dose = "500mg-2g every 12 hours";
    }else if(ABX == "Meropenem" && renalFunction < 20 && renalFunction >= 10){
    
      ABX_dose = "500mg - 1g every 12 hours or 500mg every 8 hours";
    }else if(ABX == "Meropenem" && renalFunction < 10){
      ABX_dose = "500mg-1g every 24 hours";
    }

  //Metronidazole
    if(ABX == "Metronidazole"){
      ABX_dose = "Dose as in normal renal function";
    }

  //Nitrofurantoin

    if(ABX == "Nitrofurantoin" && renalFunction >= 60){
      ABX_dose = "Dose as in normal renal function";
    }else if(ABX == "Nitrofurantoin" && renalFunction < 60 && renalFunction >= 30){
      ABX_dose = "Dose as in normal renal function however increased risk of treatment failure";
    }else if(ABX == "Nitrofurantoin" && renalFunction < 30){
      ABX_dose = "Contraindicated";
    }

  //Phenoxymethylpenicillin
    if(ABX == "Phenoxymethylpenicillin"){
      ABX_dose = "Dose as in normal renal function";
    }

  //Pivemecillinam
    if(ABX == "Pivmecillinam"){
      ABX_dose = "Dose as in normal renal function";
    }

  //Rifampicin 
    if(ABX == "Rifampicin" && renalFunction >= 10){
      ABX_dose = "Dose as in normal renal function";
    }else if(ABX == "Rifampicin" && renalFunction < 10){
      ABX_dose = "50-100% of normal dose";
    }

  //Tazocin
    if(ABX == "Tazocin" && renalFunction >= 20){
      ABX_dose = "Dose as in normal renal function";
    }else if(ABX == "Tazocin" && renalFunction < 10){
      ABX_dose = "4.5g every 12 hours";
    }

  //teicoplanin
    if(ABX == "Teicoplanin" ){
      ABX_dose = "Refer to antibiotics policy on the intranet or Mersey Micro smart app";
    }

  //Tigecycline
    if(ABX == "Tigecycline" ){
      ABX_dose = "Dose as in normal renal function";
    }

  //Trimethoprim
    if(ABX == "Trimethoprim" && renalFunction >= 25){
      ABX_dose = "Dose as in normal renal function";
    }else if(ABX == "Trimethoprim" && renalFunction < 25 && renalFunction >= 15){
      ABX_dose = "Dose as in normal renal function for 3 days then use 50% of normal dose";
    }else if(ABX == "Trimethoprim" && renalFunction < 15){  
      ABX_dose = "Use 50% of normal dose.";
    }

  //Vancomycin
    if(ABX == "Vancomycin"){
      ABX_dose = "Refer to antibiotics policy on the intranet or Mersey Micro smart app";
    }

    document.getElementById('dose').innerHTML =  ABX_dose;

    


  }