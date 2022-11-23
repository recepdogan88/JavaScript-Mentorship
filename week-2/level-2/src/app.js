import { examResults } from "./data.js";
import { findFirstFailedStudent, checkExamOverNinety, checkAllStudentsOverSixty, showExamsOverAverage } from "./functions.js";

findFirstFailedStudent(examResults);
checkExamOverNinety(examResults);
checkAllStudentsOverSixty(examResults);
showExamsOverAverage(examResults);
 