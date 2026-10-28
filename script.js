const DateTime = luxon.DateTime;

document.getElementById("ageForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const birthdate = document.getElementById("birthdate").value;
    const result = document.getElementById("result");

    if (!birthdate) {
        result.textContent = "Please select your birthdate.";
        return;
    }

    const birth = DateTime.fromISO(birthdate).startOf("day");
    const today = DateTime.now().startOf("day");

    if (!birth.isValid || birth > today) {
        result.textContent = "Please enter a valid birthdate.";
        return;
    }

    const age = today.diff(birth, ["years", "months", "days"]).toObject();

    result.innerHTML =
        "Your Exact Age:<br>" +
        Math.floor(age.years) + " Years, " +
        Math.floor(age.months) + " Months, " +
        Math.floor(age.days) + " Days";
});
