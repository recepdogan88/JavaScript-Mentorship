const findFirstFailedStudent = (pExamResults) => {
  const firstFailedStudent = pExamResults.find((exam) => exam < 70);
  console.log(`1. First failed Student's exam: ${firstFailedStudent}`);
};

const checkExamOverNinety = (pExamResults) => {
  const result = pExamResults.some((exam) => exam >= 90);
  console.log(`2. Are there any students whose exam is over 90?: ${result}`);
};

const checkAllStudentsOverSixty = (pExamResults) => {
  const result = pExamResults.every((exam) => exam >= 60);
  console.log(`3. Are all students exam over 60?: ${result}`);
};

const showExamsOverAverage = (pExamResults) => {
  const examAverage = pExamResults.reduce((a, b) => a + b) / pExamResults.length;
  console.log("4. Above-average student grades:");
  const examsOverAverage = pExamResults
    .filter((exam) => exam >= examAverage)
    .map((studentExam, index) => console.log(`Above average grade of ${index}. student ${studentExam}`));
};

export { findFirstFailedStudent, checkExamOverNinety, checkAllStudentsOverSixty, showExamsOverAverage };
