let myCountries = [];
let myCountriesA = [];

let myYears = ["2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"];
let myYearsA = ["2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"];

let show = {
  rape: true,
  assault: true
};

let myButton;

let myButtonRape; 

let myButtonBoth; 

function preload() {
  rapeTotalData = loadTable('data/rape_total.csv', 'csv', 'header');
  assaultTotalData = loadTable('data/sexual_assault_total.csv', 'csv', 'header');
  myFont = loadFont("assets/FrutigerLTStd-Bold.otf");
}



function setup() {
  createCanvas(1900, 1400);
  colorMode(HSL);
  background(0);

  
  // creating countries
  for (let myRow of rapeTotalData.rows) {
    let currentCountry = new rapeclases();
    currentCountry.myCountry = myRow.get('Geographicregion');
    for (let i = 0; i < myYears.length; i++) {
      currentCountry.yearsData.push(myRow.get(myYears[i]));
    }
    myCountries.push(currentCountry);
    myCountries[myCountries.length - 1].calculate();
  }
  // create rape ende

  //create assault
  for (let myRow of assaultTotalData.rows) {
    let currentCountryA = new assaultclases();
    currentCountryA.myCountryA = myRow.get('Geographicregion');
    for (let ia = 0; ia < myYearsA.length; ia++) {
      currentCountryA.yearsDataA.push(myRow.get(myYearsA[ia]));
    }
    myCountriesA.push(currentCountryA);
    myCountriesA[myCountriesA.length - 1].calculate();
  }
// create assault ende


  //rape  calculating coordinates for echa year in each country
  let myAngel = 0;
  for (let i = 0; i < myCountries.length; i++) {
    let radius2 = 100;
    for (let y = 0; y < myYears.length; y++) {
      myCountries[i].myX[y] = cos(myAngel) * radius2;
      myCountries[i].myY[y] = sin(myAngel) * radius2;
      myCountries[i].mySize[y] = map(myCountries[i].yearsData[y], 0, 45, 10, 95);
      //Farbe mit HSL Opacity einstellen bei 0.15
      myCountries[i].myColor[y] = color(map(myCountries[i].yearsData[y], 0, 45, 200, 200), map(myCountries[i].yearsData[y], 0, 45, 50, 75), 40, 0.5);
      radius2 = radius2 + 70;
    } // end of year "for" cicle

    myAngel = myAngel + 0.20943951023932;
  } // rape end of country "for" cicle

    // assault calculating coordinates for echa year in each country
    let myAngelA = 0;
    for (let ia = 0; ia < myCountriesA.length; ia++) {
      let radius2A = 100;
      for (let yA = 0; yA < myYearsA.length; yA++) {
        myCountriesA[ia].myXA[yA] = cos(myAngelA) * radius2A;
        myCountriesA[ia].myYA[yA] = sin(myAngelA) * radius2A;
        myCountriesA[ia].mySizeA[yA] = map(myCountriesA[ia].yearsDataA[yA], 0, 70, 10, 95);
        //Farbe mit HSL Opacity einstellen bei 0.15
        myCountriesA[ia].myColorA[yA] = color(map(myCountriesA[ia].yearsDataA[yA], 0, 70, 60, 80), map(myCountriesA[ia].yearsDataA[yA], 0, 70, 50, 80), 40, 0.5);
        radius2A = radius2A + 75;
      } // assault end of year "for" cicle
  
      myAngelA = myAngelA + 0.20943951023932;

  //     let button3 = createButton('Show Both');
  // button3.position(350, 400); // Position des Buttons auf der Zeichenfläche
  // button3.mousePressed(toggleBoth); // Funktion toggleRape() bei Klick auf den Button aufrufen


  //     let button = createButton('Show Assault');
  // button.position(50, 400); // Position des Buttons auf der Zeichenfläche
  // button.mousePressed(toggleAssault); // Funktion toggleAssault() bei Klick auf den Button aufrufen

  // let button2 = createButton('Show Rape');
  // button2.position(200, 400); // Position des Buttons auf der Zeichenfläche
  // button2.mousePressed(toggleRape); // Funktion toggleRape() bei Klick auf den Button aufrufen

 

  myButton = new ButtonAssault (40, 350, 20, "Assault");
  myButtonRape = new ButtonRape (180,350, 20, "Rape"); 
  myButtonBoth = new ButtonBoth (300,350,20, "Both");

    } // end of country "for" cicle

} // end setuo();


// -----------------------DRAW--------------------------------------------------------------

function draw() {
  background(0, 0, 0);

    // displaying titles
    //fill(50,300,100, 10);
    // rectMode(CORNER);
    // rect(10, 10, 500, 1400);

  myButton.display();
  myButtonRape.display();
  myButtonBoth.display();


  // displaying titles
  noStroke();
  fill("gray");
  textSize(30);
  textFont(myFont);
  text("Sexual assault and rape \nin the EU and EEA in 2013 - 2020", 30, 50);
  textSize(16);
  textFont(myFont);
  text("Bich-Trang Vu-Thi, Isabell Kaletka, Nina Dettmers", 30, height - 20);

  textSize(20);
  text("Rape", 30, 1100);
  text("Sexual assault", 30, 1220);

  textSize(20);
  text("Suspected prepetrator \nper hundred thousand inhabitant", 30,  250);


  //Balken für rape
  colorMode(HSL);

  fill('black')
  rectMode(CORNER);
  rect(30, 1120, 400, 40);
  fill(200,200,40,0.7);
  rectMode(CORNER);
  rect(30, 1120, 400, 40);

  // balken für assault
  colorMode(HSL);

  fill('black')
  rectMode(CORNER);
  rect(30, 1240, 400, 40);
  fill(50,80,40,0.7)
  rectMode(CORNER);
  rect(30, 1240, 400, 40);
// text end
  

  //displaying strahlen
  points = 30; //number of points
  pointAngle = 300 / points; //angle between points
  radius = 590; //length of each line from centre to edge of circle // - 379 nach y Richtung
  push();
    rectMode(CENTER);
    translate(width / 2 + 300, height / 2)
    stroke(30);
    for (let i = 0; i < 360; i += 12) {
      let x = cos(radians(i)) * radius;
      let y = sin(radians(i)) * radius;
      let vector = createVector(x, y);
      line(0, 0, vector.x, vector.y);
    }
  pop();

   
  //Draw schwarzer Kreis in der Mitte 
  fill (0);
  ellipse(1250,702,200,200);
  
  blendMode(ADD);

  // draw all countries
  // rape
  for (let i = 0; i < 30; i++) {
    myCountries[i].display(show.rape);  
  }

  // assault
  for (let ia = 0; ia < 30; ia++) {
    myCountriesA[ia].display(show.assault);
  }

 

  blendMode(BLEND);

} // end draw

  
  

  

function mouseReleased() {
  for (let country = 0; country < myCountries.length; country++) { // countries
    myCountries[country].releasedOverMe();
  }

  myButton.releasedOverMe();

  myButtonRape.releasedOverMe();

  myButtonBoth.releasedOverMe();
}

function mouseReleasedA() {
  for (let countryA = 0; countryA < myCountriesA.length; countryA++) { // countries
    myCountriesA[countryA].releasedOverMeA();
  }
}
