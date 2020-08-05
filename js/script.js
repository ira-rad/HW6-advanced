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
     return subjectsOfStudent.map(sub => sub.charAt(0).toUpperCase() + sub.slice(1).replace('_', ' ')  )
    } 
    document.writeln(`<p> №1:  ${getStudentsSubjects(students[0])}</p>`)
    //2 
    const getAverageMark = (students) =>{
      const getStudentsMark = Object.values(JSON.parse(JSON.stringify(students.subjects))).flat();
      const getStudentsAverageMarks = getStudentsMark.reduce((a, b) => Math.floor(a + b),  0) / getStudentsMark.length;
      return getStudentsAverageMarks.toFixed(2);
    }

document.writeln(`<p> №2:  ${getAverageMark(students[0])}</p>`)
   //3
   const getStudentInfo = (students) => {
     const studentCourse = students.course;
     const studentName = students.name;
  
    return `Course - ${studentCourse}; Name - ${studentName};  Average Mark - ${getAverageMark(students)}`
    
    }

document.writeln(`<p> №3:  ${getStudentInfo(students[0])}</p>`)

//4
const getStudentsNames = (students) => {
  return students.map((stNames) => stNames.name).sort();
}
document.writeln(`<p> №4:  ${(getStudentsNames(students))}</p>`)

//5

const getBestStudent=(students)=>{
  return bestStudent = (getAverageMark(students[0]) > getAverageMark(students[1]) && getAverageMark(students[0]) > getAverageMark(students[2]))? students[0].name :
  (getAverageMark(students[1]) > getAverageMark(students[0]) && getAverageMark(students[1]) > getAverageMark(students[2]) ?  students[1].name :
 students[2].name);
}
document.writeln(`<p> №5:  ${(getBestStudent(students))}</p>`)

//6

const calculateWordLetters = (word) =>{
  let getResult = {};
  
    for(const letter of word){
      let letters = letter.toLowerCase();
      getResult[letters] = !getResult[letters] ? 1 : getResult[letters]+1;
     
    };
    const res = calculateWordLetters()

    return getResult 
    
}
//const res = calculateWordLetters()
//console.log(calculateWordLetters('Test'))
//const res = calculateWordLetters()
document.writeln(`<p> №6:  ${(calculateWordLetters('test'))}</p>`)
// const calculateWordLetters = (word) =>{
//   let result = {};
// word.toString()
//     for(const value of word){
//       let letters = value.toLowerCase().toString();
//       if(result[letters]){
//         result[letters]++;
//       }else{
//         result[letters] = 1;
//       }
//     }
//     return result;
// }

// const calculateWordLetters = (word) => {
// let result = {};
// let letters = word.toLowerCase().split('').forEach( letter =>{
//   if(result[letter]){
//     result[letter] ++;
//   } else {
//     result[letter] = 1;
//   }
//   return result
// })
// }
// for(let letter of word){
// let key = letter.toLowerCase();


// }
// return result
// };


// words.toLowerCase().split('').map(letter =>{
//       result[letter] = !result[letter] ? 1 : result[letter]+1;
//   });
// return result

//document.writeln(`<p> №6:  ${(calculateWordLetters('test'))}</p>`)

// var string = 'Подсчета кол-ва вхождений каждого символа в строке',
//     sums = {};
// string.split('').map(function(e){
//     //e = e.toLowerCase(); - для включения регистронезавимисомти.
//     sums[e] = !sums[e] ? 1 : sums[e]+1;
// });
// document.writeln(`<p> №6:  ${sums}</p>`)