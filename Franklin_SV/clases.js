class Clases {
    constructor() {
        //this.myCountry = [];
        this.yearsData = [];


        this.myX = [];
        this.myY = [];
        this.mySize = [];
        this.myColor = [];



        this.overMe = [];
        this.selected = [];

        this.myWidth = [];
        this.isOverMe = [];

        this.offset = {
            x: width / 2 + 300,
            y: height / 2

        }
    }

    setup() {
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



    display(myX, myY) {

        noStroke();

        this.isThisOverMe();

        for (let agno = 0; agno < this.yearsData.length; agno++) {
            
            // fill
            fill(this.myColor[agno]);

            if (this.isOverMe[agno]) {
                fill(200);
                text(this.myCountry,
                    this.myX[agno] + this.offset.x,
                    this.myY[agno] + 30 + this.offset.y
                );
                text("total: " + this.yearsData,
                    this.myX[agno] + this.offset.x,
                    this.myY[agno] + 30 + this.offset.y
                );
            }

            ellipse(
                this.myX[agno] + this.offset.x,
                this.myY[agno] + this.offset.y,
                this.mySize[agno], this.mySize[agno]
            );

            // stroke
            push();
            noFill();
            stroke(255);
            strokeWeight(2);
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

            if (distance < 50) {
                ifAny = true;
            } else {
                ifAny = false;
            }
            this.isOverMe[agno] = ifAny;
        }
    };



    clickOverMe() {
        for (let agno = 0; agno < this.myCountry.length; agno++) {
            let distance = dist(mouseX, mouseY, this.myX[agno], this.myY[agno]);
            if (distance < 5) this.selected = !this.selected;
        }
    }



} // end of class



/* Name von JS Datei muss noch geaendert werden */