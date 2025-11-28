function printWorkout(response) {
  new Typewriter("#printed-workout", {
    strings: [response.data.answer],
    autoStart: true,
    delay: 50,
  });
}
function generateWorkout(event) {
  event.preventDefault();

  let prompt = `Please generate a list of no more than 4 calisthenics exercises from this prompt:${input} . You must check whether or not the exercises you choose are related to the prompt.Display the name of each exercise like this: <strong>Squats</strong>: 4 sets of 12 reps.Please make sure to include a <br /> between each line too. Do not anounce anything conversational, simply print eh exercise`;
  let context =
    "You make lists of calisthenics workouts.You only suggest exercises that have a focus on the body part that you are given.";
  let apiKey = "7300c6775obt0415fe6635cd0da0d3fe";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(printWorkout);
}

let submitForm = document.querySelector("#inputForm");
submitForm.addEventListener("submit", generateWorkout);
