

class Clases {
    constructor ( ){
        //this.myCountry = [];
        this.yearsData = [];
        

        this.myX = [];
        this.myY = [];
        this.mySize = [];
        this.myColor = [];



        this.overMe = false;
        this.selected = false;

        this.myWidth =[];
        this.isOverMe = false;
    }

    display (myX, myY) {
    
        var x = 1200;
        var y = 540;
       noStroke();
       //fill(this.myColor);
       ellipse (myX, myY, this.myWidth, -this.mySize);


       let distance = dist(mouseX,mouseY,this.myX, this.myY);
       this.isOverMe =  (distance < this.mySize/2);

       noStroke();
       fill(this.myColor);
       ellipse (this.myX, this.myY, this.mySize, this.mySize);

      if (this.isOverMe) {
          fill (200);
          text(this.myCountry, this.myX, this.myY +15);
          text("total: " + this.yearsData, this.myX, this.myY + 30);
      }
    } // end of display



    // var x = 1200;
    // var y = 540;

    otherFunction (){
        let ifAny = false;
        let x = 1200;
        let y = 540;
        
        for (let agno = 0; agno < this.yearsData.length; agno++) {
           
            let distance = dist(mouseX, mouseY, this.myX[agno], this.myY[agno]);
            if (distance < 50) {
                
                fill(200);
                textSize(24);
                
                text(" Test",  this.myX[agno]+300, this.myY[agno]+600); // To-Do 
                // text( this.myName, this.arrayOfpoints[agno].x, this.arrayOfpoints[agno].y-45);
                // text( this.arrayOfData[agno].x, this.arrayOfpoints[agno].x, this.arrayOfpoints[agno].y-20);
                ifAny = true;
            }
        }
        this.overMe = ifAny;
    }



    isOverMe () {
        let ifAny = false;
        console.log("Testooo");
        for (let agno = 0; agno < this.yearsData.length; agno++) {
            let distance = dist(mouseX, mouseY, this.myX[agno], this.myY[agno]);
            if (distance < 5) {
                fill(200);
                textSize(24);
                text(" Test",  this.myX[agno], this.myY[agno]-70);
                // text( this.myName, this.arrayOfpoints[agno].x, this.arrayOfpoints[agno].y-45);
                // text( this.arrayOfData[agno].x, this.arrayOfpoints[agno].x, this.arrayOfpoints[agno].y-20);
                ifAny = true;
            }
        }
        this.overMe = ifAny;
    };



    clickOverMe () {
        for (let agno = 0; agno < this.myCountry.length; agno++) {
            let distance = dist(mouseX, mouseY, this.myX[agno], this.myY[agno]);
            if (distance < 5) this.selected = !this.selected;
        }
    }

  

}  // end of class



/* Name von JS Datei muss noch geaendert werden */