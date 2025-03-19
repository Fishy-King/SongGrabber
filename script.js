document.getElementById("songForm").addEventListener("submit", function (e) {
    e.preventDefault(); // ✅ Stops page reload

    // Get form elements
    let submitButton = document.getElementById("submitBtn");
    let songName = document.getElementById("songName").value.trim();
    let artist = document.getElementById("artist").value.trim();
    let submittedBy = document.getElementById("submittedBy").value.trim() || "Anonymous";

    // Basic validation check
    if (!songName || !artist) {
        alert("Please fill in both the Song Name and Artist fields.");
        return;
    }

    // Disable the submit button to prevent multiple submissions
    submitButton.disabled = true;
    submitButton.innerText = "Submitting...";

    fetch("https://script.google.com/macros/s/AKfycby5BUQSrZBwQLkrw98Dy8FvEykqDdkSQZcnV8S7hGFnOoXR8DAmGj1blqY1RH2AMuu0/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ songName, artist, submittedBy }),
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        alert("Suggestion submitted!");

        // Reset the form
        document.getElementById("songForm").reset();

        // Re-enable the submit button
        submitButton.disabled = false;
        submitButton.innerText = "Submit Suggestion";
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Failed to submit. Please try again.");

        // Re-enable the submit button on error
        submitButton.disabled = false;
        submitButton.innerText = "Submit Suggestion";
    });
});
