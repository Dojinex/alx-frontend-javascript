// ============================
// 1. Teacher Interface
// ============================

interface Teacher {
  readonly firstName: string;       // readonly - only set during initialization
  readonly lastName: string;        // readonly - only set during initialization
  fullTimeEmployee: boolean;        // required
  yearsOfExperience?: number;       // optional
  location: string;                 // required
  [key: string]: any;               // allows additional properties (e.g., contract)
}

// Example usage:
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: false,
  contract: false,
};

console.log(teacher3);
// Output:
// Object
// contract: false
// firstName: "John"
// fullTimeEmployee: false
// lastName: "Doe"
// location: "London"


// ============================
// 2. Directors Interface (Extends Teacher)
// ============================

interface Directors extends Teacher {
  numberOfReports: number; // new required field
}

// Example usage:
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);
// Output:
// Object
// firstName: "John"
// fullTimeEmployee: true
// lastName: "Doe"
// location: "London"
// numberOfReports: 17


// ============================
// 3. printTeacher Function + Interface
// ============================

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function implementation
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage:
console.log(printTeacher('John', 'Doe')); // J. Doe


// ============================
// 4. StudentClass + Interfaces
// ============================

// Interface for constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface for the class structure
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Class implementation
class StudentClass implements StudentClassInterface {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage:
const student = new StudentClass('Jane', 'Smith');
console.log(student.displayName()); // Jane
console.log(student.workOnHomework()); // Currently working

