////////////////////////////////
// Easy Going
////////////////////////////////
const logNumbers = () =>{
    for(let i=1; i<21; i++){
        console.log(i);
    }
}
logNumbers();

////////////////////////////////
// Get Even
////////////////////////////////
const getEven = () =>{
   for(let i=0; i<201; i++) {
        if(i % 2 === 0) {
            console.log(i);
        }
   }
}

////////////////////////////////
// Fizz Buzz
////////////////////////////////
const getMyNumbers = () =>{
    let num;
        for(let i=1; i<101; i++){
            num=i;
        
        if(num%3===0 && num%5===0){
            console.log(`FizzBuzz`);
        }
        else if(num%3===0){
            console.log(`Fizz`);
        }
        else if(num%5===0){
            console.log(`Buzz`);
        }
        else {
            console.log(num);
        }
    }
}
getMyNumbers();

////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant",  5000 , "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"];

plantee[2]+=1;
wolfy[3]= 'Gotham City';
dart[3]+= ' Hawkins';
wolfy[0]='Gameboy';
console.log(dart);

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
let turtleNames=['Donatello', 'Lenardo', 'Rapahel', 'Michaelangelo'];
const logNames= () =>{
    for (const names of turtleNames) {
        console.log(names.toUpperCase());
    }
}
logNames();

////////////////////////////////
// Methods, Revisited
////////////////////////////////
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

console.log(favMovies.indexOf('Titanic'));

////////////////////////////////
// Where is Waldo
////////////////////////////////


////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////