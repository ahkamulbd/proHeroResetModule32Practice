const student = {
    name: 'Kolim Uddin',
    age: 15,
    class: 'Ten',
    marks: {
        Math: 78,
        Physics: 89,
        Chemistry: 65
    }
}

const marks = student.marks;
//console.log(marks);
const mathMarks = student.marks.Math;
//console.log(mathMarks);
const chemistry = student['marks']['Chemistry'];
//console.log(chemistry);

const subject = 'Math';
const subjectMarks = subject.marks[student];
console.log(subjectMarks);