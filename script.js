// Selecting DOM elements
const colorSelect = document.getElementById('colorSelect');
const fontSelect = document.getElementById('fontSelect');
const colorDisplay = document.getElementById('colorDisplay');
const colorName = document.getElementById('colorName');

// Event listener for selected color change
colorSelect.addEventListener('change', () => {
    applyColor();
    savePreferences();
});

// Event listener for selected font style change
fontSelect.addEventListener('change', () => {
    applyFont();
    savePreferences();
});

// Load saved preferences from local storage
loadPreferences();

// Function to load saved preferences from local storage
function loadPreferences() {
    const savedColor = localStorage.getItem('selectedColor');
    const savedFont = localStorage.getItem('selectedFont');

    if (savedColor && savedFont) {
        colorSelect.value = savedColor;
        fontSelect.value = savedFont;
        applyColor();
        applyFont();
    }
}

// Function to save preferences to local storage
function savePreferences() {
    localStorage.setItem('selectedColor', colorSelect.value);
    localStorage.setItem('selectedFont', fontSelect.value);
}

// Apply selected color
function applyColor() {
    const selectedColor = colorSelect.value;
    colorDisplay.style.backgroundColor = selectedColor;
    colorDisplay.style.width = '100px';
    colorDisplay.style.height = '100px';
    colorDisplay.style.borderRadius = '50%';
    colorName.textContent = `${colorSelect.options[colorSelect.selectedIndex].text}`;
}

// Apply selected font style
function applyFont() {
    colorName.style.fontFamily = fontSelect.value;
}


document.addEventListener('DOMContentLoaded', () => {
    const themeSelect = document.getElementById('themeSelect');

    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme + '-theme');
        themeSelect.value = savedTheme;
    }

    // Add event listener for theme selection
    themeSelect.addEventListener('change', () => {
        const selectedTheme = themeSelect.value;
        document.body.className = '';  // Reset class names
        document.body.classList.add(selectedTheme + '-theme');
        localStorage.setItem('theme', selectedTheme);
    });
});

