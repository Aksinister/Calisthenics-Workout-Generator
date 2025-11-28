function printWorkout(response) {
  new Typewriter("#workout", {
    strings: [response.data.answer],
    autoStart: true,
    delay: 50,
  });
}
function generateWorkout(event) {
  event.preventDefault();

  let userInput = document.querySelector("#input");
  let apiKey = "7300c6775obt0415fe6635cd0da0d3fe";
  let context =
    "You make lists of calisthenics workouts.You only suggest exercises that have a focus on the body part that you are given.";
  let prompt = `Please generate a list of no more than 7 calisthenics exercises from this prompt:${userInput.value}.Display the name of each exercise like this: <strong>Squats</strong>: 4 sets of 12 reps.Please make sure to include a <br /> between each line too. Do not anounce anything conversational, simply print the exercise`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let workout = document.querySelector("#workout");
  workout.classList.remove("hide");
  workout.innerHTML = `<span class = "blink">🤔</span> Generating a workout for you that targets the  ${userInput.value} ...`;

  axios.get(apiUrl).then(printWorkout);
}

let submitForm = document.querySelector("#inputForm");
submitForm.addEventListener("submit", generateWorkout);
