// CODE here for your Lambda Classes
class Person {
  constructor(attrs) {
    this.name = attrs.name;
    this.age = attrs.age;
    this.location = attrs.location;
    this.gender = attrs.gender;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`
  };
}

class Instructor extends Person {
  constructor(iAttrs) {
    super(iAttrs)
    this.specialty = iAttrs.specialty;
    this.favLanguage = iAttrs.favLanguage;
    this.catchPhrase = iAttrs.catchPhrase;
  }
  demo() {
    return `Today we are learning about ${subject}.`
  };
  grade() {
    return `${student.name} recieves a perfect score on ${subject}.`

  };
}

class Student extends Instructor {
  constructor(sAttrs) {
    super(sAttrs)
    this.previousBackground = sAttrs.previousBackground;
    this.className = sAttrs.className;
    this.favSubject = sAttrs.favSubject;
  }
  listsSubjects() {
    return `${favSubject[0]}, ${favSubject[1]}, ${favSubject[2]}`
  };
  PRAssignment() {
    return `${student.name} has submitted a PR for ${subject}.`
  };
  sprintChallenge() {
    return `${student.name} has begun challenge on ${subject}.`
  };
}

class ProjectManager extends Student {
  constructor(pmAttrs) {
    super(pmAttrs)
    this.gradclassName = pmAttrs.gradclassName;
    this.favInstructor = pmAttrs.favinstructor;
  }
  standUp() {
    return `${name} announces to ${channel}, @channel standy time!`
  };
  debugsCode() {
    return `${name} debugs ${student.name}'s code on ${subject}'`
  };
}



const subject = 'JavaScript'

//Instructor

const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`,

});

const bob = new Instructor({
  name: 'Bob',
  location: 'Bedrock',
  age: 28,
  gender: 'male',
  favLanguage: 'Python',
  specialty: 'Back-end',
  catchPhrase: `Never give Up!`
});

//student

const zach = new Student({
  name: 'Zach',
  location: 'Bedrock',
  age: 27,
  gender: 'male',
  favLanguage: 'Python',
  specialty: 'Front-end',
  catchPhrase: `Where are my Pants?`,
  className: 'WebPt5',
  favSubject: [
    'Python',
    'JavaScript',
    'CSS'
  ]
});

const billy = new Student({
  name: 'Billy',
  location: 'Bedrock',
  age: 88,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Get them before the get you!`,
  className: 'CS40',
  favSubject: [
    'Python',
    'JavaScript',
    'CSS'
  ]
});

//ProjectManager

const joe = new ProjectManager({
  name: 'Joe',
  location: 'Bedrock',
  age: 104,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `For the emporer!`,
  gradclassName: 'Web1',
  favInstructor: 'Fred'
});

const micah = new ProjectManager({
  name: 'Fred',
  location: 'Bedrock',
  age: 6,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Waaaagggggahhhhhhh!!!!!`,
  gradclassName: 'Web2',
  favInstructor: 'Bob'
});

console.log(fred.demo());
console.log(fred.grade());
console.log(zach.PRAssignment());