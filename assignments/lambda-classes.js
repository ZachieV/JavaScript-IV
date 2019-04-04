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
  }
}

class Instructor extends Person {
  constructor(iAttrs) {
    this.specialty = iAttrs.specialty;
    this.favLanguage = iAttrs.favLanguage;
    this.catchPhrase = iAttrs.catchPhrase;
  }
  demo() {

  }
}