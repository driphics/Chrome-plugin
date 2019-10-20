let highlightText = document.getElementById('highlight-text');
let copyText = document.getElementById('copy-text');
let boldText = document.getElementById('bold-text');
let italicizeText = document.getElementById('italicize-text');

//Bolden Selected Text
boldText.onclick = function() {
    // let selectedText = window.getSelection();
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: "document.designMode = 'on'; document.execCommand('bold'); document.designMode = 'off';"});
      });
}

//Yayy! The first one worked!

//Copy Selected Text
copyText.onclick = function() {
    // let selectedText = window.getSelection();
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: "document.designMode = 'on'; document.execCommand('copy'); document.designMode = 'off';alert('Text Copied!');"});
      });
}

//Italicize Selected Text
italicizeText.onclick = function() {
    // let selectedText = window.getSelection();
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: "document.designMode = 'on'; document.execCommand('italic'); document.designMode = 'off'"});
      });
}

//Highlight Selected Text
highlightText.onclick = function() {
    // let selectedText = window.getSelection();
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: "document.designMode = 'on'; document.execCommand('hiliteColor',false,'#ffff00'); document.designMode = 'off'"});
      });
}

