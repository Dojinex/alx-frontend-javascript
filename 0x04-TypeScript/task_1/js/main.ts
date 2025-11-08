// Extending the Teacher class

interface Teacher {
  firstName: string;
  lastName: string;
  location: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'Bitrus',
  lastName: 'Dauda',
  location: 'Jos',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

