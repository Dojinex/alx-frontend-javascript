// Extending the Teacher class

// 1. Define the Teacher interface
interface Teacher {
  readonly firstName: string; // cannot be modified after initialization
  readonly lastName: string;  // cannot be modified after initialization
  fullTimeEmployee: boolean;  // always defined
  yearsOfExperience?: number; // optional
  location: string;           // always defined
  [key: string]: any;         // allows additional properties
}

// Example from Task 1
const teacher1: Teacher = {
  firstName: 'Bitrus',
  fullTimeEmployee: false,
  lastName: 'Dauda',
  location: 'Jos',
  contract: false,
};

console.log(teacher1);

// 2. Define Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number; // required attribute
}

// Example usage
const director1: Directors = {
  firstName: 'John',
  lastName: 'David',
  location: 'Lagos',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

