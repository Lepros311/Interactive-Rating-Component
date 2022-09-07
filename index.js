const submitBtn = document.getElementById("submit-btn");
const choiceButtons = document.querySelectorAll(".choice");
const main1 = document.getElementById("main1");
const main2 = document.getElementById("main2");
const ratingEl = document.getElementById("rating-el");

const choices = [1, 2, 3, 4, 5];
let rating;

// Setting up the buttons with click handlers
choices.forEach(choice => {
  const choiceButton = document.getElementById(`choice-${choice}`);

  choiceButton.addEventListener("click", function handleClick(event) {
    if (choice === rating) return console.log("do nothing!");
    // for (button of choiceButtons) {
    //   button.classList.remove("choice-active");
    // }

    const prevChoiceButton = document.getElementById(`choice-${rating}`);
    if (prevChoiceButton) {
      prevChoiceButton.classList.remove("choice-active");
    }

    choiceButton.classList.add("choice-active");
    rating = choice;
  });
});

submitBtn.addEventListener("click", () => console.log("hello"));

submitBtn.addEventListener("click", () => {
  main1.classList.add("no-display");
  main2.classList.remove("no-display");
  ratingEl.innerHTML = rating;
});
