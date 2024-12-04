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

            element.querySelector(".progress-bar").style.setProperty("color", "black", "important");
            element.querySelector(".flex-column").style.setProperty("color", "black", "important");
            element.querySelector(".progress-bar").style.setProperty("font-weight", "bold", "important");
            element.querySelector(".flex-column").style.setProperty("font-weight", "bold", "important");
            element.querySelector(".progress-bar").style.setProperty("box-shadow", "inset 1px 1px 2px 2px rgba(0, 0, 0, 0.25)", "important");
            element.querySelector(".flex-column").style.setProperty("box-shadow", "inset 1px 1px 2px 2px rgba(0, 0, 0, 0.25)", "important");

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
                    element.querySelector(".progress-bar").style.setProperty("background-color", green, "important");
                    element.querySelector(".flex-column").style.setProperty("background-color", yellow, "important");
                }
            }

            overdue = false;
        } else {
            if (element.textContent.includes("None")) {
                element.textContent = "0%";
                overdue = true;
            } else if (element.textContent.includes("Assessment closed.")) {
                element.textContent = "Closed";
                overdue = true;
            } else if (element.textContent.includes("Not started")) {
                element.textContent = "";
            }
        }
    }
}

