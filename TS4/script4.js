document.addEventListener("DOMContentLoaded", function () {
    let cards = document.querySelectorAll(".food-card");
    let menuBtn = document.getElementById("menuBtn");
    let foodDetails = document.getElementById("foodDetails");
    let foodTitle = document.getElementById("foodTitle");
    let foodDescription = document.getElementById("foodDescription");

    // Function to open the food details pop-up
    function openDetails(name, description) {
        foodTitle.textContent = name;
        foodDescription.textContent = description;
        foodDetails.style.display = "flex";
    }

    // Function to close the pop-up (ONLY via Main Menu button)
    function closeDetails() {
        foodDetails.style.display = "none";
    }

    // Attach click event to each food card to open pop-up
    cards.forEach(card => {
        card.addEventListener("click", function () {
            let name = card.getAttribute("data-name");
            let description = card.getAttribute("data-description");
            openDetails(name, description);
        });
    });

    // Main Menu button closes the pop-up
    menuBtn.addEventListener("click", function () {
        closeDetails();
    });
});
