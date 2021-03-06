const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];

  //1
const getStudentsSubjects = (students) =>{
   const subjectsOfStudent = Object.keys(students.subjects);
     return subjectsOfStudent.map(sub => sub.charAt(0).toUpperCase() + sub.slice(1).replace('_', ' ').toLowerCase()  )
    } ;
    document.writeln(`<p> №1:  ${getStudentsSubjects(students[0])}</p>`);
    //2 
    const getAverageMark = (students) =>{
      const getStudentsMark = Object.values(students.subjects).flat();
      const getStudentsAverageMarks = getStudentsMark.reduce((a, b) => Math.floor(a + b),  0) / getStudentsMark.length;
      return getStudentsAverageMarks.toFixed(2);
    };

document.writeln(`<p> №2:  ${getAverageMark(students[0])}</p>`)
   //3
   const getStudentInfo = (students) => {
  
    const {name, course} = students;
    return {name, course, averageMark: getAverageMark(students)}
     
    
    };
    console.log(getStudentInfo(students [0]));
document.writeln(`<p> №3: Результат в console </p>`)

//4
const getStudentsNames = (students) => students.map((stNames) => stNames.name).sort();
document.writeln(`<p> №4:  ${(getStudentsNames(students))}</p>`);

//5

  const marksOfStudent = (st) => st.map((elem) => Number(getAverageMark(elem)));
  getBestStudent = (st) => students[marksOfStudent(st).indexOf(Math.max(...(marksOfStudent(st))))].name;
document.writeln(`№5: ${(getBestStudent(students))}`)


//6

const calculateWordLetters = (word) =>{
  let getResult = {};
    for(const letter of word){
      let letters = letter.toLowerCase();
      getResult[letters] = !getResult[letters] ? 1 : getResult[letters]+1;
     
    };
  
    return getResult 
    
}
console.log(calculateWordLetters('Test'))
document.writeln(`<p> №6:  Результат в console </p>`)
