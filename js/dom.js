
const text = document.querySelector("#paragraph");

console.log(text.classList); // ["text", "red", "big", value: "text red big"]

console.log(text.classList.contains("red")); // true

text.classList.remove("big");
console.log(text.classList); // ["text", "red", value: "text red"]

text.classList.add("new-class");
console.log(text.classList); // ["text", "red", "new-class", value: "text red new-class"]

// Can add multiple classes
text.classList.add("a", "b", "c");
console.log(text.classList);

text.classList.toggle("is-hidden"); // will add is-hidden class
text.classList.toggle("is-hidden"); // will remove is-hidden class

// classList has a forEach method
text.classList.forEach(cls => {
  console.log(cls); // text, red, new-class
});

