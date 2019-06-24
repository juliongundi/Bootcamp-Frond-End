function makeRequest() {
    let httpRequest = new XMLHttpRequest();

    function handleResponse(response) {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                console.log(JSON.parse(httpRequest.responseText))
            } else {
                alert("There was an error");
            }
        }
    }
    httpRequest.onreadytatechange = handleResponse;
    httpRequest.open('GET', 'https://pokeapi.co/api/v2/pokemon');
    httpRequest.send();

};