document.getElementById("button1").addEventListener("click", myFunction);

function myFunction() {
	var x = document.getElementById("myText").value;

	fetch("https://api.datamuse.com/words?rel_jjb=" + x)
		.then(result => {
			//console.log(result);
			return result.json();
		})
		.then(function(data) {
			let html = "";

			data.forEach(function(lijst) {
				html = `<li>
				${lijst.word}</li>
				
				`;
				console.log(lijst);
			});
			document.getElementById("result").innerHTML = html;
			console.log(data);
		})
		.catch(error => console.log(error));

	speaks = [
		{
			name: "Alex",
			lang: "en-US"
		},
		{
			name: "Moira",
			lang: "en-IE"
		}
	];

	const msg = new SpeechSynthesisUtterance();
	msg.volume = 1; // 0 to 1
	msg.rate = 1; // 0.1 to 10
	msg.pitch = 1; // 0 to 2
	msg.text = "iced out";
	const voice = speaks[0]; //47
	console.log(`Voice: ${voice.name} and Lang: ${voice.lang}`);
	msg.voiceURI = voice.name;
	msg.lang = voice.lang;
	speechSynthesis.speak(msg);
}
