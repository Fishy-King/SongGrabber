document.getElementById("songForm").addEventListener("submit", function(e) {
    e.preventDefault(); // ✅ Stops page reload

    let songName = document.getElementById("songName").value;
    let artist = document.getElementById("artist").value;
    let submittedBy = document.getElementById("submittedBy").value || "Anonymous";

    fetch("https://script.google.com/macros/s/AKfycbzl5vyXd4OaM7SJGM1ibT321APWg7GW36fqkNcO9ucEfFcuA4DZydEzA6iKYIg9l8qW/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ songName: songName, artist: artist, submittedBy: submittedBy })
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        alert("Suggestion submitted!");
    })
    .catch(error => console.error("Error:", error));
});
