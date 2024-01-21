//App to analyzer or generate images

import React from 'react';
import analyzeImage from './azure-image-analysis.js';


//create a simple GUI (App.js function) with a title and text box to enter the URL of the image to be analyzed or the prompt of the image to generate
// Create a button to trigger the image analysis and one to trigger image generation
// Display the results of the image analysis or the generated image
// Call the 'analyzeImage' function (url image is a parameter), in a way that the image analysis action is triggered when the 'Analyze' button is pressed.
// call 'DisplayResults' function to display the results of the API call in a readable format, along with the URL of the processed image.

function App() {
  return (
    <div className="App">
      <h1>Azure Image Analyzer</h1>
      <input type="text" id="imageUrl" placeholder="Enter image URL" />
      <button onClick={() => analyzeImage(document.getElementById("imageUrl").value)}>Analyze</button>
      <div id="results">Computer vision analysis</div>
      
    </div>
  );
}

export default App;