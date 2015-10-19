function dog(name, breed, age) {
  console.log("Generating a beatiful new dog named " + name + " of the breed " + breed + " and the age of " + age + "...")
  this.age = age;
  this.breed = breed;
  this.age = age;
  this.speak = function(){
    console.log("Bark!");
  }
}

var sparky = new dog("sparky", "steppenwolf", 12);

console.log(sparky);
