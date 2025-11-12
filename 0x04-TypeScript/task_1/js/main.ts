// Interface for the function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function implementation
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

// Example usage
console.log(printTeacher("John", "Doe")); // Output: John Doe
console.log(printTeacher("Jane", "Smith")); // Output: Jane Smith

