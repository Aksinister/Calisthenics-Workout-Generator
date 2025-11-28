function printWorkout(event) {
  event.preventDefault();

  new Typewriter("#printed-workout", {
    strings: ["hello world"],
    autoStart: true,
    delay: 50,
  });
}

let submitForm = document.querySelector("#inputForm");
submitForm.addEventListener("submit", printWorkout);
