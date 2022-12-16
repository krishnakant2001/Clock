var h = document.getElementById("h");
var m = document.getElementById("m");
var s = document.getElementById("s");
var dot = document.getElementsByClassName("dot");

setInterval(() => {
	d = new Date(); //object of date()

	hr = d.getHours();
	min = d.getMinutes();
	sec = d.getSeconds();
	ms = d.getMilliseconds();
	
	hr_rotation = 30 * hr + min/2; 
	min_rotation = 6*min + 0.1 * sec;
	sec_rotation = 6*sec + 0.006 * ms;

	//ES6
	hh.style.transform = `rotate(${hr_rotation}deg)`;
	mm.style.transform = `rotate(${min_rotation}deg)`;
	ss.style.transform = `rotate(${sec_rotation}deg)`;

	if(hr < 10){
		hr = "0" + hr ;
	}

	if(min < 10){
		min = "0" + min ;
	}
	
	if(sec < 10){
		sec = "0" + sec ;
	}
	
	dot[0].innerHTML = ":";
	dot[1].innerHTML = ":";

	h.innerHTML = hr;
	
	m.innerHTML = min;
	
	s.innerHTML = sec;

}, );

setInterval(() => {

	const time_hr = new Date().getHours();

	let text;

	if((time_hr < 12) && (time_hr >= 4)){
		text = "!!! Good Morning !!!";
	}
	else if((time_hr < 16) && (time_hr >= 12)){
		text = "!! Good Afternoon !!";
	}
	else if((time_hr >= 16) && (time_hr <= 23)){
		text = "!!! Good Evening !!!";
	}
	else{
		text = "! Good Night !";
	}

	// if(time_hr > 12){
	// 	text = "Pratham ";
	// }
	// else{
	// 	text = "Krishna Kant";
	// }

	document.getElementById("greeting").innerHTML = text;
}, )

