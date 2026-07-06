function calculateBMI() {
    const ageEl = document.getElementById("age");
    const genderEl = document.getElementById("gender");
    const heightEl = document.getElementById("height");
    const weightEl = document.getElementById("weight");

    const age = Number(ageEl.value);
    const gender = genderEl.value;
    const heightCm = Number(heightEl.value);
    const weightKg = Number(weightEl.value);

    const resultEl = document.getElementById("result");
    const categoryEl = document.getElementById("category");

    // Basic validation
    const errors = [];
    if (!Number.isFinite(age) || age <= 0) errors.push("Enter a valid age (> 0). ");
    if (!gender) errors.push("Select a gender. ");
    if (!Number.isFinite(heightCm) || heightCm <= 0) errors.push("Enter a valid height in cm (> 0). ");
    if (!Number.isFinite(weightKg) || weightKg <= 0) errors.push("Enter a valid weight in kg (> 0). ");

    if (errors.length) {
        resultEl.innerHTML = "";
        categoryEl.innerHTML = `<span class="error">${errors.join("")}</span>`;
        return;
    }

    const heightM = heightCm / 100;
    const bmi = weightKg / (heightM * heightM);

    let status;
    if (bmi < 16) status = "Severe Thinness";
    else if (bmi < 17) status = "Moderate Thinness";
    else if (bmi < 18.5) status = "Mild Thinness";
    else if (bmi < 25) status = "Normal";
    else if (bmi < 30) status = "Overweight";
    else if (bmi < 35) status = "Obese Class I";
    else if (bmi < 40) status = "Obese Class II";
    else status = "Obese Class III";

    resultEl.innerHTML = `BMI = <strong>${bmi.toFixed(2)}</strong>`;
    categoryEl.innerHTML = `Category: <strong>${status}</strong> <span class="muted">(${gender}, Age ${age})</span>`;
}


