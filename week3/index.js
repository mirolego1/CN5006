//function Employeeinfo
function EmployeeInfo(name,Salary)
{
console.log("welcome " +name+ " your monthly salary is " +Salary)
}

console.log("this is my first program")

var EmpName="John"
var EmpSalary= 5000

EmployeeInfo(EmpName,EmpSalary)
// code for second excercise
const EmpSkills=(skills)=> {
    console.log("Expert in " +skills)
}
EmpSkills("java")

const student= require('./StudentInfo')
const person= require('./Person')
// because getName is the function we use ()
console.log("Student Name:" +student.getName())
console.log(student.Location())
console.log(student.dob)
// because dob is a variable we dont use ()
console.log(student.StudentGrade())
console.log("grade is" +student.StudentGrade(55))
// create new person
person1 = new person("Jim","USA","myemail@gmail.com")
console.log("using Person Module",person1.getPersonInfo())
console.log("Program Ended")