/* let countryData;
let myCountries = []; */

let countrylist;
let countryData;

let selectedCheck;
let SizeRape = [8,100]; 
let generalDataRape= [0,45.29];
let actuallDataRape; 

let currentSizeRape; 
let currentDataRape; 

let currentSizeAssault; 
let currentDataAssault; 

//let minYear = "2013";
//let maxYear = "2020";

let numOfCountryRape;
let myCountries = [];

let myYears = ["2013","2014","2015","2016","2017","2018","2019","2020"];





function preload(){
  rapeMenData = loadTable('data/rape_men.csv', 'csv', 'header');
  rapeWomenData = loadTable('data/rape_women.csv', 'csv', 'header');
  rapeTotalData = loadTable('data/rape_total.csv', 'csv', 'header');
  myFont= loadFont("assets/FrutigerLTStd-Roman.otf");
  
  assaultMenData = loadTable('data/sexual_assault_men.csv', 'csv', 'header');
  assaultWomenData = loadTable('data/sexual_assault_women.csv', 'csv', 'header');
  assaultTotalData = loadTable('data/sexual_assault_total.csv', 'csv', 'header');
}



function setup(){
  createCanvas(1920,1080);
  noFill();
  background(0);

  fill (200);
  textSize(20);
  textFont(myFont); 
  text ("sexual assault and rape in the EU and EEA\n2013 - 2020 by suspected perpetrator", 10, 30);
  textSize(10);
  text("Bich-Trang Vu-Thi, Isabell Kaletka, Nina Dettmers", 10, height-20);
  noFill();


  var x = 1200;
  var y = 540;
  var circles = 9;
  strokeCap(SQUARE);
  
  //
  countrylist = document.getElementById("countrylist");
  for(let myRow of rapeTotalData.rows){
      let li = document.createElement("li");
      li.innerHTML = myRow.get('Geographicregion');
      countrylist.appendChild(li);
      li.addEventListener('click', ()=>{if(li.getAttribute('class') == 'selected'){
          li.removeAttribute('class', 'selected');
          }else{
              
              li.setAttribute('class', 'selected');
              /* li.style.backgroundColor = "#343434"; */            
          }
      });
  }


  for (var total = 0; total < circles; total++) {
    var diameter = (circles-total) * 110;
    stroke(136,136,136); //total * 3
    strokeWeight(0.5);

    push();
  rectMode(CENTER);
  translate(width / 2 + 300, height / 2)
  stroke("red")
  strokeWeight(1);
  ellipse(0, 0, diameter, diameter);
  pop();
  
  }

 
  

  
  for (let myRow of rapeTotalData.rows){
      let currentCountry = new Clases();
          currentCountry.myCountry = myRow.get('Geographicregion');

          for (let i = 0; i < myYears.length; i++) {
            currentCountry.yearsData.push (myRow.get(myYears[i])); //   []
          }
          myCountries.push(currentCountry);
  }

  let myAngel = 0;
  for (var i = 0; i < myCountries.length; i++) {
    let radius2 =0;
    for (let y = 0; y < myYears.length; y++) {

      myCountries[i].myX[y] = cos(myAngel) * radius2;
      myCountries[i].myY[y] = sin(myAngel) * radius2;

      radius2 = radius2 + 70;




// Gehe in die Instanz der Klasse rein
let instance = myCountries[i];

// Durchlaufe dessen yearsData Array
for (let y = 0; y < instance.yearsData.length; y++) { 
  let value = parseInt(instance.yearsData[y]);
  myCountries[i].mySize[y] = map(value, 0, 45, 1, 9);
}


       
      
      // i -> [0; instance.yearsData.length - 1] -> [2013, 2020]
      // let i = 0;
      // für 2013: instance.yearsData[i]
      // für 2014: instance.yearsData[i + 1]

      // z.B. Wert für 2013


    }
    myAngel = myAngel + 0.20943951023932;
    console.log();
  }



  //console.log(myCountries);
  



}




function draw(){
 
  //Strahlen
  points = 30; //number of points
  pointAngle = 300/points; //angle between points
  radius = 500; //length of each line from centre to edge of circle // - 379 nach y Richtung
  


  push();
  rectMode(CENTER);
  translate(width / 2 + 300, height / 2)
  stroke("red")
 
  
  //
  for (let i = 0; i < 360; i += 12) {
    x = cos(radians(i)) * radius;
    y = sin(radians(i)) * radius;

    let vector = createVector(x, y);

    line(0, 0, vector.x, vector.y);
  }

  for (let i = 0; i < 30; i ++) {
    for (let y = 0; y < 8; y++) {
      fill(255);
      ellipse (myCountries[i].myX[y], myCountries[i].myY[y], 20,20);
      //console.log("x: "+ myCountries[i].myX + "   y:" + myCountries[i].myY);
    }
  }


/*
  //rape zur Referenz
  let angel = 0;
  for(var country = 0; country < 30; country++) { 
    let radius = 0;
      for(var year = 0; year < 8; year++){
       X2 = cos(angel) * radius;
       Y2 = sin(angel) * radius;
       fill (165);
      ellipse(X2,Y2, 40,40);
      radius = radius + 70
      }
      angel = angel + 0.20943951023932;

    }
*/
    //assault zur Referenz
//  let angelB = 0;
//  for(var countryB = 0; countryB < 30; countryB++) { 
//  let radiusB = 0;
//    for(var yearB = 0; yearB < 8; yearB++){
//     X3 = cos(angelB) * radiusB;
//     Y3 = sin(angelB) * radiusB;
//     fill (165);
//    ellipse(X3,Y3, 20,20);
//    radiusB = radiusB + 70
//    }
//    angelB = angelB + 0.20943951023932;
//}

for (let v = 0; v < myCountries; v++) {
  myCountry[i].display();
}
  pop(); 
   
}