function getRandomIntFromTo(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function getClickID() {
	if(event.target.id == winning_number) {
		alert("Correct!");
		winning_number = getRandomIntFromTo(1, n);
		document.getElementById('winner').innerText = winning_number;
	} else {
		alert("Try, try... Try again!");
	}
}

let n = prompt("Pick number of buttons (1 to 99):");
let winning_number = getRandomIntFromTo(1, n);
for(let i = 1; i <= n; ++i) {
	document.getElementById("container").innerHTML += '<div class="btn"><button id="' + i +'" onclick="getClickID()">' + i +'</button></div>'
}
document.getElementById('winner').innerText = winning_number;
