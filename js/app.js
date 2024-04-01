/*-------------------------------- Constants --------------------------------*/
import { getRandomComparisonQuote, getRandomImpostorSyndromeQuote, getRandomAcceptanceQuote, getRandomSelfLoveQuote } from "../data/quotes.js"


/*-------------------------------- Variables --------------------------------*/
const comparisonQuotes = []
const impostorSyndromeQuotes = []
const acceptanceQuotes = []
const selfLoveQuotes = []
// variable used to store support category user clicks
let supportCategory = ""

const riverSound = new Audio('../assets/audio/river.wav')

/*------------------------ Cached Element References ------------------------*/
//light dark mode
const dayNightBtn = document.getElementById("day-night-mode")

const breathingBtn = document.getElementById("exit-breathing-button")
const focusedBreathing = document.getElementById("focused-breathing")

const landingContainer = document.querySelector(".landing-container")
const supportBtn = document.getElementById("support-button")
const choiceContainer = document.querySelector(".choice-container")
const quoteContainer = document.querySelector(".quote-container")


const comparisonBtn = document.getElementById("comparison")
const impostorSyndromeBtn = document.getElementById("impostor-syndrome")
const acceptanceBtn = document.getElementById("acceptance")
const selfLoveBtn = document.getElementById("self-love")

const nextBtn = document.getElementById("next")
const otherBtn = document.getElementById("other")
const homeBtn = document.getElementById("home")

const quoteText = document.getElementById("quote")


/*----------------------------- Event Listeners -----------------------------*/
dayNightBtn.addEventListener('click', () => {
  document.body.classList.toggle("night-mode");
  //classList property can be modified using toggle() method
  console.log("night-mode")
})

breathingBtn.addEventListener("click", reflectLandingContainer)

supportBtn.addEventListener("click", reflectChoiceContainer)

nextBtn.addEventListener("click", handleSupportCategory)
otherBtn.addEventListener("click", reflectChoiceContainer)
homeBtn.addEventListener("click", reflectLandingContainer)

comparisonBtn.addEventListener("click", randomComparisonQuote)
impostorSyndromeBtn.addEventListener("click", randomImpostorSyndromeQuote)
acceptanceBtn.addEventListener("click", randomAcceptanceQuote)
selfLoveBtn.addEventListener("click", randomSelfLoveQuote)

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
  case "acceptance":
    randomAcceptanceQuote()
    break;
  case "self love":
    randomSelfLoveQuote()
    break;
    default:
    reflectLandingContainer() 
  }
}

init();

function init() {
  focusedBreathing.style.display = ""
  landingContainer.style.display = "none"
  supportBtn.style.display = "none"
  choiceContainer.style.display = "none"
  quoteContainer.style.display = "none"
  // nextBtn.style.display = "none"
  // otherBtn.style.display = "none"
  // homeBtn.style.display = "none"
} 

function reflectLandingContainer() {
  focusedBreathing.style.display = "none"
  landingContainer.style.display = ""
  supportBtn.style.display = ""
  choiceContainer.style.display = "none"
  quoteContainer.style.display = "none"
}

// supportBtn & otherBtn is clicked -> choiceContainer appears
function reflectChoiceContainer() {
  focusedBreathing.style.display = "none"
  landingContainer.style.display = "none"
  supportBtn.style.display = "none"
  choiceContainer.style.display = ""
  quoteContainer.style.display = "none"
  // nextBtn.style.display = "none"
  // otherBtn.style.display = "none"
  // homeBtn.style.display = "none"
  riverSound.play(2000)
  }

//comparison quote rendered 
function randomComparisonQuote() {
  focusedBreathing.style.display = "none"
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
function randomImpostorSyndromeQuote() {
  focusedBreathing.style.display = "none"
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

function randomAcceptanceQuote() {
  focusedBreathing.style.display = "none"
  landingContainer.style.display = "none"
  supportBtn.style.display = "none"
  choiceContainer.style.display = "none"
  quoteContainer.style.display = ""
  supportCategory = "acceptance"
  console.log(supportCategory)
  quoteText.textContent = getRandomAcceptanceQuote().quote
}

function randomSelfLoveQuote() {
  focusedBreathing.style.display = "none"
  landingContainer.style.display = "none"
  supportBtn.style.display = "none"
  choiceContainer.style.display = "none"
  quoteContainer.style.display = ""
  supportCategory = "self love"
  console.log(supportCategory)
  quoteText.textContent = getRandomSelfLoveQuote().quote
}



// - **Render a game in the browser**. You may not use Canvas or jQuery.
// - **Include win/loss logic and render win/loss messages in HTML.**
// - Include separate HTML, CSS, JavaScript, and JavaScript data files organized in an appropriate directory structure.
// - Game must have reset functionality that does not reload the page in the browser.
// - Include functionality specific to your game as specified in square brackets in the Recommended Games section below, or as discussed with your instructor if building a game not on the Recommended Games list.