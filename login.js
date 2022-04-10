var objPeople = [
	{
		email: 'marko@yahoo.com',
		password: '1111'
	},
	{
		email: 'dusko@yahoo.com',
		password: '2222'
	},
	{
		email: 'milos@yahoo.com',
		password: '333'
	}
];


function login() {
	var email = document.getElementById("email").value;
	var password = document.getElementById('password').value;

	
	for(var i = 0; i < objPeople.length; i++) {
		if(email == objPeople[i].email && password == objPeople[i].password) {
			 window.location.href = "projekat prvi.html";
			
			break;
		} else {
			window.alert("Pogresan email ili sifra");
		}
	}
}