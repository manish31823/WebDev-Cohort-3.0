// classes
 
// Define of A class
class Rectangle {
    constructor(width, height, color) {
         this.width = width;
         this.height = height;
         this.color = color; 
    }
    
    area() {
        const area = this.width * this.height;
          return area;
    }
    
    paint() {
             console.log(`Painting with color ${this.color}`);
    }
    
 }
 
 //craeting a new object of a class
 const rect = new Rectangle(2, 4)//instance of the class
 const area = rect.area();
 console.log(area)




 


