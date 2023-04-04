

class Clases {
    constructor ( ){
        this.myCountry = "NaN";
        this.yearsData = [];

        this.myColor = (160);
        

        this.myX = [];
        this.myY = [];
        this.mySize = [];
        this.myWidth =[];
        this.isOverMe = false;
    }

    display (myX, myY) {
    
       
       noStroke();
       fill(this.myColor);
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

  

}  // end of class



/* Name von JS Datei muss noch geaendert werden */