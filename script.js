// 1. Function to show a message when clicking "Join Call"
const joinBtn = document.querySelector('.btn-primary');

joinBtn.addEventListener('click', function() {
    alert("Connecting to Secure Medical Server... Please wait for Dr. Aruna Singh.");
    joinBtn.innerText = "Connecting...";
    joinBtn.style.backgroundColor = "#4caf50"; // Changes color to green
});

// 2. Simple "Live" Heart Rate Simulator
// This makes the BPM number change slightly every 3 seconds to look real
const heartRateElement = document.querySelectorAll('.stat-value')[0];

setInterval(() => {
    const randomBPM = Math.floor(Math.random() * (75 - 70 + 1)) + 70;
    heartRateElement.innerText = randomBPM + " BPM";
}, 3000);

// 3. Greeting based on time of day
const welcomeHeader = document.querySelector('h1');
const hour = new Date().getHours();

if (hour < 12) {
    welcomeHeader.innerText = "Good Morning, Jebaslin";
} else if (hour < 17) {
    welcomeHeader.innerText = "Good Afternoon, Jebaslin";
} else {
    welcomeHeader.innerText = "Good Evening, Jebaslin";
}