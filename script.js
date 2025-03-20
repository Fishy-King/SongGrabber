document.getElementById("songForm").addEventListener("submit", function (e) {
    e.preventDefault(); // ✅ Prevent page reload

    // Get form values
    let submitButton = document.getElementById("submitBtn");
    let songName = document.getElementById("songName").value.trim();
    let artist = document.getElementById("artist").value.trim();
    let submittedBy = document.getElementById("submittedBy").value.trim() || "Anonymous";

    // Basic validation
    if (!songName || !artist) {
        alert("Please fill in both the Song Name and Artist fields.");
        return;
    }

    // Disable submit button to prevent multiple submissions
    submitButton.disabled = true;
    submitButton.innerText = "Submitting...";

    fetch("https://script.google.com/macros/s/AKfycbwx0d0GYQQ09G6SpuwAUyhbTO9SES1daaiH2hJQ_7WHxuXe4PaFORCqZsbQTlnUYua9/exec", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ songName, artist, submittedBy }),
    })
    .then(response => response.json()) // ✅ Parse JSON response
    .then(data => {
        console.log(data);
        alert("Suggestion submitted!");

        // Reset form
        document.getElementById("songForm").reset();

        // Re-enable submit button
        submitButton.disabled = false;
        submitButton.innerText = "Submit Suggestion";
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Failed to submit. Please try again.");

        // Re-enable submit button on error
        submitButton.disabled = false;
        submitButton.innerText = "Submit Suggestion";
    });
});
