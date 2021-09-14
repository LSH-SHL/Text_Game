const signUpForm = document.querySelector("#signup-form");
const singnUpInput = document.querySelector("#signup-form input");
const greeting = document.querySelector("#greeting");

function onSignUpSubmit(event) {
	event.preventDefault();
	signUpForm.classList.add("hidden");
	const userID = signUpInput.value;
	greeting.innerText = "Hello " + username;
	greeting.classList.remove("hidden");
}

signUpForm.addEventListener("submit",onSignUpSubmit)
