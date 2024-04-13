document.addEventListener("DOMContentLoaded", function () {
    // Populate day dropdown
    var dayDropdown = document.getElementById("day");
    for (var i = 1; i <= 31; i++) {
        var option = document.createElement("option");
        option.value = i;
        option.text = i;
        dayDropdown.add(option);
    }

    // Populate month dropdown
    var monthDropdown = document.getElementById("month");
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    for (var i = 0; i < months.length; i++) {
        var option = document.createElement("option");
        option.value = i + 1;
        option.text = months[i];
        monthDropdown.add(option);
    }

    // Populate year dropdown (adjust range based on your preference)
    var yearDropdown = document.getElementById("year");
    var currentYear = new Date().getFullYear();
    for (var i = currentYear; i >= currentYear - 100; i--) {
        var option = document.createElement("option");
        option.value = i;
        option.text = i;
        yearDropdown.add(option);
    }
    yearDropdown.selectedIndex = 25;

    // Populate future date =============================
    // Populate day dropdown
    var targetDayDropdown = document.getElementById("targetDay");
    if (targetDayDropdown) {
        for (var i = 1; i <= 31; i++) {
            var option = document.createElement("option");
            option.value = i;
            option.text = i;
            targetDayDropdown.add(option);
        }
    }

    // Populate month dropdown
    var targetMonthDropdown = document.getElementById("targetMonth");
    if (targetMonthDropdown) {
        for (var i = 0; i < months.length; i++) {
            var option = document.createElement("option");
            option.value = i + 1;
            option.text = months[i];
            targetMonthDropdown.add(option);
        }
    }

    // Populate year dropdown (adjust range based on your preference)
    var targetYearDropdown = document.getElementById("targetYear");
    if (targetYearDropdown) {
        var currentYear = new Date().getFullYear();
        for (var i = currentYear; i <= currentYear + 100; i++) {
            var option = document.createElement("option");
            option.value = i;
            option.text = i;
            targetYearDropdown.add(option);
        }
    }

    var currentMonth = new Date().getMonth();
    var currentDay = new Date().getDate();
    targetMonthDropdown.selectedIndex = currentMonth;
    targetDayDropdown.selectedIndex = currentDay;

});

function calculateAge() {
    // Get input values
    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);

    // Check if a valid date is entered
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        alert("Please enter a valid birthdate.");
        return;
    }

    // Check if the selected date is in the future
    var selectedDate = new Date(year, month - 1, day);
    var currentDate = new Date();
    if (selectedDate > currentDate) {
        alert("Please enter a birthdate that is not in the future.");
        return;
    }

    // Calculate age
    var ageInMilliseconds = currentDate - selectedDate;
    var ageDate = new Date(ageInMilliseconds);

    var years = ageDate.getUTCFullYear() - 1970;
    var months = ageDate.getUTCMonth();
    var days = ageDate.getUTCDate() - 1;
    var totalMonths = years * 12 + months;
    var totalDays = years * 365 + months *30 + days;
    var totalWeeks = Math.floor(totalDays / 7);

    // Display the result
    var resultString = "<p>Your age is: ";
    if (years > 0) {
        resultString += years + " year" + (years > 1 ? "s" : "");
        if (months > 0 || days > 0) {
            resultString += ", ";
        }
    }
    if (months > 0) {
        resultString += months + " month" + (months > 1 ? "s" : "");
        if (days > 0) {
            resultString += ", ";
        }
    }
    if (days > 0) {
        resultString += days + " day" + (days > 1 ? "s" : "");
    }
    resultString +=".</p>";

    document.getElementById("result").innerHTML = resultString;
}

