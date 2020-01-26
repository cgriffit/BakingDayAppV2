// ====== Nav Toggle ======
const openDropdownMenu = () => {
    document.querySelector("#yearsDropdown").classList.toggle("hidden");
}
document.querySelector("#years").addEventListener("click", openDropdownMenu);

// ====== Input Event Listener ======
const bakeInputs = document.querySelectorAll(".groupContainer input");

for (let bakeInput of bakeInputs) {
    bakeInput.addEventListener("keypress", event => {
        // check if enter was pressed
        if (event.keyCode === 13 || event.which === 13) {           
            let bakeName = event.target.value;
            let bakeListID = event.target.previousElementSibling.id;
            let markup = "";

            markup = `
                <li>${bakeName}</li>
            `;
            // add item to the end of the list
            document.querySelector(`#${bakeListID}`).insertAdjacentHTML("beforeend", markup);
            // reset input
            document.querySelector(`#${bakeInput.id}`).value = "";
        }
    });
}