# poe-trade-fuzzy-search - [Install Link](https://github.com/D4Enjoyer/poe-trade-fuzzy-search/raw/main/poe-trade-fuzzy-search.user.js)

## Description

This user script enhances the Path of Exile Trade website experience by enabling automatic activation of Fuzzy Search, while still allowing users to easily perform custom searches with placeholders represented by asterisks (\*). 

## Demo

<img src="https://i.imgur.com/H9zFP70.gif" alt="Script Demo">

## How it Works

The script utilizes event listeners to detect keyboard input and modify search queries accordingly:
- **Fuzzy Search Activation:** Automatically applies Fuzzy Search
  - **Tilde Insertion:** Adds a tilde (\~) at the start of the search query for fuzzy search functionality.
  - **Tilde Removal:** Removes the tilde if an asterisk (\*) is entered for a custom search.
- **Fuzzy Search Deactivation:** Automatically "deactivates" Fuzzy Search when a space is used as the first character of a search. 
- **Input Clear Reactivation:** Reactivates fuzzy search when the search input is cleared.

## Installation

1. **Install a Userscript Manager**: Use a browser extension like Tampermonkey.
2. **Install the Script**: Add the script to your userscript manager by clicking on the [Install Link](https://github.com/D4Enjoyer/poe-trade-fuzzy-search/raw/main/poe-trade-fuzzy-search.user.js) or in any other way that you prefer.

## Usage

1. **Access Path of Exile Trade Website:** Open the Path of Exile Trade website.
2. **Perform Searches:**
   - Type your search query in the search box.
   - The script will automatically activate fuzzy search.
   - The script will handle the fuzzy search functionality based on your input.

## Author

- A God Gamer with support from his dear friend ChatGPT
