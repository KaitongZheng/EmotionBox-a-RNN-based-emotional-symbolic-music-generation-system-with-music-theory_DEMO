var A = new Audio();
var B = new Audio();
var X = new Audio();
var i = 0;
var results = new Array();
var whichIsX = new Array();
var d = new Date();
var random = Math.floor(Math.random()*10);

// function testABsampleA() {
//     stopPlaying();
//     document.getElementById("choice1").disabled = false;
//     A = new Audio(audioTableAB[i][0]);
//     setTimeout(function(){A.play()}, 1000);
// }

// function testABsampleB() {
//   stopPlaying();
//   document.getElementById("choice2").disabled = false;
//   B = new Audio(audioTableAB[i][1]);
//   setTimeout(function(){B.play()}, 1000);
// }

// function testABXsampleA() {
//   stopPlaying();
//   document.getElementById("choice1").disabled = false;
//   A = new Audio(audioTableABX[i][0]);
//   setTimeout(function(){A.play()}, 1000);
// }

// function testABXsampleB() {
//   stopPlaying();
//   document.getElementById("choice2").disabled = false;
//   B = new Audio(audioTableABX[i][1]);
//   setTimeout(function(){B.play()}, 1000);
// }

// function testABXsampleX() {
//   stopPlaying();
//   if (random % 2 == 0) testABXsampleA();
//   else testABXsampleB();
// }

// function stopPlaying() {
//   A.pause();
//   A.currentTime = 0;
//   B.pause();
//   B.currentTime = 0;
//   X.pause();
//   X.currentTime = 0;
// }

