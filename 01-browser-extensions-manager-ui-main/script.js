// Buttons
const allBtn = document.querySelector(".btnall");
const activeBtn = document.querySelector(".btnactive");
const inactiveBtn = document.querySelector(".btninactive");

// Theme toggle
const themeIcon = document.getElementById("themeIcon");
const body = document.body;

const sunIcon = "./assets/images/icon-sun.svg";
const moonIcon = "./assets/images/icon-moon.svg";

const boxs = document.querySelectorAll(".boxs");
const rounds = document.querySelectorAll(".round");
const colors = document.querySelectorAll(".color");

// Navigation elements
const navigation = document.querySelector(".navigation");
const nav2 = document.querySelector(".nav2");

// Start in dark mode
let darkMode = true;

// ---------------- FIX NAVIGATION AND BUTTON COLORS ----------------
function updateNavigationColors() {
    if (darkMode) {
        navigation.style.backgroundColor = "#1F2535";
        nav2.style.backgroundColor = "#ffffff61";
        allBtn.style.backgroundColor = "#2F354B";
        activeBtn.style.backgroundColor = "#2F354B";
        inactiveBtn.style.backgroundColor = "#2F354B";
        
        allBtn.style.color = "#fff";
        activeBtn.style.color = "#fff";
        inactiveBtn.style.color = "#fff";
        
        allBtn.style.border = "4px solid #2F354B";
        activeBtn.style.border = "4px solid #2F354B";
        inactiveBtn.style.border = "4px solid #2F354B";
    } else {
        navigation.style.backgroundColor = "#F0F2F5";
        nav2.style.backgroundColor = "#2F354B";
        allBtn.style.backgroundColor = "#E4E7EB";
        activeBtn.style.backgroundColor = "#E4E7EB";
        inactiveBtn.style.backgroundColor = "#E4E7EB";
        
        allBtn.style.color = "#2F354B";
        activeBtn.style.color = "#2F354B";
        inactiveBtn.style.color = "#2F354B";
        
        allBtn.style.border = "4px solid #E4E7EB";
        activeBtn.style.border = "4px solid #E4E7EB";
        inactiveBtn.style.border = "4px solid #E4E7EB";
    }
}

// <---------------- DARK/LIGHT MODE TOGGLE ---------------->
themeIcon.addEventListener("click", () => {
    darkMode = !darkMode;

    if (darkMode) {
        body.classList.add("dark_mode");
        body.classList.remove("light_mode");
        themeIcon.src = sunIcon;
        boxs.forEach(box => {
            box.style.backgroundColor = "#1F2535";
            box.style.color = "#fff";
            
            const heading = box.querySelector(".box_heading");
            const paragraph = box.querySelector(".box_paragraphs");
            
            if (heading) heading.style.color = "#fff";
            if (paragraph) paragraph.style.color = "#fff";
        });
    } else {
        // Update box styles for light mode
        body.classList.add("light_mode");
        body.classList.remove("dark_mode");
        themeIcon.src = moonIcon;
        boxs.forEach(box => {
            box.style.backgroundColor = "#FCFDFF";
            box.style.color = "#07103C";
            
            const heading = box.querySelector(".box_heading");
            const paragraph = box.querySelector(".box_paragraphs");
            
            if (heading) heading.style.color = "#07103C";
            if (paragraph) paragraph.style.color = "#848790";
        });
    }

    updateNavigationColors();
});

// <---------------- EXTENSION TOGGLE ---------------->
rounds.forEach((round, index) => {
    round.addEventListener("click", function(event) {
        event.stopPropagation();
        round.classList.toggle("active");
        const colorDiv = round.parentElement;
        colorDiv.classList.toggle("change");
        const box = round.closest(".boxs");
        if (round.classList.contains("active")) {
            box.setAttribute("data-status", "active");
        } else {
            box.setAttribute("data-status", "inactive");
        }
    });
});

// ---------------- FILTER FUNCTIONS ----------------
function showAll() {
    boxs.forEach(box => {
        box.style.display = "flex";
    });
    allBtn.classList.add("active-filter");
    activeBtn.classList.remove("active-filter");
    inactiveBtn.classList.remove("active-filter");
    updateFilterButtonColors();
}

function showActive() {
    boxs.forEach(box => {
        const round = box.querySelector(".round");
        if (round.classList.contains("active")) {
            box.style.display = "flex";
        } else {
            box.style.display = "none";
        }
    });
    allBtn.classList.remove("active-filter");
    activeBtn.classList.add("active-filter");
    inactiveBtn.classList.remove("active-filter");
    updateFilterButtonColors();
}

function showInactive() {
    boxs.forEach(box => {
        const round = box.querySelector(".round");
        if (!round.classList.contains("active")) {
            box.style.display = "flex";
        } else {
            box.style.display = "none";
        }
    });
    allBtn.classList.remove("active-filter");
    activeBtn.classList.remove("active-filter");
    inactiveBtn.classList.add("active-filter");
    
    updateFilterButtonColors();
}

