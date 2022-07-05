//  "dog"  "cat"  "mouse"

const switcher = (animal, age) => {
  switch (animal) {
    case "dog":
      return age === 15 ? console.log("Old Bark") : console.log("Young Bark");
    case "cat":
      return console.log("Meow");
    case "mouse":
      return console.log("Wrip");
    default:
      console.log("Other animal sound");
  }
};

switcher("dog", 10);
