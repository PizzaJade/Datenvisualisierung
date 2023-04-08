class Clases2 {
    constructor() {
        this.myCountryA = [];
        this.yearsDataA = [];

        this.myXA = [];
        this.myYA = [];
        this.mySizeA = [];
        this.myColorA = [];

        this.overMeA = [];
        this.selectedA = [];
        this.selectedagnoA = 0;
        this.isYearSelectedA = false;

        this.myWidthA = [];
        this.isOverMeA = [];

        this.offsetA = {
            xA: width / 2 + 300,
            yA: height / 2
        }

        this.myYearsA = ["2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"];
        this.specialXA= 1190;
        this.specialYA= 702; 
    }

    // kann zu den CSV-Dateien zugreifen mit arrays 
    calculate() {
        // this.myCountry = myCountry;
        for (let agnoA = 0; agnoA < this.yearsDataA.length; agnoA++) {
            this.myXA[agnoA] = random(0, width);
            this.myYA[agnoA] = random(0, height);
            this.mySizeA[agnoA] = random(5, 50);
            this.myColorA[agnoA] = color(random(0, 255), random(0, 255), random(0, 255));
            this.overMeA[agnoA] = false;
            this.selectedA[agnoA] = false;
            this.myWidthA[agnoA] = 0;
            this.isOverMeA[agnoA] = false;
        }
    }


    display(myXA, myYA) {

       this.isThisOverMeA();

        for (let agnoA = 0; agnoA < this.yearsDataA.length; agnoA++) {
            // basic display
            fill(this.myColorA[agnoA]);
             //Füllfarbe von Circle
             noStroke();
             ellipse(
                this.myXA[agnoA] + this.offsetA.xA,
                this.myYA[agnoA] + this.offsetA.yA,
                this.mySizeA[agnoA], this.mySizeA[agnoA]
            );
           
            // hover display
            if (this.isOverMeA[agnoA]) {
                
                fill("lightgray");
                textSize(18);
                text("year: " + this.myYearsA[agnoA],
                    this.myXA[agnoA] + this.offsetA.xA-110, //-150 x Richtung 
                    this.myYA[agnoA] + this.offsetA.yA
                );
                textSize(18);
                text("assault: "+ this.yearsDataA[agnoA],
                    this.myXA[agnoA] + this.offsetA.xA-110,
                    this.myYA[agnoA] + 15 + this.offsetA.yA
                );
                textSize(30);
                
                text(this.myCountryA,  //this.myYears[agnoA]
                this.specialXA,
                this.specialYA,
                 );

                //Circle Stroke
                noFill();
                stroke("blue");
                strokeWeight(2);
                ellipse(
                this.myXA[agnoA] + this.offsetA.xA,
                this.myYA[agnoA] + this.offsetA.yA,
                this.mySizeA[agnoA] + 5, this.mySizeA[agnoA] + 5);
            }

            if (this.isYearSelectedA){
                noFill();
                stroke(200);
                strokeWeight (1);
                
                ellipse(
                    this.myXA[agnoA] + this.offsetA.xA,
                    this.myYA[agnoA] + this.offsetA.yA,
                    this.mySizeA[agnoA], this.mySizeA[agnoA]);
                if(agnoA === this.selectedagnoA){
                    strokeWeight (4);
                    stroke (0,100,50);
                    ellipse(
                        this.myXA[agnoA] + this.offsetA.xA,
                        this.myYA[AagnoA] + this.offsetA.yA,
                        this.mySizeA[agnoA] + 5, this.mySizeA[agnoA] + 5);
                }
            }

        } // end cicle "for" years

    } // end of display



    // 
    isThisOverMeA() {
        let ifAnyA = false;
        for (let agnoA = 0; agnoA < this.yearsDataA.length; agnoA++) {
            let distance = dist(mouseX - this.offsetA.xA, mouseY - this.offsetA.yA, this.myXA[agnoA], this.myYA[agnoA]);
            if (distance < 18) {
                ifAnyA = true;
            } else {
                ifAnyA = false;
            }
            this.isOverMeA[agnoA] = ifAnyA;
        }
    };


    releasedOverMeA () {
        if (this.isOverMeA){
            for (let agnoA = 0; agnoA < this.yearsData.length; agnoA++) {
                if (this.isOverMeA[agnoA]){
                    this.selectedagnoA = agnoA;
                    this.isYearSelectedA = !this.isYearSelectedA;
                }
            }
        }
    }

} // end of class



/* Name von JS Datei muss noch geaendert werden */