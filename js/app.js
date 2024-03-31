/*-------------------------------- Constants --------------------------------*/
import { getRandomComparisonQuote, getRandomImpostorSyndromeQuote } from "../data/quotes.js"


/*-------------------------------- Variables --------------------------------*/
const comparisonQuotes = []
const impostorSyndromeQuotes = []
const acceptanceQuotes = []
const selfLoveQuotes = []


/*------------------------ Cached Element References ------------------------*/
//light dark mode
const dayNightBtn = document.getElementById("day-night-mode")

const landingContainer = document.querySelector(".landing-container")
const supportBtn = document.getElementById("support-button")
const choiceContainer = document.querySelector(".choice-container")
const quoteContainer = document.querySelector(".quote-container")

const comparisonBtn = document.getElementById("comparison")
/*----------------------------- Event Listeners -----------------------------*/
dayNightBtn.addEventListener('click', () => {
  document.body.classList.toggle("night-mode");
  //classList property can be modified using toggle() method
  console.log("night-mode")
})
supportBtn.addEventListener("click", reflectChoiceContainer)
comparisonBtn.addEventListener("click", randomComparisonQuote)

/*-------------------------------- Functions --------------------------------*/
//day night mode function per shake-it-off lesson


init();

function init() {
  landingContainer.style.display = ''
  supportBtn.style.display = ''
  choiceContainer.style.display = 'none'
  quoteContainer.style.display = 'none'
} 

// supportBtn is clicked -> choiceContainer appears
function reflectChoiceContainer() {
  landingContainer.style.display = "none"
  supportBtn.style.display = "none"
  choiceContainer.style.display = ""
  quoteContainer.style.display = "none"
  }
  

//comparison quote rendered 
function randomComparisonQuote() {
  landingContainer.style.display = "none"
  supportBtn.style.display = "none"
  choiceContainer.style.display = "none"
  quoteContainer.style.display = ""
  quoteContainer.textContent = getRandomComparisonQuote().quote

}



// - **Render a game in the browser**. You may not use Canvas or jQuery.
// - **Include win/loss logic and render win/loss messages in HTML.**
// - Include separate HTML, CSS, JavaScript, and JavaScript data files organized in an appropriate directory structure.
// - Game must have reset functionality that does not reload the page in the browser.
// - Include functionality specific to your game as specified in square brackets in the Recommended Games section below, or as discussed with your instructor if building a game not on the Recommended Games list.