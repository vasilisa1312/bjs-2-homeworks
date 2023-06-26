function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

new Student("Игорь", "Male", 21)
new Student("Полина", "Female", 20)
new Student("Оксана", "Female", 23)


Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if(this.marks !==undefined){
    this.marks.push(...marks);
  }
}

Student.prototype.getAverage = function () {
    let sum = 0;
    for(let i = 0; i < this.marks.length; i++) {
    sum += this.marks[i];
  }
  let result = sum/this.marks.length;
  if (isNaN(result)) {
    return 0;
  }else {
  return result;
  }
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}


let student1 = new Student("Василиса", "женский", 19);
student1.setSubject("Algebra");
console.log(student1.getAverage());
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage())
let student2 = new Student("Артём", "мужской", 25);
student2.setSubject("Geometry");
student2.exclude('плохая учёба')
console.log(student2)