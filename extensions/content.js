// Listen for messages from the background script or popup script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // Check if the action is to get the selected text
  if (request.action === "getSelectedText") {
    // Get the selected text
    const selectedText = window.getSelection().toString();
    // Send the selected text back as a response
    sendResponse({ selectedText: selectedText });
  }
});
