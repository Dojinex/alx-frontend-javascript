//Teacher interface

interface Teacher {
  readonly firstName: string; // cannot be changed after initialization
  readonly lastName: string;  // cannot be changed after initialization
  fullTimeEmployee: boolean;  // always defined
  yearsOfExperience?: number; // optional
  location: string;           // always defined
  [key: string]: any;         // allows additional properties like contract
}

// Example usage
const teacher1: Teacher = {
  firstName: 'Bitrus',
  fullTimeEmployee: false,
  lastName: 'Dauda',
  location: 'Jos',
  contract: false,
};

console.log(teacher1);

