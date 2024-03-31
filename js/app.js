/*-------------------------------- Constants --------------------------------*/
import { getRandomComparisonQuote, getRandomImpostorSyndromeQuote } from "../data/quotes.js"


/*-------------------------------- Variables --------------------------------*/
const comparisonQuotes = []
const impostorSyndromeQuotes = []
const acceptanceQuotes = []
const selfLoveQuotes = []
// variable used to store support category user clicks
let supportCategory = ""

/*------------------------ Cached Element References ------------------------*/
//light dark mode
const dayNightBtn = document.getElementById("day-night-mode")

const landingContainer = document.querySelector(".landing-container")
const supportBtn = document.getElementById("support-button")
const choiceContainer = document.querySelector(".choice-container")
const quoteContainer = document.querySelector(".quote-container")


const comparisonBtn = document.getElementById("comparison")
const impostorSyndromeBtn = document.getElementById("impostor-syndrome")
const quoteText = document.getElementById("quote")
const nextBtn = document.getElementById("next")
const otherBtn = document.getElementById("other")
const homeBtn = document.getElementById("home")


/*----------------------------- Event Listeners -----------------------------*/
dayNightBtn.addEventListener('click', () => {
  document.body.classList.toggle("night-mode");
  //classList property can be modified using toggle() method
  console.log("night-mode")
})
supportBtn.addEventListener("click", reflectChoiceContainer)
otherBtn.addEventListener("click", reflectChoiceContainer)
comparisonBtn.addEventListener("click", randomComparisonQuote)
impostorSyndromeBtn.addEventListener("click", randomImpostorSyndromeQuote)
homeBtn.addEventListener("click", init)
nextBtn.addEventListener("click", handleSupportCategory)
// nextBtn.addEventListener("click", )

/*-------------------------------- Functions --------------------------------*/
//day night mode function per shake-it-off lesson

function handleSupportCategory() {
console.log(supportCategory)
 switch (supportCategory) {
  case "comparison":
    randomComparisonQuote();
    break;
  case "impostor syndrome": 
    randomImpostorSyndromeQuote()
    break;
    default:
    init() 
 }
}

init();

function init() {
  landingContainer.style.display = ""
  supportBtn.style.display = ""
  choiceContainer.style.display = 'none'
  quoteContainer.style.display = 'none'
  // nextBtn.style.display = "none"
  // otherBtn.style.display = "none"
  // homeBtn.style.display = "none"
} 

// supportBtn & otherBtn is clicked -> choiceContainer appears
function reflectChoiceContainer() {
  landingContainer.style.display = "none"
  supportBtn.style.display = "none"
  choiceContainer.style.display = ""
  quoteContainer.style.display = "none"
  // nextBtn.style.display = "none"
  // otherBtn.style.display = "none"
  // homeBtn.style.display = "none"
  }

//comparison quote rendered 
function randomComparisonQuote() {
  landingContainer.style.display = "none"
  supportBtn.style.display = "none"
  choiceContainer.style.display = "none"
  quoteContainer.style.display = ""
  // nextBtn.style.display = ""
  // otherBtn.style.display = ""
  // homeBtn.style.display = ""
  supportCategory = "comparison"
  console.log(supportCategory)
  quoteText.textContent = getRandomComparisonQuote().quote
}

//impostor syndrome quote rendered
function randomImpostorSyndromeQuote () {
  landingContainer.style.display = "none"
  supportBtn.style.display = "none"
  choiceContainer.style.display = "none"
  quoteContainer.style.display = ""
  // nextBtn.style.display = ""
  // otherBtn.style.display = ""
  // homeBtn.style.display = ""
  supportCategory = "impostor syndrome"
  console.log(supportCategory)
  quoteText.textContent = getRandomImpostorSyndromeQuote().quote
}

// next  function that when clicked, renders next random car dependent on current state category
// function handleNextQuote() {
//   if (evt.target.classList === "comparison") {
//     getRandomComparisonQuote().quote
//   } else if 

// }

// - **Render a game in the browser**. You may not use Canvas or jQuery.
// - **Include win/loss logic and render win/loss messages in HTML.**
// - Include separate HTML, CSS, JavaScript, and JavaScript data files organized in an appropriate directory structure.
// - Game must have reset functionality that does not reload the page in the browser.
// - Include functionality specific to your game as specified in square brackets in the Recommended Games section below, or as discussed with your instructor if building a game not on the Recommended Games list.