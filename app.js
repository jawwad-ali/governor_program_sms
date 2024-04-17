#! /usr/bin/env node
import inquirer from "inquirer";
import { v4 as uuidv6 } from "uuid";
const adminEmail = "admin@gmail.com";
const adminPass = "123";
let fees = 1000;
// Student Record
const DUMMY_DATA = [
    {
        id: Math.floor(Math.random() * 100).toString(),
        student_name: "Akram",
        age: 22,
        email: "akram@gmail.com",
        roll_number: 89319,
        course_name: "GIAIC",
        time: "9:00AM - 12.00PM",
        day: "Monday",
        fees: true
    },
    {
        id: uuidv6(),
        student_name: "Junaid",
        age: 40,
        email: "junaid@yahoo.com",
        roll_number: 45529,
        course_name: "GIAIC",
        time: "2:00PM - 5.00PM",
        day: "Thursday",
        fees: true
    },
    {
        id: "20",
        student_name: "Suneel",
        age: 35,
        email: "suneel@gmail.com",
        roll_number: 52059,
        course_name: "GIAIC",
        time: "7:00PM - 10.00PM",
        day: "Sunday",
        fees: false
    },
];
// Select Role (Student - Teacher)
const role = await inquirer.prompt([
    { message: "Enter your Role", type: "list", name: "role", choices: ["Admin", "Student"] }
]);
// Admin Role
if (role.role == "Admin") {
    const admin = await inquirer.prompt([
        {
            message: "Enter your Email", type: "text", name: "admin_email"
        },
        {
            message: "Enter your Password", type: "password", name: "admin_password", mask: "*"
        }
    ]);
    if (admin.admin_email == adminEmail && admin.admin_password == adminPass) {
        DUMMY_DATA.forEach(element => {
            element.age,
                element.email,
                element.roll_number,
                element.course_name,
                element.time,
                element.day,
                element.fees;
            console.log(element);
        });
    }
}
// Student Role
else {
    const student = await inquirer.prompt([
        { message: "Enter your Name", type: "input", name: "student_name" },
        { message: "Enter your Age", type: "number", name: "student_age" },
        { message: "Enter your Email", type: "text", name: "student_email" },
        {
            message: "Select your time", type: "list", name: "time",
            choices: ["9:00AM - 12.00PM", "2:00PM - 5:00PM", "7:00PM - 10:00PM"]
        },
        {
            message: "Select your day", type: "list", name: "day",
            choices: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sat", "Sun"]
        },
        {
            message: "Pay your fees", type: "input", name: "fees"
        },
        {
            message: "Enter your Password", type: "password", name: "student_password", mask: "*",
            // validate: function(input: string) {
            //     if (input.length < 6) {
            //         return "Password must be at least 6 characters long"
            //     } else {
            //         return true
            //     }
            // }
        },
    ]);
    // Generates a student card like on Governor Portal
    let student_detail = ` 
        Name: ${student.student_name} \n 
        Age: ${student.student_age} \n 
        Email: ${student.student_email} \n 
        Password: ${student.student_password} \n 
        Roll Number: 0089319 \n 
        Course Name: GIAIC \n 
        Time: ${student.time} \n 
        Day: ${student.day} 
    `;
    // Fees should be 1000
    if (student.fees != fees) {
        console.log(`Your fees is ${fees} rupees Please enter the correct amount`);
    }
    // Validation that user should enter valid values not empty values.
    else if ((student.student_name && student.student_age, student.student_email && student.student_password).length > 1) {
        console.log("You are Successfully Enrolled!!");
        console.log(student_detail);
    }
    else {
        console.log("Please fill the form correctly");
    }
}
