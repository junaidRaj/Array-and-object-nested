const Subject = {
    Profile : {
        name:"Abc",
        Fathername:"Xyz",
        Age : 18,
    },
    Adress : {
          Home:"MyHome",
          City:"Karachi",
          Country:"Pakistan",
    }
}
let SubjectOne = {...Subject.Profile};
let SubjectTwo = {...Subject.Adress};

console.log(SubjectOne);
console.log(SubjectTwo);

arr = [
        ["name","Class","RollNo"],
        ["xyz","10","1105"],
    ];    
    
    let b = [...arr.slice (0,1) ];
    b.slice [1, 1];
    console.log(b);
    console.log(arr);