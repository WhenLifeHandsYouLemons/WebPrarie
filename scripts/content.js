// Constants
const GREEN = "#8f8";
const YELLOW = "#ff0";
const RED = "#ff9494";
const DARKER = "#aaa";

// Changing individual assessment page progress bar style (doing this first to revert any changes for the next section)
let completeProgressBar = document.querySelector(".progress-bar");
let incompleteProgressBar = document.querySelector(".flex-column");
let completionPercent = parseInt(completeProgressBar.textContent);

completeProgressBar.style.setProperty("color", "black", "important");
completeProgressBar.style.setProperty("font-weight", "bold", "important");
completeProgressBar.style.setProperty("box-shadow", "inset 1px 1px 2px 2px rgba(0, 0, 0, 0.25)", "important");
completeProgressBar.style.setProperty("background-color", GREEN, "important");

incompleteProgressBar.style.setProperty("color", "black", "important");
incompleteProgressBar.style.setProperty("font-weight", "bold", "important");
incompleteProgressBar.style.setProperty("box-shadow", "inset 1px 1px 2px 2px rgba(0, 0, 0, 0.25)", "important");
incompleteProgressBar.style.setProperty("background-color", RED, "important");

if (completionPercent >= 100) {
    completeProgressBar.style.setProperty("background-color", GREEN, "important");

    if (completionPercent == 100) {
        completeProgressBar.textContent = "★Perfect★";
    } else {
        completeProgressBar.textContent = "★★Perfect★★";
    }
}

// Changing progress bar and assessment row text styles
let elementList = document.querySelectorAll(".text-center");
let assessmentOverdue = false;

for (let i = 0; i < elementList.length; i++) {
    let element = elementList[i];

    if (element.classList.contains("align-middle")) {
        completeProgressBar = element.querySelector(".progress-bar");
        incompleteProgressBar = element.querySelector(".flex-column");

        if (completeProgressBar != null) {
            completionPercent = parseInt(completeProgressBar.textContent);

            completeProgressBar.style.setProperty("color", "black", "important");
            completeProgressBar.style.setProperty("font-weight", "bold", "important");
            completeProgressBar.style.setProperty("box-shadow", "inset 1px 1px 2px 2px rgba(0, 0, 0, 0.25)", "important");   // https://stackoverflow.com/a/3952909

            incompleteProgressBar.style.setProperty("color", "black", "important");
            incompleteProgressBar.style.setProperty("font-weight", "bold", "important");
            incompleteProgressBar.style.setProperty("box-shadow", "inset 1px 1px 2px 2px rgba(0, 0, 0, 0.25)", "important");

            if (assessmentOverdue) {
                if (completionPercent >= 100) {
                    completeProgressBar.style.setProperty("background-color", GREEN, "important");

                    if (completionPercent == 100) {
                        completeProgressBar.textContent = "★Perfect★";
                    } else {
                        completeProgressBar.textContent = "★★Perfect★★";
                    }
                } else {
                    completeProgressBar.style.setProperty("background-color", GREEN, "important");
                    incompleteProgressBar.style.setProperty("background-color", RED, "important");
                }
            } else {
                if (completionPercent >= 100) {
                    completeProgressBar.style.setProperty("background-color", GREEN, "important");

                    if (completionPercent == 100) {
                        completeProgressBar.textContent = "★Perfect★";
                    } else {
                        completeProgressBar.textContent = "★★Perfect★★";
                    }
                } else {
                    completeProgressBar.style.setProperty("background-color", GREEN, "important");
                    incompleteProgressBar.style.setProperty("background-color", YELLOW, "important");
                }
            }

            assessmentOverdue = false;
        } else {
            if (element.textContent.includes("None") || element.textContent.includes("Assessment closed.")) {
                element.textContent = "";
                assessmentOverdue = true;
            } else if (element.textContent.includes("Not started")) {
                element.textContent = "";
            }
        }
    }
}

// Changing assessment group heading style
elementList = document.querySelectorAll("[data-testid=assessment-group-heading]"); // https://stackoverflow.com/a/48064608

for (let i = 0; i < elementList.length; i++) {
    let element = elementList[i];

    element.style.setProperty("background-color", DARKER, "important");
}

// Changing assessment badge style
elementList = document.querySelectorAll(".badge");

for (let i = 0; i < elementList.length; i++) {
    let element = elementList[i];

    if (!element.textContent.includes("complete") && !element.textContent.includes("incorrect")) {
        element.style.setProperty("background-color", "transparent", "important");
        element.style.setProperty("color", "black", "important");
        element.style.setProperty("font-weight", "normal", "important");
    }
}

// Changing assessment link style
elementList = document.querySelectorAll("table tr td a");  // https://stackoverflow.com/a/42608539

for (let i = 0; i < elementList.length; i++) {
    let element = elementList[i];

    if (!element.textContent.includes("New instance")) {
        element.style.setProperty("font-weight", "bold", "important");
    }
}
