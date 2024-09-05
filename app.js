let x = null
let y = undefined
x = `"sdfghj \n${"hjkjhg"}`
if (x === y)
{alert("yehhh")}
console.log(x);
const person = {
   name : "",
   id  : 0,
   year : 0,
   isEnrolled :false
}

const { object } = require("zod");

// let students = []

function createStudent(id,name,year,isEnrolled){
    let newStudent = Object.create(person);
    newStudent.id = id;
    newStudent.name = name;
    newStudent.year = year;
    newStudent.isEnrolled = isEnrolled;
    return newStudent;
}

function push(person){
    students[students.length +1] = person
}

let studet1 = createStudent(1,"shmuel",5,true)
push(studet1)
console.log(students);

const students = [
    {
      id: 1,
      fullName: "Moshe Goldberg",
      age: 20,
      degree: "Computer Science",
      grades: [85, 92, 78, 95, 88],
      isPaid: true,
      enrollmentDate: new Date("2021-09-01")
    },
    {
      id: 2,
      fullName: "Rachel Shapiro",
      age: 22,
      degree: "Biology",
      grades: [76, 88, 92, 79, 85],
      isPaid: false,
      enrollmentDate: new Date("2020-09-01")
    },
    {
      id: 3,
      fullName: "Avi Cohen",
      age: 21,
      degree: "Psychology",
      grades: [90, 85, 88, 92, 79],
      isPaid: true,
      enrollmentDate: new Date("2021-01-15")
    },
    {
      id: 4,
      fullName: "Sarah Levy",
      age: 19,
      degree: "Engineering",
      grades: [95, 88, 92, 97, 91],
      isPaid: true,
      enrollmentDate: new Date("2022-09-01")
    },
    {
      id: 5,
      fullName: "David Friedman",
      age: 23,
      degree: "Business Administration",
      grades: [82, 78, 85, 80, 88],
      isPaid: false,
      enrollmentDate: new Date("2019-09-01")
    },
    {
      id: 6,
      fullName: "Esther Rosenbaum",
      age: 20,
      degree: "Nursing",
      grades: [88, 92, 85, 90, 87],
      isPaid: true,
      enrollmentDate: new Date("2021-09-01")
    },
    {
      id: 7,
      fullName: "Yakov Stern",
      age: 22,
      degree: "Physics",
      grades: [91, 95, 88, 93, 89],
      isPaid: true,
      enrollmentDate: new Date("2020-09-01")
    },
    {
      id: 8,
      fullName: "Miriam Katz",
      age: 21,
      degree: "English Literature",
      grades: [87, 82, 90, 85, 88],
      isPaid: false,
      enrollmentDate: new Date("2021-01-15")
    },
    {
      id: 9,
      fullName: "Eli Bernstein",
      age: 20,
      degree: "Chemistry",
      grades: [89, 93, 86, 91, 88],
      isPaid: true,
      enrollmentDate: new Date("2022-09-01")
    },
    {
      id: 10,
      fullName: "Leah Weiss",
      age: 22,
      degree: "Economics",
      grades: [84, 88, 92, 79, 86],
      isPaid: false,
      enrollmentDate: new Date("2020-09-01")
    }
  ];



  function average(listNum){
    let ave = 0;
    let index = 0;
    for (let item of listNum){
        ave += item
        index +=1
    }
    return ave/index
  }

function GetAverge(){
   for (let i = 0 ; i < students.length; i ++)
    console.log(students[i].fullName,average(students[i].grades));
}
//GetAverge()
function isPaid(){
    let pay = 0
    for (let index = 0; index < students.length; index++) {
        if (students[index].isPaid){
            pay++
        }

    }
    console.log(`${pay} students paeid; ${students.length - pay} not paied`);
}
const bb = students.filter(a => a.isPaid == true)
const cc = students.map(function(a) {return{...a ,fullName:"Mr" + a.fullName}})
const dd = students.reduce(function(sum ,curr){ curr.isPaid ? sum.paid ++ : sum.notPaid++ ;return sum},{paid:0,notPaid:0} )
//isPaid()
console.log(dd);

