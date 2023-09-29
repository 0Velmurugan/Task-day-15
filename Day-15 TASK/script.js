// Get references to the form and table
const form = document.getElementById("registrationForm");
const tableBody = document.querySelector("#registrationTable tbody");

// Listen for form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form values
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const address = document.getElementById("address").value;
    const pincode = document.getElementById("pincode").value;
    const gender = document.getElementById("gender").value;
    const foodElements = document.querySelectorAll("input[name='food']:checked");
    const selectedFoods = Array.from(foodElements).map((foodElement) => foodElement.value);
    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;

    // Create a new table row and insert the form data
    const newRow = tableBody.insertRow();
    newRow.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${address}</td>
        <td>${pincode}</td>
        <td>${gender}</td>
        <td>${selectedFoods.join(", ")}</td>
        <td>${state}</td>
        <td>${country}</td>
    `;

    // Reset the form
    form.reset();
});
//Add this script at the end of your script.js file -->
document.getElementById("testButton").addEventListener("click", function () {
    // Simulate form submission with test data
    document.getElementById("firstName").value = "Vel";
    document.getElementById("lastName").value = "Murugan";
    document.getElementById("address").value = "1/108 Main St";
    document.getElementById("pincode").value = "602024";
    document.getElementById("gender").value = "male";
    document.getElementById("food1").checked = true;
    document.getElementById("food2").checked = true;
    document.getElementById("state").value = "TAMIL NADU";
    document.getElementById("country").value = "INDIA";

    // Trigger the form submission manually
    form.dispatchEvent(new Event("submit"));
});