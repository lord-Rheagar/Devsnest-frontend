// Quetion 1
var student={
    name : "David Rayy", sclass : "VI", rollno : 12
}

console.log(student.name);
console.log(student.sclass);
console.log(student.rollno);

// Question 2
delete student.rollno
console.log(student)


//Question 3
var student = { 
    name : "David Rayy",
     sclass : "VI",
      rollno : 12
     }; 
console.log((Object.keys(student).length))


// Question 4
var library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true },
    { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, 
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]; 

for(var i=0;i<library.length;i++)
{
    console.log(library[i].author)
    console.log(library[i].title)
    console.log(library[i].readingStatus)

}


// Question 5

class cylinder{
    constructor(radius,height){
    this.radius=radius;
    this.height=height;

    }
   
    volume(){
        console.log(22/7* this.radius *this.radius * this.height);
    }

}

let cyli=new cylinder(40,44);
cyli.volume();



// Question 6

var library = [ 
    { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 },

    { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 },

   { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }];


 library.sort(function(a,b){
     return b.libraryID-a.libraryID
 }); 

 console.log(library)

   







