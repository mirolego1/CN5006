const dateofbirth= "12/12/1980"

const getStudentName = ()=>
{
    return "Write your name here"
}
const getCampusName = ()=>
{
    return ("UEL Campus")
}
// exporting modules and variables outside the module
exports.getName=getStudentName
exports.Location=getCampusName
exports.dob=dateofbirth
//how to export functions with parameters
exports.StudentGrade=(marks)=>
{
    if (marks>50 && marks <70) return ("B grade")
        else
    return("A grade")
}

