// ============================
// Task 5: Advanced Types Part 1
// ============================

// 1️⃣ Interfaces
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// 2️⃣ Classes implementing the interfaces
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// 3️⃣ Function to create employee based on salary
function createEmployee(salary: number | string): Director | Teacher {
  if ((typeof salary === 'number' && salary < 500) || salary === '$499') {
    return new Teacher();
  }
  return new Director();
}
