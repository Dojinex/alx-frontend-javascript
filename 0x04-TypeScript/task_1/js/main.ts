// Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any; // allows additional attributes
}

// Directors extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Function to print teacher
const printTeacher = (firstName: string, lastName: string): string =>
  `${firstName.charAt(0)}. ${lastName}`;

// Interface describing StudentClass
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Student class
class StudentClass implements StudentClassInterface {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student = new StudentClass('Paul', 'Jerry');
console.log(student.displayName()); // Paul
console.log(student.workOnHomework()); // Currently working


