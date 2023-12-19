let toggleButton = document.getElementById("modebtn");
let icon = document.getElementById("icon");
const body = document.body;

// Function to save the mode preference in localStorage
function saveModePreference(mode) {
    localStorage.setItem('colorMode', mode);
  }
  
  // Function to retrieve the mode preference from localStorage
  function getModePreference() {
    return localStorage.getItem('colorMode');
  }
  
  // Function to set the mode and save it in localStorage
  function setMode(mode) {
    body.classList.toggle('dark', mode === 'dark');
    saveModePreference(mode);
  
    // Set background-image based on mode
    if (mode === 'dark') {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
    } else {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    }
  }
  
  // Check stored preference on page load
  const storedMode = getModePreference();
  const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Set the mode based on stored preference or browser preference
  setMode(storedMode || (prefersDarkMode ? 'dark' : 'light'));
  
  // Event listener for the toggle button
  toggleButton.addEventListener('click', function(e) {
    const newMode = body.classList.contains('dark') ? 'light' : 'dark';
    setMode(newMode);
  });