function nextButton() {
  // stopPlaying();
  // i += 1;
  var r10 = choice10.value+',1';
  var r11 = choice11.value+',1';
  var r12 = choice12.value+',1';
  var r13 = choice13.value+',1';

  if(choice10.checked) {
    results.push(r10);
  }
  else if(choice11.checked) {
    results.push(r11);
  }
  else if(choice12.checked){
	results.push(r12);
  }
  else if(choice13.checked){
    results.push(r13);
    }

  var r20 = choice20.value+',2';
  var r21 = choice21.value+',2';
  var r22 = choice22.value+',2';
  var r23 = choice23.value+',2';

  if(choice20.checked) {
    results.push(r20);
  }
  else if(choice21.checked) {
    results.push(r21);
  }
  else if(choice22.checked){
  results.push(r22);
  }
  else if(choice23.checked){
    results.push(r23);
    }

  var r30 = choice30.value+',3';
  var r31 = choice31.value+',3';
  var r32 = choice32.value+',3';
  var r33 = choice33.value+',3';

  if(choice30.checked) {
    results.push(r30);
  }
  else if(choice31.checked) {
    results.push(r31);
  }
  else if(choice32.checked){
  results.push(r32);
  }
  else if(choice33.checked){
    results.push(r33);
    }

  var r40 = choice40.value+',4';
  var r41 = choice41.value+',4';
  var r42 = choice42.value+',4';
  var r43 = choice43.value+',4';

  if(choice40.checked) {
    results.push(r40);
  }
  else if(choice41.checked) {
    results.push(r41);
  }
  else if(choice42.checked){
  results.push(r42);
  }
  else if(choice43.checked){
    results.push(r43);
    }

  var r50 = choice50.value+',5';
  var r51 = choice51.value+',5';
  var r52 = choice52.value+',5';
  var r53 = choice53.value+',5';

  if(choice50.checked) {
    results.push(r50);
  }
  else if(choice51.checked) {
    results.push(r51);
  }
  else if(choice52.checked){
  results.push(r52);
  }
  else if(choice53.checked){
    results.push(r53);
    }
    
  var r60 = choice60.value+',6';
  var r61 = choice61.value+',6';
  var r62 = choice62.value+',6';
  var r63 = choice63.value+',6';

  if(choice60.checked) {
    results.push(r60);
  }
  else if(choice61.checked) {
    results.push(r61);
  }
  else if(choice62.checked){
  results.push(r62);
  }
  else if(choice63.checked){
    results.push(r63);
    }
    
  var r70 = choice70.value+',7';
  var r71 = choice71.value+',7';
  var r72 = choice72.value+',7';
  var r73 = choice73.value+',7';

  if(choice70.checked) {
    results.push(r70);
  }
  else if(choice71.checked) {
    results.push(r71);
  }
  else if(choice72.checked){
  results.push(r72);
  }
  else if(choice73.checked){
    results.push(r73);
    }
    
  var r80 = choice80.value+',8';
  var r81 = choice81.value+',8';
  var r82 = choice82.value+',8';
  var r83 = choice83.value+',8';

  if(choice80.checked) {
    results.push(r80);
  }
  else if(choice81.checked) {
    results.push(r81);
  }
  else if(choice82.checked){
  results.push(r82);
  }
  else if(choice83.checked){
    results.push(r83);
    }
    
  var r90 = choice90.value+',9';
  var r91 = choice91.value+',9';
  var r92 = choice92.value+',9';
  var r93 = choice93.value+',9';

  if(choice90.checked) {
    results.push(r90);
  }
  else if(choice91.checked) {
    results.push(r91);
  }
  else if(choice92.checked){
  results.push(r92);
  }
  else if(choice93.checked){
    results.push(r93);
    }
    
  var r100 = choice100.value+',10';
  var r101 = choice101.value+',10';
  var r102 = choice102.value+',10';
  var r103 = choice103.value+',10';

  if(choice100.checked) {
    results.push(r100);
  }
  else if(choice101.checked) {
    results.push(r101);
  }
  else if(choice102.checked){
  results.push(r102);
  }
  else if(choice103.checked){
    results.push(r103);
    }
    
  var r110 = choice110.value+',11';
  var r111 = choice111.value+',11';
  var r112 = choice112.value+',11';
  var r113 = choice113.value+',11';

  if(choice110.checked) {
    results.push(r110);
  }
  else if(choice111.checked) {
    results.push(r111);
  }
  else if(choice112.checked){
  results.push(r112);
  }
  else if(choice113.checked){
    results.push(r113);
    }
    
  var r120 = choice120.value+',12';
  var r121 = choice121.value+',12';
  var r122 = choice122.value+',12';
  var r123 = choice123.value+',12';

  if(choice120.checked) {
    results.push(r120);
  }
  else if(choice121.checked) {
    results.push(r121);
  }
  else if(choice122.checked){
  results.push(r122);
  }
  else if(choice123.checked){
    results.push(r123);
    }
        
  var r130 = choice130.value+',13';
  var r131 = choice131.value+',13';
  var r132 = choice132.value+',13';
  var r133 = choice133.value+',13';

  if(choice130.checked) {
    results.push(r130);
  }
  else if(choice131.checked) {
    results.push(r131);
  }
  else if(choice132.checked){
  results.push(r132);
  }
  else if(choice133.checked){
    results.push(r133);
    }
        
  var r140 = choice140.value+',14';
  var r141 = choice141.value+',14';
  var r142 = choice142.value+',14';
  var r143 = choice143.value+',14';

  if(choice140.checked) {
    results.push(r140);
  }
  else if(choice141.checked) {
    results.push(r141);
  }
  else if(choice142.checked){
  results.push(r142);
  }
  else if(choice143.checked){
    results.push(r143);
    }
        
  var r150 = choice150.value+',15';
  var r151 = choice151.value+',15';
  var r152 = choice152.value+',15';
  var r153 = choice153.value+',15';

  if(choice150.checked) {
    results.push(r150);
  }
  else if(choice151.checked) {
    results.push(r151);
  }
  else if(choice152.checked){
  results.push(r152);
  }
  else if(choice153.checked){
    results.push(r153);
    }
        
  var r160 = choice160.value+',16';
  var r161 = choice161.value+',16';
  var r162 = choice162.value+',16';
  var r163 = choice163.value+',16';

  if(choice160.checked) {
    results.push(r160);
  }
  else if(choice161.checked) {
    results.push(r161);
  }
  else if(choice162.checked){
  results.push(r162);
  }
  else if(choice163.checked){
    results.push(r163);
    }
        
  var r170 = choice170.value+',17';
  var r171 = choice171.value+',17';
  var r172 = choice172.value+',17';
  var r173 = choice173.value+',17';

  if(choice170.checked) {
    results.push(r170);
  }
  else if(choice171.checked) {
    results.push(r171);
  }
  else if(choice172.checked){
  results.push(r172);
  }
  else if(choice173.checked){
    results.push(r173);
    }
        
  var r180 = choice180.value+',18';
  var r181 = choice181.value+',18';
  var r182 = choice182.value+',18';
  var r183 = choice183.value+',18';

  if(choice180.checked) {
    results.push(r180);
  }
  else if(choice181.checked) {
    results.push(r181);
  }
  else if(choice182.checked){
  results.push(r182);
  }
  else if(choice183.checked){
    results.push(r183);
    }
        
  var r190 = choice190.value+',19';
  var r191 = choice191.value+',19';
  var r192 = choice192.value+',19';
  var r193 = choice193.value+',19';

  if(choice190.checked) {
    results.push(r190);
  }
  else if(choice191.checked) {
    results.push(r191);
  }
  else if(choice192.checked){
  results.push(r192);
  }
  else if(choice193.checked){
    results.push(r193);
    }
        
  var r200 = choice200.value+',20';
  var r201 = choice201.value+',20';
  var r202 = choice202.value+',20';
  var r203 = choice203.value+',20';

  if(choice200.checked) {
    results.push(r200);
  }
  else if(choice201.checked) {
    results.push(r201);
  }
  else if(choice202.checked){
  results.push(r202);
  }
  else if(choice203.checked){
    results.push(r203);
    }
        
  var r210 = choice210.value+',21';
  var r211 = choice211.value+',21';
  var r212 = choice212.value+',21';
  var r213 = choice213.value+',21';

  if(choice210.checked) {
    results.push(r210);
  }
  else if(choice211.checked) {
    results.push(r211);
  }
  else if(choice212.checked){
  results.push(r212);
  }
  else if(choice213.checked){
    results.push(r213);
    }
        
  var r220 = choice220.value+',22';
  var r221 = choice221.value+',22';
  var r222 = choice222.value+',22';
  var r223 = choice223.value+',22';

  if(choice220.checked) {
    results.push(r220);
  }
  else if(choice221.checked) {
    results.push(r221);
  }
  else if(choice222.checked){
  results.push(r222);
  }
  else if(choice223.checked){
    results.push(r223);
    }
        
  var r230 = choice230.value+',23';
  var r231 = choice231.value+',23';
  var r232 = choice232.value+',23';
  var r233 = choice233.value+',23';

  if(choice230.checked) {
    results.push(r230);
  }
  else if(choice231.checked) {
    results.push(r231);
  }
  else if(choice232.checked){
  results.push(r232);
  }
  else if(choice233.checked){
    results.push(r233);
    }
        
  var r240 = choice240.value+',24';
  var r241 = choice241.value+',24';
  var r242 = choice242.value+',24';
  var r243 = choice243.value+',24';

  if(choice240.checked) {
    results.push(r240);
  }
  else if(choice241.checked) {
    results.push(r241);
  }
  else if(choice242.checked){
  results.push(r242);
  }
  else if(choice243.checked){
    results.push(r243);
    }

  
 
  // document.getElementById("test").reset();

  // if (random % 2 == 0) whichIsX.push("A");
  // else whichIsX.push("B");
  // random = Math.floor(Math.random()*10);

  // document.getElementById("choice1").disabled = true;
  // document.getElementById("choice2").disabled = true;

  // if(location.href.split("/").slice(-1) == "AB.html" ) {
    // document.getElementById("question").innerHTML = questionTable[i];
  // }

  if(location.href.split("/").slice(-1) == "AB.html") {
    download(results.join('\r\n'), d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate()+" "+location.href.split("/").slice(-1)+'.txt', "text/plain");
    setTimeout(function(){window.location.href = "./end.html"}, 300);
  }

}

// function question() {
  // document.getElementById("question").innerHTML = questionTable[i];
  // arr = [0,1,2,3,4,5,6,7,8,9];
  // random_index = arr.sort(function() {
    // return (0.5-Math.random());
	// })
// }

// function init(){
	// document.getElementById("submit").disabled = false;
// }

// function finish(){
	// document.getElementById("submit").disabled = true;
// }