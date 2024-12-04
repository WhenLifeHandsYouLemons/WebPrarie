const elements = document.querySelectorAll(".text-center");
const green = "#8f8";
const yellow = "#ff0";
const red = "#ff9494";

let overdue = false;
let percent;

for (let i = 0; i < elements.length; i++) {
    let element = elements[i];

    if (element.classList.contains("align-middle")) {

        if (element.querySelector(".progress-bar") != null) {
            percent = parseInt(element.querySelector(".progress-bar").textContent);

            if (overdue) {
                if (percent >= 100) {
                    element.querySelector(".progress-bar").style.setProperty("background-color", green, "important");

                    if (percent == 100) {
                        element.querySelector(".progress-bar").textContent = "★Perfect★";
                    } else {
                        element.querySelector(".progress-bar").textContent = "★★Perfect★★";
                    }
                } else {
                    element.querySelector(".progress-bar").style.setProperty("background-color", green, "important");
                    element.querySelector(".flex-column").style.setProperty("background-color", red, "important");

                    element.querySelector(".progress-bar").style.setProperty("color", "black", "important");
                }
            } else {
                if (percent >= 100) {
                    element.querySelector(".progress-bar").style.setProperty("background-color", green, "important");

                    if (percent == 100) {
                        element.querySelector(".progress-bar").textContent = "★Perfect★";
                    } else {
                        element.querySelector(".progress-bar").textContent = "★★Perfect★★";
                    }
                } else {

                    element.querySelector(".progress-bar").style.setProperty("color", "black", "important");
                    element.querySelector(".progress-bar").style.setProperty("background-color", green, "important");
                    element.querySelector(".flex-column").style.setProperty("background-color", yellow, "important");
                }
            }

            overdue = false;
        } else {
            if (element.textContent.includes("None") || element.textContent.includes("Assessment Closed.")) {
                overdue = true;
            }
        }
    }
}

