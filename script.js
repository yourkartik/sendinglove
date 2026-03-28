
const no = document.querySelector('.no');






document.addEventListener('DOMContentLoaded', function() {
    var videoElement = document.querySelector('.background-video');
    const yes = document.querySelector('.yes');
    var isVideoPlaying = false;

    // Function to toggle video playback
    function toggleVideoPlayback() {
        if (isVideoPlaying) {
            // Pause the video
            videoElement.pause();
            isVideoPlaying = false;
        } else {
            // Play the video
            videoElement.play();
            isVideoPlaying = true;
        }
    }
    yes.addEventListener('click', () => {
        const video= document.querySelector('.background-video');
        video.style.opacity = 1;
        yes.textContent = "@YourKartik";
        toggleVideoPlayback();
        alert('I love you tooo meri jaan mera babyyy !💕😍💖');
       
    });
    // Add click event listener to the button
    

    // Ensure video is paused when the page is loaded
    videoElement.pause();
});

// Event listener for the 'yes' button


// Function to move the 'no' button to a random position
function move() {
    const maxWidth = window.innerWidth - 100; // Use window.innerWidth to get the maximum width of the viewport
    const maxHeight = window.innerHeight - 100; // Use window.innerHeight to get the maximum height of the viewport

    // Generate random x and y coordinates within the viewport dimensions
    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);

    // Set the position of the 'no' button using absolute positioning
    no.style.position = 'absolute';
    no.style.left = randomX + "px";
    no.style.top = randomY + "px";
}

// Event listener for the 'no' button to trigger the 'move' function
no.addEventListener('mouseover', ()=>{
    move();
    
});

