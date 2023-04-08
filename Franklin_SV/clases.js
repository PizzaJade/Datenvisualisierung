class Clases {
    constructor() {
        this.myCountry = [];
        this.yearsData = [];

        this.myX = [];
        this.myY = [];
        this.mySize = [];
        this.myColor = [];

        this.overMe = [];
        this.selected = [];
        this.selectedAgno = 0;
        this.isYearSelected = false;

        this.myWidth = [];
        this.isOverMe = [];

        this.offset = {
            x: width / 2 + 300,
            y: height / 2
        }

        this.myYears = ["2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"];
        this.specialX= 1190;
        this.specialY= 702; 
    }

    // kann zu den CSV-Dateien zugreifen mit arrays 
    calculate() {
        // this.myCountry = myCountry;
        for (let agno = 0; agno < this.yearsData.length; agno++) {
            this.myX[agno] = random(0, width);
            this.myY[agno] = random(0, height);
            this.mySize[agno] = random(5, 50);
            this.myColor[agno] = color(random(0, 255), random(0, 255), random(0, 255));
            this.overMe[agno] = false;
            this.selected[agno] = false;
            this.myWidth[agno] = 0;
            this.isOverMe[agno] = false;
        }
    }


    display(showThis) {

       this.isThisOverMe();

        for (let agno = 0; agno < this.yearsData.length; agno++) {
            // basic display
            if (showThis) {
                fill(this.myColor[agno]);
            } else {
                noFill();
            }
             //Füllfarbe von Circle
             noStroke();
             ellipse(
                this.myX[agno] + this.offset.x,
                this.myY[agno] + this.offset.y,
                this.mySize[agno], this.mySize[agno]
            );
           
            // hover display
            if (this.isOverMe[agno]) {
                
                fill("lightgray");
                textSize(18);
                text("year: " + this.myYears[agno],
                    this.myX[agno] + this.offset.x-110, //-150 x Richtung 
                    this.myY[agno] + this.offset.y
                );
                textSize(18);
                text("rape: "+ this.yearsData[agno],
                    this.myX[agno] + this.offset.x-110,
                    this.myY[agno] + 30 + this.offset.y
                );
                textSize(30);
                
                text(this.myCountry,  //this.myYears[agno]
                this.specialX,
                this.specialY,
                 );

                //Circle Stroke
                noFill();
                stroke("blue");
                strokeWeight(2);
                ellipse(
                this.myX[agno] + this.offset.x,
                this.myY[agno] + this.offset.y,
                this.mySize[agno] + 5, this.mySize[agno] + 5);
            }

            if (this.isYearSelected){
                noFill();
                stroke(200);
                strokeWeight (1);
                
                ellipse(
                    this.myX[agno] + this.offset.x,
                    this.myY[agno] + this.offset.y,
                    this.mySize[agno], this.mySize[agno]);
                if(agno === this.selectedAgno){
                    strokeWeight (4);
                    stroke (0,100,50);
                    ellipse(
                        this.myX[agno] + this.offset.x,
                        this.myY[agno] + this.offset.y,
                        this.mySize[agno] + 5, this.mySize[agno] + 5);
                }
            }

        } // end cicle "for" years

    } // end of display



    // 
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


    releasedOverMe () {
        if (this.isOverMe){
            for (let agno = 0; agno < this.yearsData.length; agno++) {
                if (this.isOverMe[agno]){
                    this.selectedAgno = agno;
                    this.isYearSelected = !this.isYearSelected;
                }
            }
        }
    }

} // end of class



/* Name von JS Datei muss noch geaendert werden */