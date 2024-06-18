import {
	getRandomComparisonQuote,
	getRandomImpostorSyndromeQuote,
	getRandomAcceptanceQuote,
	getRandomSelfLoveQuote
} from "../data/quotes.js"
// ------------------------------------------------------ //
let supportCategory = ""

const riverSound = new Audio('../assets/audio/river.wav')
// ------------------------------------------------------ //
const dayNightBtn = document.getElementById("day-night-mode")

const breathingContainer = document.getElementById("breathing-container")
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
// ------------------------------------------------------ //
let mode = "day"
dayNightBtn.addEventListener("click", () => {
  document.body.classList.toggle("night-mode");
	if (mode === "night") {
		dayNightBtn.textContent = "Night Mode"
		mode = "day"
	} else {
    dayNightBtn.textContent = "Day Mode"
    mode = "night"
	}
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

// ------------------------------------------------------ //

function handleSupportCategory() {
  switch (supportCategory) {
  case "comparison":
    randomComparisonQuote()
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

init()

function init() {
  const elementsToShow = [breathingContainer, focusedBreathing, breathingBtn]
  const elementsToHide = [landingContainer, supportBtn, choiceContainer, quoteContainer]

  elementsToShow.forEach(element => element.style.display = "")
  elementsToHide.forEach(element => element.style.display = "none")
}

function reflectLandingContainer() {
  const elementsToShow = [landingContainer, supportBtn]
  const elementsToHide = [breathingContainer, focusedBreathing, breathingBtn, choiceContainer, quoteContainer]

  elementsToShow.forEach(element => element.style.display = "")
  elementsToHide.forEach(element => element.style.display = "none")
}

function reflectChoiceContainer() {
  const elementsToShow = [choiceContainer]
  const elementsToHide = [breathingContainer, focusedBreathing, breathingBtn, landingContainer, supportBtn, quoteContainer]

  elementsToShow.forEach(element => element.style.display = "")
  elementsToHide.forEach(element => element.style.display = "none")

  riverSound.play(2000)
}

function randomComparisonQuote() {
  breathingContainer.style.display = "none"
  focusedBreathing.style.display = "none"
  breathingBtn.style.display = "none"
  landingContainer.style.display = "none"
  supportBtn.style.display = "none"
  choiceContainer.style.display = "none"
  quoteContainer.style.display = ""
  supportCategory = "comparison"
  quoteText.textContent = getRandomComparisonQuote().quote
}

function randomImpostorSyndromeQuote() {
  breathingContainer.style.display = "none"
  focusedBreathing.style.display = "none"
  breathingBtn.style.display = "none"
  landingContainer.style.display = "none"
  supportBtn.style.display = "none"
  choiceContainer.style.display = "none"
  quoteContainer.style.display = ""
  supportCategory = "impostor syndrome"
  quoteText.textContent = getRandomImpostorSyndromeQuote().quote
}

function randomAcceptanceQuote() {
  breathingContainer.style.display = "none"
  focusedBreathing.style.display = "none"
  breathingBtn.style.display = "none"
  landingContainer.style.display = "none"
  supportBtn.style.display = "none"
  choiceContainer.style.display = "none"
  quoteContainer.style.display = ""
  supportCategory = "acceptance"
  quoteText.textContent = getRandomAcceptanceQuote().quote
}

function randomSelfLoveQuote() {
  breathingContainer.style.display = "none"
  focusedBreathing.style.display = "none"
  breathingBtn.style.display = "none"
  landingContainer.style.display = "none"
  supportBtn.style.display = "none"
  choiceContainer.style.display = "none"
  quoteContainer.style.display = ""
  supportCategory = "self love"
  quoteText.textContent = getRandomSelfLoveQuote().quote
}

// ------------------------------------------------------ //


