document.getElementById("songForm").addEventListener("submit", function(e) {
    e.preventDefault(); // ✅ Stops page reload

    // Disable the submit button to prevent multiple submissions
    let submitButton = document.getElementById("submitBtn");
    submitButton.disabled = true;
    submitButton.innerText = "Submitting...";

    let songName = document.getElementById("songName").value;
    let artist = document.getElementById("artist").value;
    let submittedBy = document.getElementById("submittedBy").value || "Anonymous";

    fetch("https://script.google.com/macros/s/AKfycbxsGR2PysdWUz2rG5hF4FByMsU-Cn6GY5vQlJrvHJ6SfPd5F3y3KtSv80ZSdNE0VJvl/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ songName: songName, artist: artist, submittedBy: submittedBy })
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        alert("Suggestion submitted!");
        submitButton.disabled = false;  // Re-enable the submit button
        submitButton.innerText = "Submit Suggestion";  // Reset button text
    })
    .catch(error => {
        console.error("Error:", error);
        submitButton.disabled = false;  // Re-enable the submit button on error
        submitButton.innerText = "Submit Suggestion";  // Reset button text
    });
});
