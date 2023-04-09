
function compare() {
	// Get input values
	let bank1 = document.getElementById("bank1").value.trim();
	let bank2 = document.getElementById("bank2").value.trim();
	let flexibilityYears1 = parseInt(document.getElementById("flexibility1_years").value);
	let flexibilityMonths1 = parseInt(document.getElementById("flexibility1_months").value);
	let flexibilityYears2 = parseInt(document.getElementById("flexibility2_years").value);
	let flexibilityMonths2 = parseInt(document.getElementById("flexibility2_months").value);
	let interest1 = parseFloat(document.getElementById("interest1").value.trim());
	let interest2 = parseFloat(document.getElementById("interest2").value.trim());
	let salary = parseFloat(document.getElementById("salary").value.trim());
  
	// Validate input values
	if (!bank1 || !bank2 || !interest1 || !interest2) {
	  alert("Please fill in all fields.");
	  return;
	}
	if (isNaN(interest1) || isNaN(interest2)) {
	  alert("Please enter valid interest rates.");
	  return;
	}
	if (salary < 0) {
	  alert("Please enter a valid salary.");
	  return;
	}
  
	let result = "";
	let flex1 = flexibilityYears1 * 12 + flexibilityMonths1;
	let flex2 = flexibilityYears2 * 12 + flexibilityMonths2;
  
	if (salary < 50000) {
	  if (flex1 > flex2) {
		result = `${bank1} is the better choice because it offers more flexible terms.`;
	  } else if (flex2 > flex1) {
		result = `${bank2} is the better choice because it offers more flexible terms.`;
	  } else {
		result = "Both banks have the same flexibility.";
	  }
	}
  
	if (salary >= 50000) {
	  if (interest1 < interest2) {
		result = `${bank1} is the better choice with an interest of ${interest1}%.`;
	  } else if (interest2 < interest1) {
		result = `${bank2} is the better choice with an interest of ${interest2}%.`;
	  } else {
		result = "Both banks have the same interest rate.";
	  }
	}
  
	// Display result
	document.getElementById("result").innerHTML = result;
  }
  