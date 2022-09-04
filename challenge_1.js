"use strict";
// BMI = mass/(height*height)

// Task to be done
// 1) Store mark's and john's mass and height in variables
// 2) Calculate both their BMIs using the formula
// 3) Create Boolean variable 'markHigherBMI' containg info about whether Mark has a higher BMI than John

// Data -1) Marks weight 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// Data -2) Marks weight 95 kg and is 1.88 m tall, John weights 85 kg and is 1.76 m

// Solution -1
let sl_1 = function(){
    console.log("Solution -1 ");
    let marks_mass = 78;
    let johns_mass = 92;
    let marks_height = 1.69;
    let johns_height = 1.95;

    let marks_BMI = marks_mass/(marks_height*marks_height);
    let johns_BMI = johns_mass/(johns_height*johns_height);

    let markHigherBMI = new Boolean(marks_BMI>johns_BMI);
    console.log("Marks BMI "+ marks_BMI);
    console.log("Johns BMI "+ johns_BMI);
    console.log("Mark has higher BMI than John  - "+markHigherBMI);

} 
sl_1();

// Solution -2
let sl_2 = function(){
    console.log("Solution -2 ");
    let marks_mass = 95;
    let johns_mass = 85;
    let marks_height = 1.88;
    let johns_height = 1.76;

    let marks_BMI = marks_mass/(marks_height*marks_height);
    let johns_BMI = johns_mass/(johns_height*johns_height);

    let markHigherBMI = new Boolean(marks_BMI>johns_BMI);
    console.log("Marks BMI "+ marks_BMI);
    console.log("Johns BMI "+ johns_BMI);
    console.log("Mark has higher BMI than John  - "+markHigherBMI);

} 
sl_2();