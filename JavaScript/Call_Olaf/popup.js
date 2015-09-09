function summonOlaf(){
    chrome.tabs.executeScript(null,{
        file:"content_script.js"
    });
};

// when the extension loads, assign the bringTheOlaf button the
// summonOlaf function on the click action
document.addEventListener("DOMContentLoaded", function(){
    bringTheOlaf.addEventListener('click',summonOlaf);
});
