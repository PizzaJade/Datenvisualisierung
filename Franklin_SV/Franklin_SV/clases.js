class Clases {
    constructor() {
        //this.myCountry = [];
        this.yearsData = [];


        this.myX = [];
        this.myY = [];
        this.mySize = [];
        this.myColor = [];

        this.myYears = ["2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"];
        //Warum haben wir  this.overMe = []; und  this.isOverMe = [];??
        this.overMe = [];
     
       this.selected = [] ;
       //select
       this.selectedCountries = [];

        this.myWidth = [];
        this.isOverMe = [];

        this.offset = {
            x: width / 2 + 300,
            y: height / 2

        }
        this.myYears = ["2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"];
        this.specialX= 1210;
        this.specialY= 702;
    }

    setup() {
        // this.myCountry = myCountry;
        for (let agno = 0; agno < this.yearsData.length; agno++) {
            this.myX[agno] = random(0, width);
            this.myY[agno] = random(0, height);
            this.mySize[agno] = random(5, 50);
            this.myColor[agno] = color(random(0, 255), random(0, 255), random(0, 255));
            this.overMe[agno] = false;
            this.selected[agno] =  false;
            this.myWidth[agno] = 0;
            this.isOverMe[agno] = false;
        }
    }



    display(myX, myY) {

        noStroke();

        this.isThisOverMe();
       
       
        for (let agno = 0; agno < this.yearsData.length; agno++) {
            
            // fill
            fill(this.myColor[agno]);
            ellipse(
                this.myX[agno] + this.offset.x,
                this.myY[agno] + this.offset.y,
                this.mySize[agno], this.mySize[agno]
            );
            if (this.isOverMe[agno]) {
                fill(200);
                textSize(12);
                text("year:" + this.myYears[agno],
                    this.myX[agno] + this.offset.x-110, //-150 x Richtung 
                    this.myY[agno] + this.offset.y
                );
                textSize(12);
                text("rape:"+ this.yearsData[agno],
                    this.myX[agno] + this.offset.x-110,
                    this.myY[agno] + 30 + this.offset.y
                );
                textSize(35);
                
                 
                text(this.myCountry,  //this.myYears[agno]
                this.specialX,
                this.specialY,
              
            );
            //Circle Stroke
            push();
            noFill();
            stroke("blue");
            strokeWeight(2);
            ellipse(
                this.myX[agno] + this.offset.x,
                this.myY[agno] + this.offset.y,
                this.mySize[agno] + 20, this.mySize[agno] + 20
            );
            pop();

            }
             //Select von Nina
            if (this.selected[agno]  ) {
                console.log("selected");
                fill(200);
                textSize(12);
                text(this.myCountry,
                    this.myX[agno] + this.offset.x,
                    this.myY[agno] + this.offset.y
                );
                textSize(12);
                text("rape: " + this.yearsData[agno],
                    this.myX[agno] + this.offset.x,
                    this.myY[agno] + 30 + this.offset.y
                );

            }
            
            //select von ChatGTP siehe in sketch.js z.118-138
            //if (this.selectedCountries[agno]) {
                // Land wurde bereits ausgewählt, fahren Sie fort
            //} else if (mouseX-this.offset.x >= this.myX[agno] && mouseX-this.offset.x <= this.myX[agno] + this.width && mouseY-this.offset.y >= this.myY[agno] && mouseY-this.offset.y <= this.myY[agno] + this.height) {
                // Land wurde angeklickt und wird ausgewählt
               // this.selectedCountries[agno] = true;
            //} else {
                // Land wurde nicht ausgewählt und auch nicht angeklickt, fahren Sie fort
            //}
            
        
            // stroke
            push();
            strokeWeight(1);
            ellipse(
                this.myX[agno] + this.offset.x,
                this.myY[agno] + this.offset.y,
                this.mySize[agno] + 2, this.mySize[agno] + 2
            );
            pop();

          
        }

    
    } // end of display




    isThisOverMe() {
        let ifAny = false;

        for (let agno = 0; agno < this.yearsData.length; agno++) {
            let distance = dist(mouseX - this.offset.x, mouseY - this.offset.y, this.myX[agno], this.myY[agno]);

            if (distance < 18) {
                ifAny = true;
            } else {
                ifAny = false;
            }
            this.isOverMe[agno] = ifAny;
            
        }

        
    };

   
    //Select von Nina
    releasedOverMe () {
        let ifAnyS = true;

        for (let agno = 0; agno < this.yearsData.length; agno++) {
            let distanceS = dist(mouseX - this.offset.x, mouseY - this.offset.y, this.myX[agno], this.myY[agno]); // added offset.x and y

            if (distanceS < 20) {
                ifAnyS = false;
            } else {
                ifAnyS = true;
            }
            this.selected[agno] = ifAnyS;
            

        if (this.isThisOverMe) this.selected[agno] = !this.selected[agno];
        }
    }
    


//  clickOverMe() {
//      for (let agno = 0; agno < this.myCountry.length; agno++) {
//          let distance = dist(mouseX, mouseY, this.myX[agno], this.myY[agno]);
//          if (distance < 5) this.selected[agno] = !this.selected[agno];
//      }
//  }


} // end of class


