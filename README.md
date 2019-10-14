# Hangman

This is a Hangman game using vanilla Javascript that uses a local API to randomize words for the game. This is a 1 player game, which the user types letter guesses to figure out the word that the computer chooses. The user has 6 attempts to uncover letters, the user loses the game after failing to guess the word by the 6th attempt.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You need to create a local server to be able to run the local API. To do this, we need to create a new js file with the following code:

```
var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8080, function(){
    console.log('Server running on 8080...');
});
```
Save this file with the rest of the hangman files (index.html, css, and app.js)


### Installing

Locate your hangman folder.


Then type the following at the command shell

```
npm install connect serve-static
```

cd into where the server.js file is and run the following to run the local server:
```
node server.js
```

Type the following in your browser to access the local server:
```
localhost:8080/public/hangman.html
```

Note: the path after localhost:8080 depends on where you store the hangman.html file.


## Running the App

Go to your browser's inspection tool so that you can see the randomized word chosen. 
Type into the page to guess letters
Type incorrect letters to see the number of guesses decrease.

## Built With

* JavaScript
* HTML
* CSS
* Word bank by LinkedIn

## Author

* **Raymond Carpio** 

## Acknowledgments

* Word bank by LinkedIn

