// ==UserScript==
// @name         poe-trade-fuzzy-search
// @namespace
// @version      1.0
// @description  Automatically activates Fuzzy Search on the Path of Exile Trade website, while letting the user easily run custom searches containing asterisks (placeholder)
// @author       A God Gamer with his dear friend ChatGPT
// @match        https://www.pathofexile.com/trade*
// @grant        none
// ==/UserScript==

let fuzzySearchActivated = true;

document.body.addEventListener("keydown", handleFuzzySearch);
document.body.addEventListener("paste", function(e) { setTimeout(handleFuzzySearch, 0, e) });

// Function to handle the main fuzzy search logic
function handleFuzzySearch(e) {
    if (e.target.classList.contains("multiselect__input")) {
        handleTildeInsertion(e); // Call function to add tilde for fuzzy search
        handleTildeRemoval(e); // Call function to remove tilde when asterisk is entered
        handleInputClear(e); // Call function to reactivate fuzzy search when input is cleared
    }
}

// Function to handle the insertion of the tilde (~) for fuzzy search
function handleTildeInsertion(e) {
    if (e.target.selectionStart === e.target.selectionEnd) {
        if (!e.target.value.startsWith("~") && !e.target.value.startsWith(" ") && e.key !== " ") {
            if (fuzzySearchActivated && !e.target.value.includes("*")) {
                e.target.value = "~" + e.target.value; // Add tilde for fuzzy search
            }
        }
    }
}

// Function to handle the removal of the tilde if an asterisk (*) is entered
function handleTildeRemoval(e) {
    if (e.key === "*") {
        if (e.target.value.startsWith("~")) {
            e.target.value = e.target.value.slice(1); // Remove the tilde
        }
        fuzzySearchActivated = !e.target.value.includes("*"); // Toggle fuzzy search based on asterisk presence
    }
}

// Function to handle reactivating fuzzy search when input is cleared
function handleInputClear(e) {
    if (e.target.value === "" && fuzzySearchActivated === false) {
        fuzzySearchActivated = true;
    }
}
