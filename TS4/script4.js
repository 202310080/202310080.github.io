document.addEventListener("DOMContentLoaded", function () {
    let cards = document.querySelectorAll(".food-card");
    let foodDetails = document.getElementById("foodDetails");
    let foodTitle = document.getElementById("foodTitle");
    let foodDescription = document.getElementById("foodDescription");
    let restaurantInfo = document.getElementById("restaurantInfo");
    let foodImage = document.getElementById("foodImage");
    let menuBtn = document.getElementById("menuBtn");

    // Function to open the food details pop-up
    function openDetails(name, description, details, imageSrc) {
        foodTitle.textContent = name;
        foodDescription.textContent = description;
        restaurantInfo.innerHTML = details; // Includes address, category, price
        foodImage.src = imageSrc; // Update the image
        foodDetails.style.display = "flex";
    }

    // Function to close the pop-up
    function closeDetails() {
        foodDetails.style.display = "none";
    }

    // Attach click event to each food card to open pop-up
    cards.forEach(card => {
        card.addEventListener("click", function () {
            let name = card.getAttribute("data-name");
            let description = card.getAttribute("data-description");
            let details = card.getAttribute("data-details");
            let imageSrc = card.querySelector("img").src; // Get image from card
            openDetails(name, description, details, imageSrc);
        });
    });

    // Main Menu button closes the pop-up
    menuBtn.addEventListener("click", function () {
        closeDetails();
    });
});
