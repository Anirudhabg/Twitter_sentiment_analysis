document.getElementById('analyzeButton').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "getSelectedText" }, (response) => {
      try {
        if (response === undefined || response.selectedText === undefined) {
          throw new Error('Response or selectedText is undefined.');
        }

        // Proceed with analysis
        document.getElementById('selectedText').textContent = response.selectedText;
        console.log('Selected Text:', response.selectedText);
        
        // Send the selected text to the backend for analysis
        fetch('http://localhost:5000/analyze', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ text: response.selectedText })
        })
        .then(response => {
          console.log('Response status:', response.status);
          if (!response.ok) {
            throw new Error('HTTP error! status: ' + response.status);
          }
          return response.json();
        })
        .then(data => {
          console.log('Response Data:', data);
          document.getElementById('result').textContent = `Sentiment: ${data.sentiment}`;
        })
        .catch(error => {
          console.error('Error analyzing sentiment:', error);
          document.getElementById('result').textContent = 'Error analyzing sentiment.';
        });
      } catch (error) {
        console.error('Error handling response:', error);
        document.getElementById('result').textContent = 'Error handling response.';
      }
    });
  });
});
