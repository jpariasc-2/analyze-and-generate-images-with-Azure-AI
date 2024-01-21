//code a function 'analyzeImage' to call the Azure AI Vision service Image Analysis 4.0 API. 
//The function should receive as input the image URL and return the JSON response of the API.

function analyzeImage(imageUrl) {
  const subscriptionKey = "ac809c91158f4401a47cafe96617c1ea";
  const endpoint = "https://jp-test-azure-ia.cognitiveservices.azure.com/";
  const uriBase = endpoint + "vision/v4.0/analyze";
  const imageUrlInput = document.getElementById("imageUrl");

  // Request parameters.
  const params = {
    "visualFeatures": "Categories,Description,Color",
    "details": "",
    "language": "en",
  };

  // Perform the REST API call.
  fetch(uriBase + "?" + new URLSearchParams(params), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': subscriptionKey
    },
    body: JSON.stringify({ "url": imageUrl })
  })
    .then(response => response.json())
    .then(json => DisplayResults(json))
    .catch(error => console.log(error));
}

//add a 'DisplayResults' function to display the results of the API call in a readable format, along with the URL of the processed image.
function DisplayResults(json) {
  const results = document.getElementById("results");
  results.innerHTML = "";
  results.innerHTML += "<p>Image URL: " + json["metadata"]["url"] + "</p>";
  results.innerHTML += "<p>Image description: " + json["description"]["captions"][0]["text"] + "</p>";
  results.innerHTML += "<p>Image tags: " + json["description"]["tags"].join(", ") + "</p>";
  results.innerHTML += "<p>Image category: " + json["categories"][0]["name"] + "</p>";
  results.innerHTML += "<p>Image primary color: " + json["color"]["dominantColorForeground"] + "</p>";
}