// ***************
// Task 2
// ***************

interface Directors extends Teacher {
  numberOfReports: number;
}

// Example object
const director1: Directors = {
  firstName: 'Jane',
  lastName: 'Smith',
  location: 'Abuja',
  fullTimeEmployee: true,
  numberOfReports: 5,
};

console.log(director1);

