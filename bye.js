"use strict";
let stuff = "cotne";

if (stuff == "nica") {
    console.log("hey nica");
} else if (stuff == "shako") {
    console.log("what up shako");
} else {
    alert("oops");
}

switch(stuff) {
    case "nica":
    console.log("hello nica");
    break;
    case "shako":
    console.log("shako");
    break;
    default:
    console.log("OOPS");
}

//use strict
let a = 4;

console.log(a);

let numberperson = Number(prompt("enter your phone number"));
console.log(numberperson);
console.log(typeof numberperson);

if (numberperson % 2 == 0) {
    console.log("this number is uhh luwi");
} else {
    console.log("this number is kenti");
}


//ARRAY

let usersonthesite = ["first user", "seconduser", "thirduser"];
                          //0            1             2

console.log(usersonthesite[0][2]);

// the object.

let information = {
    username: "cotne",
    age: 15,
    isonline: true
}

console.log(information.isonline);

console.log(information["age"])

let userinfo2 = {
    username: "COTNE",
    age: 13,
    userstatus: false,
    phone: {
        countrycode: +995,
        number: 593053861,
    },
    hobbies: ["programming", "read", "dancing"],
};

console.log(userinfo2["hobbies"][""]);

let teacherinformation = {
    name: "luiza",
    age: 52
}

teacherinformation.age = 53;
teacherinformation.gender = "female";
delete teacherinformation.age;
console.log(teacherinformation);

//loop - cycle
let somenumbers = [500, 25, 21, 15, 31];
for (let i = 0; i < somenumbers.length; i++) {
    console.log(somenumbers[i])
}

//for modern
for (let item of somenumbers) {
    console.log(item);
}

//for in

for (let key in somenumbers) {
    console.log(key);
}

//while loop

let x = 0;
while (x < somenumbers.length) {
    console.log(somenumbers[x]);
    x++;
}

for (let i = 0; i < somenumbers.length; i++) {
    const element = somenumbers[i];
    if (element < 10) {
        console.log(element);
    }
}

for (let newelement of somenumbers) {
    if (newelement < 10) {
        console.log(newelement);
    }
}

let C = 0;

while (C < 11) {
    console.log(C);
    C++
    if (C == 5) {
        break;
    }
}

let anynumber = [10,30,20,60]

for(let itemarray of anynumber) {
    if (itemarray == 60) {
        break;
    }
    console.log(itemarray)
}