document.getElementById('downloadBtn').addEventListener('click', async () => {
    const videoUrl = document.getElementById('videoUrl').value;
    const messageElement = document.getElementById('message');

    if (!videoUrl) {
        messageElement.textContent = 'Please enter a YouTube URL.';
        return;
    }

    try {
        const response = await fetch('/api/download', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url: videoUrl })
        });

        if (response.ok) {
            const data = await response.json();
            messageElement.textContent = 'Download initiated!'; // Modify based on actual response
        } else {
            throw new Error('Failed to download video.');
        }
    } catch (error) {
        messageElement.textContent = error.message;
    }
});
