const passwordInput = document.getElementById("password");
const copyBtn = document.getElementById("copyBtn");
const lengthRange = document.getElementById("lengthRange");
const lengthLabel = document.getElementById("lengthLabel");
const numbers = document.getElementById("numbers");
const characters = document.getElementById("characters");

function generatePassword() {
    let length = parseInt(lengthRange.value);
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";

    if (numbers.checked) str += "0123456789";
    if (characters.checked) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 0; i < length; i++) {
        let index = Math.floor(Math.random() * str.length);
        pass += str.charAt(index);
    }

    passwordInput.value = pass;
}

// Update length label live
lengthRange.addEventListener("input", () => {
    lengthLabel.textContent = lengthRange.value;
    generatePassword();
});

numbers.addEventListener("change", generatePassword);
characters.addEventListener("change", generatePassword);

// Copy button
copyBtn.addEventListener("click", () => {
    passwordInput.select();
    navigator.clipboard.writeText(passwordInput.value);
});

generatePassword();
