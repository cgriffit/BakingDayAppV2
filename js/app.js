// ====== Nav Toggle ======
const openDropdownMenu = () => {
    document.querySelector("#yearsDropdown").classList.toggle("hidden");
}
document.querySelector("#years").addEventListener("click", openDropdownMenu);

// ====== Baked Good Modal ======
const bakedGoodDialog = document.querySelector("#bakedGoodEntryDialog");

document.querySelector("#addBtn").addEventListener("click", () => {
    // open modal
    bakedGoodDialog.showModal();
});

const closeModal = () => {
    // get user input
    let checked = document.querySelector("input:checked").value;
    let name = document.querySelector("#bakeName").value;

    // close modal
    bakedGoodDialog.close([checked, bakeName]);
    bakedGoodDialog.addEventListener('close', function() {
        // add input to correct list
        let bakeType = bakedGoodDialog.returnValue[0];
        let bakeName = bakedGoodDialog.returnValue[1];

        
        // display lists

    });
    // reset form
    document.querySelector("#bakedGoodEntryForm").reset();
}

document.querySelector("#submitBtn").addEventListener("click", closeModal);
    