// ---------------- UPDATE FILTER BUTTON COLORS ----------------
function updateFilterButtonColors() {
    if (darkMode) {
        if (allBtn.classList.contains("active-filter")) {
            allBtn.style.backgroundColor = "#F45B54";
            allBtn.style.border = "4px solid #F45B54";
        } else {
            allBtn.style.backgroundColor = "#2F354B";
            allBtn.style.border = "4px solid #2F354B";
        }
        
        if (activeBtn.classList.contains("active-filter")) {
            activeBtn.style.backgroundColor = "#F45B54";
            activeBtn.style.border = "4px solid #F45B54";
        } else {
            activeBtn.style.backgroundColor = "#2F354B";
            activeBtn.style.border = "4px solid #2F354B";
        }
        
        if (inactiveBtn.classList.contains("active-filter")) {
            inactiveBtn.style.backgroundColor = "#F45B54";
            inactiveBtn.style.border = "4px solid #F45B54";
        } else {
            inactiveBtn.style.backgroundColor = "#2F354B";
            inactiveBtn.style.border = "4px solid #2F354B";
        }
    } else {
        if (allBtn.classList.contains("active-filter")) {
            allBtn.style.backgroundColor = "#F45B54";
            allBtn.style.border = "4px solid #F45B54";
            allBtn.style.color = "#fff";
        } else {
            allBtn.style.backgroundColor = "#E4E7EB";
            allBtn.style.border = "4px solid #E4E7EB";
            allBtn.style.color = "#2F354B";
        }
        
        if (activeBtn.classList.contains("active-filter")) {
            activeBtn.style.backgroundColor = "#F45B54";
            activeBtn.style.border = "4px solid #F45B54";
            activeBtn.style.color = "#fff";
        } else {
            activeBtn.style.backgroundColor = "#E4E7EB";
            activeBtn.style.border = "4px solid #E4E7EB";
            activeBtn.style.color = "#2F354B";
        }
        
        if (inactiveBtn.classList.contains("active-filter")) {
            inactiveBtn.style.backgroundColor = "#F45B54";
            inactiveBtn.style.border = "4px solid #F45B54";
            inactiveBtn.style.color = "#fff";
        } else {
            inactiveBtn.style.backgroundColor = "#E4E7EB";
            inactiveBtn.style.border = "4px solid #E4E7EB";
            inactiveBtn.style.color = "#2F354B";
        }
    }
}

// ---------------- BUTTON EVENT LISTENERS ----------------
allBtn.addEventListener("click", showAll);
activeBtn.addEventListener("click", showActive);
inactiveBtn.addEventListener("click", showInactive);
boxs.forEach(box => {
    const removeBtn = box.querySelector("button");
    removeBtn.addEventListener("click", function(event) {
        event.stopPropagation();
        box.remove();
    });
});
allBtn.addEventListener("mouseover", function() {
    if (!allBtn.classList.contains("active-filter")) {
        allBtn.style.backgroundColor = "#F45B54";
        allBtn.style.border = "4px solid #F45B54";
    }
});

allBtn.addEventListener("mouseout", function() {
    if (!allBtn.classList.contains("active-filter")) {
        if (darkMode) {
            allBtn.style.backgroundColor = "#2F354B";
            allBtn.style.border = "4px solid #2F354B";
        } else {
            allBtn.style.backgroundColor = "#E4E7EB";
            allBtn.style.border = "4px solid #E4E7EB";
        }
    }
});

activeBtn.addEventListener("mouseover", function() {
    if (!activeBtn.classList.contains("active-filter")) {
        activeBtn.style.backgroundColor = "#F45B54";
        activeBtn.style.border = "4px solid #F45B54";
    }
});

activeBtn.addEventListener("mouseout", function() {
    if (!activeBtn.classList.contains("active-filter")) {
        if (darkMode) {
            activeBtn.style.backgroundColor = "#2F354B";
            activeBtn.style.border = "4px solid #2F354B";
        } else {
            activeBtn.style.backgroundColor = "#E4E7EB";
            activeBtn.style.border = "4px solid #E4E7EB";
        }
    }
});

inactiveBtn.addEventListener("mouseover", function() {
    if (!inactiveBtn.classList.contains("active-filter")) {
        inactiveBtn.style.backgroundColor = "#F45B54";
        inactiveBtn.style.border = "4px solid #F45B54";
    }
});

inactiveBtn.addEventListener("mouseout", function() {
    if (!inactiveBtn.classList.contains("active-filter")) {
        if (darkMode) {
            inactiveBtn.style.backgroundColor = "#2F354B";
            inactiveBtn.style.border = "4px solid #2F354B";
        } else {
            inactiveBtn.style.backgroundColor = "#E4E7EB";
            inactiveBtn.style.border = "4px solid #E4E7EB";
        }
    }
});

boxs.forEach(box => {
    box.setAttribute("data-status", "inactive");
});

updateNavigationColors();
updateFilterButtonColors();