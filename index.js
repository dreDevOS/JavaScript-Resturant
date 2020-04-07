

// Variables

// console.log('Hello World');
//let name;  // undefined
// console.log(name);

// let name = "Andre"; 
// console.log(name)

// Rules for JavaScript

// cannot be reserved (keywords)
// let x = 'DAndre'                                 // Should be meainingful 
// let 1name = 'pawdie'                             //  cannot start with a number 
// let first-Name; use camelcase  let firstname;    // Cannot contain a hyphen (-)
//  Are case sensenive 


// Copnstants       
// const interestRrate = 0.3;
// interestRate = 1;                                // dont re assign a value to variables when using a constants
// console.log(interestRrate)

// Types    use typeof in console to know the type of variables is used in the script 

// let alias ='ladd';                                // string liuterate 
// let age = 30;                                     // Number Literate
// let isApproved = false;                           // Boolean Literate  
// let firstname = undefined;                        // varibles undefined explicity  
// let selectorColor = null;                         // null explicity to clear values of variables 

// Static Variable 

// let name = 'Andre';

// Refernece Types objects 

// Objects for eg a person 


let person = 
           {                                                                                                     // Objects  person for eg in the real world would have a first name and a occupation 
           
            myName : 'Andre',
            occupation: 'developer',
            age: 30

            };   console.log(person);                                                                              // show object in console in {}  
    

       // Dot Notation                                                                                             // can be used to change property  in the object  
 
           person.myName = ' Dwayne';
           console.log(person.myName);
      
       // Bracket Notation 
           person['myName'] = 'ladd';
           console.log(person.myName);
       
       // Array 

            let selectorColors = ['red', 'blue'];
            selectorColors[2] = 'green';
        // console.log(selectorColors);
        // length property
            console.log(selectorColors.length);

        // Functions    performing a task  
             function greet(name, lastname )                                                                         // variables can be passed in paraenthesis as parameter  
                 {
                console.log('hello '+ name +  ' ' + lastname);                                                      // bevaiour of the function 
                  }
        //  greet('Andre');                                                                                         // statement of the function is the argument 
        //  greet('Palmer');                                                                                        // lastname undefined
       
            greet('Andre', 'palmer');                                                                               // now it is defined
        // Functions calculate a value and return it 

             function square(number) 
                    {
                     return number * number; 
                     }

             let number = square(2);                                                                                  // Cleaner way to write this code 
             console.log(number);
           
             console.log(square(2));                                                                                  // this code cleaner to squre the number in the console 




