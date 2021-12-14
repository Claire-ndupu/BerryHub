//JOKES API
const container = document.getElementById('container');

getPost();
// getPost();
// getPost();



async function getPost() {
	const postResponse = await fetch(`https://v2.jokeapi.dev/joke/Programming,Miscellaneous?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart&amount=3`);
	
	const postData = await postResponse.json();

	//https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit

	//https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single
	
	//http://quotes.stormconsultancy.co.uk/quotes/${getRandomNr()}.json`
	// GET http://quotes.stormconsultancy.co.uk/quotes/1.json

	const post2Response = await fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single');
 	const post2Data = await post2Response.json();
	
	const data = { post: postData.jokes[0] , post2: postData.jokes[1] ,post3: postData.jokes[2] , line: post2Data};
	
	addDataToDOM(data);
}

function getRandomNr() {
	return Math.floor(Math.random() * 44) + 1;//to find random number btw 1 to 100
}

function addDataToDOM(data) {

	container.innerHTML= "";

	const postElement = document.createElement('div');
	postElement.classList.add('jokes');
	postElement.innerHTML = `

		<br>
		
		<h2 class="title">${data.post.setup}</h2>

		<h2 class="title">-${data.post.delivery}</h2>
		<br>

		<h2 class="title"> ${data.post2.setup}</h2>

		<h2 class="title">-${data.post2.delivery}</h2>
		<br>

		<h2 class="title">${data.post3.setup}</h2>

		<h2 class="title">-${data.post3.delivery}</h2>
		<br>

		
		<h2 class="title">${data.line.joke}</h2>
		<br><br><br><br><br>


	`;
	container.appendChild(postElement);
	
}
