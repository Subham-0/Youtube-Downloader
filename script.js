function downloadVideo() {
    const url = document.getElementById('url').value;

    if (!url) {
        document.getElementById('message').textContent = "Please paste a YouTube video URL.";
        return;
    }

    // Send a request to the backend to download the video
    fetch('https://your-project-name.vercel.app/api/download?url=' + encodeURIComponent(url))
        .then(response => {
            if (response.ok) {
                // Redirect to the download link
                return response.blob();
            } else {
                throw new Error("Failed to download the video.");
            }
        })
        .then(blob => {
            const downloadUrl = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = downloadUrl;
            a.download = "video.mp4";
            document.body.appendChild(a);
            a.click();
            a.remove();
        })
        .catch(() => {
            document.getElementById('message').textContent = "An error occurred while downloading.";
        });
}
