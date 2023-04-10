export function getStudentAverage(students) {

  let totalSum = 0;
  let totalStudens = students.length;

  let classStudents = [];

  const calculateAverage = ((sum, count) => Number((sum / count).toFixed(2)));

  for (const student of students) {
    const sumGrades = student.grades.reduce((acum, value) => acum + value, 0);
    const studentAverage = calculateAverage(sumGrades, student.grades.length);

    totalSum += studentAverage;

    const studenData = {
      name: student.name,
      average: studentAverage
    }
    classStudents.push(studenData)
  }
  return {
    classAverage: calculateAverage(totalSum, totalStudens),
    students: classStudents
  };
}


