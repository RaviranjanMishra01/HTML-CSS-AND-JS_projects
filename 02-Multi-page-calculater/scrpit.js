

const steps = [
  document.querySelector(".step1_page"),
  document.querySelector(".step2_page"),
  document.querySelector(".step3_page3"),
  document.querySelector(".step4_page")
];

const stepCircles = [
  document.querySelector(".step1_box"),
  document.querySelector(".step2_box"),
  document.querySelector(".step3_box"),
  document.querySelector(".step4_box")
];

let currentStep = 0;

// selected plan & addons
let selectedPlan = { name: "", price: 0, type: "month" };
let addons = [];

// Show step + update left side circles
function showStep(stepIndex) {
  steps.forEach((s, i) => s.style.display = i === stepIndex ? "block" : "none");
  stepCircles.forEach((c, i) => {
    if (i === stepIndex) {
      c.classList.add("changecolorbox");
      c.style.color = "#000";
    } else {
      c.classList.remove("changecolorbox");
      c.style.color = "#fff";
    }
  });
  currentStep = stepIndex;
}
showStep(0);

// Step 1: form validation
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.querySelector("#name").value.trim();
  let email = document.querySelector("#email").value.trim();
  let nameError = document.querySelector(".nameerror");
  let emailError = document.querySelector(".email-error");

  let valid = true;
  if (name.length <= 3) {
    nameError.style.display = "inline";
    valid = false;
  } else nameError.style.display = "none";

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    emailError.style.display = "inline";
    valid = false;
  } else emailError.style.display = "none";

  if (valid) showStep(1);
});

// Step 2: plan selection
const plans = document.querySelectorAll(".plan1");
plans.forEach(plan => {
  plan.addEventListener("click", () => {
    plans.forEach(p => p.classList.remove("selected"));
    plan.classList.add("selected");

    let title = plan.querySelector("h4").textContent;
    let priceText = plan.querySelector("p").textContent;
    selectedPlan.name = title;
    selectedPlan.price = parseInt(priceText.replace(/\D/g, ""));
    selectedPlan.type = priceText.includes("mo") ? "month" : "year";
  });
});

// Step 2: month/year toggle
const toggleButton = document.querySelector(".move");
const monthText = document.querySelector(".month");
const yearText = document.querySelector(".year");
const freemon = document.querySelectorAll("#freemon");
const sizeupdate = document.querySelectorAll(".updatesize");

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("left");
  monthText.classList.toggle("yeamon");
  yearText.classList.toggle("yeamon");

  const isYearly = toggleButton.classList.contains("left");

  freemon.forEach(el => el.style.display = isYearly ? "block" : "none");
  sizeupdate.forEach(ele => ele.style.height = isYearly ? "200px" : "175px");

  document.querySelector(".Arcademoney").textContent = isYearly ? "$90/year" : "$9/mo";
  document.querySelector(".advancemoney").textContent = isYearly ? "$120/year" : "$12/mo";
  document.querySelector(".promoney").textContent = isYearly ? "$150/year" : "$15/mo";
});

// Step 2 → Step 3
document.querySelector(".jump_step").addEventListener("click", () => {
  if (selectedPlan.name) showStep(2);
});

// Step 3: add-ons selection
const stores = document.querySelectorAll(".store");
stores.forEach(store => {
  store.addEventListener("click", () => {
    store.classList.toggle("selected");
    const box = store.querySelector(".box_cheak");
    box.classList.toggle("active");

    const title = store.querySelector("h3").textContent;
    const priceText = store.querySelector(".storeprice").textContent;
    const price = parseInt(priceText.replace(/\D/g, ""));

    if (store.classList.contains("selected")) {
      addons.push({ title, price });
    } else {
      addons = addons.filter(a => a.title !== title);
    }
  });
});

// Step 3 → Step 4
document.querySelector(".next_part4").addEventListener("click", () => {
  if (selectedPlan.name) {
    updateSummary();
    showStep(3);
  }
});

// Step 4: summary calculation
function updateSummary() {
  const planBox = document.querySelector(".selectyourplan");
  const storesBox = document.querySelector(".yourstores");
  const totalBox = document.querySelector(".totalprice span");

  planBox.innerHTML = `
    <h3>${selectedPlan.name} (${selectedPlan.type})</h3>
    <div class="price"><h3>$${selectedPlan.price}/${selectedPlan.type === "month" ? "mo" : "yr"}</h3></div>
  `;

  storesBox.innerHTML = addons.map(a => `
    <div class="first">
      <p>${a.title}</p>
      <span>+$${a.price}/${selectedPlan.type === "month" ? "mo" : "yr"}</span>
    </div>
  `).join("");

  let total = selectedPlan.price + addons.reduce((sum, a) => sum + a.price, 0);
  totalBox.textContent = `+$${total}/${selectedPlan.type === "month" ? "mo" : "yr"}`;
}

// Back buttons
document.querySelector(".back_page2").addEventListener("click", () => showStep(1)); // Step 3 → Step 2
document.querySelectorAll(".back").forEach(backBtn => {
  backBtn.addEventListener("click", () => {
    if(currentStep > 0) showStep(currentStep - 1);
  });
});
