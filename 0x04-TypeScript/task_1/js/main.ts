//Teacher interface

interface Teacher {
  readonly firstName: string; // cannot be changed after initialization
  readonly lastName: string;  // cannot be changed after initialization
  fullTimeEmployee: boolean;  // always defined
  yearsOfExperience?: number; // optional
  location: string;           // always defined
  [key: string]: any;         // allows additional properties like contract
}

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'Bitrus',
  lastName: 'Dauda',
  location: 'jos',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

