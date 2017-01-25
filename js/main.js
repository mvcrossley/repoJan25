(function(){

	//To open an ajax server locally: python -a SimpleHTTPServer

	var httpRequest,
	ajaxText = document.querySelector('.placeholder');
	ajaxButton = document.querySelector('.wrapper');

	function makeRequest(url)
	{
		httpRequest = new XMLHttpRequest();

		if(!httpRequest) // Checking to make sur ethe browser isn't too old
		{
			alert('Giving up, your browser is too old!');
			return false; // This exits out of a function, will execute the next line after function is closed
		}

		httpRequest.onreadystatechange = showResult; 
		httpRequest.open('GET', url); //Passing in a url through a get protocol, in this case, the "text.txt" file
		httpRequest.send(); 
	}

	function showResult()
	{
		if(httpRequest.readyState === XMLHttpRequest.DONE)
		{
			if(httpRequest.status === 200)
			{
				var response =  httpRequest.responseText;
				ajaxText.innerHTML = response;
			}
			else
			{
				console.log('There was a problem with your request.');
			}
		}
	}

	
	ajaxButton.addEventListener('click', function() {makeRequest('text.txt');}, false);

})();
