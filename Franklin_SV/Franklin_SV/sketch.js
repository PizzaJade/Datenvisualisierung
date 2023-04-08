/* Ninas Code , aber momentane Datei die wir überarbeiten , paar Design anpassungen fehlen noch */

let countrylist;
let countryData;
let selectedCheck;


let SizeRape = [8, 100];

let maxRape = 45.29;
let minRape = 0.1;
let totalRape = 0;

let generalDataRape = [0, 45.29];
let actuallDataRape;

let currentSizeRape;
let currentDataRape;

let currentSizeAssault;
let currentDataAssault;


let numOfCountryRape;
let myCountries = [];

let myYears = ["2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"];
let selectedCountries = ['AUT', 'BEL', 'BGR', 'HR', 'CYP', 'CZ', 'DK', 'EST', 'FI', 'FR', 'DE', 'GR', 'HUN', 'IT', 'IS', 'IE', 'LVA', 'LI', 'LT', 'LU', 'MT', 'NL', 'NO', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE'];





function preload() {
  rapeMenData = loadTable('data/rape_men.csv', 'csv', 'header');
  rapeWomenData = loadTable('data/rape_women.csv', 'csv', 'header');
  rapeTotalData = loadTable('data/rape_total.csv', 'csv', 'header');
  myFont = loadFont("assets/FrutigerLTStd-Bold.otf");

  assaultMenData = loadTable('data/sexual_assault_men.csv', 'csv', 'header');
  assaultWomenData = loadTable('data/sexual_assault_women.csv', 'csv', 'header');
  assaultTotalData = loadTable('data/sexual_assault_total.csv', 'csv', 'header');
}


let offset = {
  x: 0,
  y: 0
}


function setup() {
  createCanvas(1900, 1400);
  noFill();
  background(0);

  offset.x = width / 2;
  offset.y = height / 2;



  for (let myRow of rapeTotalData.rows) {
    let currentCountry = new Clases();
    currentCountry.myCountry = myRow.get('Geographicregion');

    for (let i = 0; i < myYears.length; i++) {
      currentCountry.yearsData.push(myRow.get(myYears[i])); //   []
    }
    myCountries.push(currentCountry);

    myCountries[myCountries.length - 1].setup();
  }

  let myAngel = 0;
  for (var i = 0; i < myCountries.length; i++) {
    let radius2 = 100;
    for (let y = 0; y < myYears.length; y++) {

      myCountries[i].myX[y] = cos(myAngel) * radius2;
      myCountries[i].myY[y] = sin(myAngel) * radius2;
      myCountries[i].mySize[y] = map(myCountries[i].yearsData[y], 0, 45, 10, 90);
      //myCountries[i].myColor[y] = map(myCountries[i].yearsData[y], 0, 45, 50, 255);

      colorMode(HSL);
      myCountries[i].myColor[y] = color(map(myCountries[i].yearsData[y], 0, 45, 200, 200), map(myCountries[i].yearsData[y], 0, 45, 50, 75), 40, 0.10);

      radius2 = radius2 + 70;
    } // end of year "for" cicle


    myAngel = myAngel + 0.20943951023932;
  } // end of country "for" cicle

}




function draw() {
  background(0, 0, 0);

  fill(200);
  textSize(30);
  textFont(myFont);
  text("sexual assault and rape in the EU and EEA \nby suspected perpetrator 2013 - 2020", 40, 30);
  textSize(16);
  textFont(myFont);
  text("Bich-Trang Vu-Thi, Isabell Kaletka, Nina Dettmers", 30, height - 20);
  noFill();


  var x = 1200;
  var y = 540;
  var circles = 10;
  strokeCap(SQUARE);


//select von ChatGPT in sketch.js z.114-122
//Fehler HIEHHDJJFBJFJ
//if (this.selectedCountries) {
 // for (let i = 0; i < this.selectedCountries.length; i++) {
   // if (this.selectedCountries[i]) {
     // fill(200);
     // textSize(12);
      //text(this.myCountry,
       //    this.myX[i] + this.offset.x,
       //    this.myY[i] + this.offset.y
     // );
     // textSize(12);
      //text("rape: " + this.yearsData[i],
       //    this.myX[i] + this.offset.x,
       //    this.myY[i] + 30 + this.offset.y
    //  );
   // }
  //}
//} else {
  // handle the error here
 // console.error("Error: this.selectedCountries is undefined.");
//}



  for (var total = 0; total < circles; total++) {
    var diameter = (circles - total) * 110;

    stroke(136); //total * 3
    strokeWeight(0.5);

    push();
    rectMode(CENTER);
    translate(width / 2 + 300, height / 2)
    stroke("Gray")
    strokeWeight(1);
    ellipse(0, 0, diameter, diameter);
    pop();

  }


  //Strahlen
  points = 30; //number of points
  pointAngle = 300 / points; //angle between points
  radius = 590; //length of each line from centre to edge of circle // - 379 nach y Richtung

  push();
  rectMode(CENTER);
  translate(
    width / 2 + 300,
    height / 2)
  //fill((HSL, 180, 8, 94))

  // all circle lines 
  for (let i = 0; i < 360; i += 12) {
    x = cos(radians(i)) * radius;
    y = sin(radians(i)) * radius;
    let vector = createVector(x, y);

    line(0, 0, vector.x, vector.y);
  }

  pop();


  fill ("black");
  ellipse(1250,702,200,200);

  // draw all circles
  for (let i = 0; i < 30; i++) {
    for (let y = 0; y < 8; y++) {
      myCountries[i].display();
      // fill(myCountries[i].myColor[y]); ??
      // noStroke();
      // ellipse(
      //   myCountries[i].myX[y], myCountries[i].myY[y],
      //   myCountries[i].mySize[y], myCountries[i].mySize[y]
      // );
    }
  }



  for (let i = 0; i < myCountries.length; i++) {
  }


} // end draw








//Für Select Anweisung
function mouseReleased() {

  for (let country = 0; country < myCountries.length; country++) { // countries
    myCountries[country]. releasedOverMe();
  }
}





/*for (let i = 0; i < this.selectedCountries.length; i++) {
    if (this.selectedCountries[i]) {
        fill(200);
        textSize(12);
        text(this.myCountry,
            this.myX[i] + this.offset.x,
            this.myY[i] + this.offset.y
        );
        textSize(12);
        text("rape: " + this.yearsData[i],
            this.myX[i] + this.offset.x,
            this.myY[i] + 30 + this.offset.y
        );
    }
} 
*/