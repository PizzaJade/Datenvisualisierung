/* let countryData;
let myCountries = []; */

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

//let minYear = "2013";
//let maxYear = "2020";

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
  createCanvas(2000, 2000);
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
    let radius2 = 38;
    for (let y = 0; y < myYears.length; y++) {

      myCountries[i].myX[y] = cos(myAngel) * radius2;
      myCountries[i].myY[y] = sin(myAngel) * radius2;
      myCountries[i].mySize[y] = map(myCountries[i].yearsData[y], 0, 45, 10, 60);
      //myCountries[i].myColor[y] = map(myCountries[i].yearsData[y], 0, 45, 50, 255);

      colorMode(HSL);
      myCountries[i].myColor[y] = color(map(myCountries[i].yearsData[y], 0, 45, 200, 240), map(myCountries[i].yearsData[y], 0, 45, 50, 75), 50, 0.5);

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


  for (var total = 0; total < circles; total++) {
    var diameter = (circles - total) * 110;

    stroke(136); //total * 3
    strokeWeight(0.5);

    push();
    rectMode(CENTER);
    translate(width / 2 + 300, height / 2)

    stroke(HSL, 180, 8, 94)
    strokeWeight(1);
    ellipse(0, 0, diameter, diameter);
    pop();

  }


  //Strahlen
  points = 30; //number of points
  pointAngle = 300 / points; //angle between points
  radius = 550; //length of each line from centre to edge of circle // - 379 nach y Richtung

  push();
  rectMode(CENTER);
  translate(
    width / 2 + 300,
    height / 2)
  fill((HSL, 180, 8, 94))

  // all circle lines 
  for (let i = 0; i < 360; i += 12) {
    x = cos(radians(i)) * radius;
    y = sin(radians(i)) * radius;
    let vector = createVector(x, y);

    line(0, 0, vector.x, vector.y);
  }

  pop();



  // draw all circles
  for (let i = 0; i < 30; i++) {
    for (let y = 0; y < 8; y++) {
      myCountries[i].display();
      // fill(myCountries[i].myColor[y]);
      // noStroke();
      // ellipse(
      //   myCountries[i].myX[y], myCountries[i].myY[y],
      //   myCountries[i].mySize[y], myCountries[i].mySize[y]
      // );
    }
  }



  for (let i = 0; i < myCountries.length; i++) {
    //console.log ("in for" + i);
    // myCountries[i].otherFunction();
  }


} // end draw








function mouseReleased() {

  for (let country = 0; country < myCountries.length; country++) { // countries
    myCountries[country].clickOverMe();
  }
}


function isThere() {
  let answer = false;
  for (let i = 0; i < selectedCountries.length; i++) {
    myCountry[country].isOverMe();
  }
  return (answer);
}