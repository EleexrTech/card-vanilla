const form = document.querySelector("#form");
const firstname = form.querySelector("#firstname");
const title = form.querySelector("#title");
const male = form.querySelector("#male");
const female = form.querySelector("#female");
const box = form.querySelector("#box");
const lastname = form.querySelector("#lastname");
const email = form.querySelector("#email");
const password = form.querySelector("#password");
const showBtn = form.querySelector(".showBtn");
const showBtn001 = form.querySelector(".showBtn1");
const confirm__password = form.querySelector("#confirmPassword");

form.onsubmit = (e) => {
	e.preventDefault();

	Validate();
}

showBtn.onclick = () =>{
	if (password.type=='password') {
		password.type='text';
		showBtn.innerText = 'Hide';
	} else {
		password.type='password';
		showBtn.innerText = 'Show';
	}
}

showBtn001.onclick = () =>{
	if (confirm__password.type=='password') {
		confirm__password.type='text';
		showBtn001.innerText = 'Hide';
	} else {
		confirm__password.type='password';
		showBtn001.innerText = 'Show';
	}
}

const validate__error =(element, message) => {
	const valid = element.parentElement;
	const errorDisplay = valid.querySelector('.error');

	errorDisplay.innerText = message;
	valid.classList.add('error');
	valid.classList.remove('success');

}

const validate__error_radio =(element, message) => {
	const valido = element.parentElement;
	const valid = valido.parentElement;
	const errorDisplay = valid.querySelector('.error');

	errorDisplay.innerText = message;
	valid.classList.add('error');
	valid.classList.remove('success');

}

const validate__success = element => {
	const valid = element.parentElement;
	const errorDisplay = valid.querySelector('.error');

	errorDisplay.innerText = "";
	valid.classList.add('success');
	valid.classList.remove('error');

}

const validate__success_radio = element => {
	const valido = element.parentElement;
	const valid = valido.parentElement;
	const errorDisplay = valid.querySelector('.error');

	errorDisplay.innerText = "";
	valid.classList.add('success');
	valid.classList.remove('error');

}

const Validate = () => {
	
	const firstname1 = firstname.value.trim();
	const lastname1 = lastname.value.trim();
	const title1 = title.value.trim();
	// const male1 = male.value;
	// const female1 = female.value;
	// const box1 = box.value.trim();
	const email1 = email.value.trim();
	const password1 = password.value.trim();
	const confirm__password1 = confirm__password.value.trim();

	const isValidName = name => {
		const reg__ex = /^[A-Z\' .-]$/i;
		return reg__ex.test(String(name))
	}

	const isMoreThanOe = name => {
		const reg__ex = /^[A-Z\' .-]{2,45}$/i;
		return reg__ex.test(String(name))
	}

	const isValidPassword = name => {
		const reg__ex = /^(\w*(?=\w*\d)(?=\w*[a-z])(?=\w*[A-Z])\w*){6,}$/;
		return reg__ex.test(String(name));
	}

	if (firstname1==="") {
		validate__error(firstname, 'field cant be empty');
	} else if(!isMoreThanOe(firstname1)){
		validate__error(firstname, 'filed must cotain more than one character' );

		if(!isValidName(firstname1)){
			validate__error(firstname, 'name can only contain letters' );
		}

	} else{
		validate__success(firstname);
	}

	if (lastname1==="") {
		validate__error(lastname, 'field cant be empty');
	}  else if(!isMoreThanOe(lastname1)){
		validate__error(lastname, 'filed must cotain more than one character' );

		if(!isValidName(lastname1)){
			validate__error(lastname, 'name can only contain letters' );
		}

	} else{
		validate__success(lastname);
	}
	// if (title1==="") {
	// 	validate__error(title, 'Select a title');
	// } else{
	// 	validate__success(title);
	// }

	if (title1==="") {
		validate__error(title, 'Select a title');
	} else {
		validate__success(title);
	}

	if ((document.getElementById("male").checked==false) && (document.getElementById("female").checked==false)) {
		validate__error_radio(male, 'Please Select Your Gendar');
	} else{
		validate__success_radio(male);
	}

	if ((document.getElementById("box").checked==false)) {
		validate__error_radio(box, 'Please Tick Box');
	} else{
		validate__success_radio(box);
	}

	// if (email1==="") {
	// 	validate__error(email, 'field cant be empty');
	// }else{
	// 	validate__success(email);
	// }

	if (password1==="") {
		validate__error(password, 'field cant be empty');
	} else if(!isValidPassword(password1)){
		validate__error(password, 'Password must contain an uppercase and a lowercase letter, a number and must be more then 6' );
	}else{
		validate__success(password);
	}

	if (confirm__password1==="") {
		validate__error(confirmPassword, 'field cant be empty');
	} else if(!isValidPassword(confirm__password1)){
		validate__error(confirmPassword, 'confirm password does not match original password' );
	}else{
		validate__success(confirmPassword);
	}
}