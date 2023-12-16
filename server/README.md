# Overview of the Server
This directory contains the node.js server to run the prototype server for the Flutter translation app. The main purpose for this server is to provide word translations to the React Native app as required using the below listed `GET` requests.

It is important to note that the server currently assumes that all initial language translations are in English, that is English --> language x. This is because I am not entirely sure how to query the database to search all fields, and I am open to discussion on how this can be achieved.

## Running the Server
The first time you run the server, you need to run a `npm install` for all required dependencies to be installed locally.

Then, each time you go to run the server, simply navigate to the server directory and run `npm run start`.

Once you see a message stating `listening on port 3000`, the server is ready to go and you can now navigate to `localhost:3000` and perform API requests here.

## Available API Requests
### `GET /`
Returns all words stored within the database and their translations.

### `GET /:word`
Returns all translations available for the entered word.

If the word is not stored in the database, the server returns an error 404.

### `GET /:word/:lang`
Returns the transation for the provided word in the desired language if it is available. If there is no translation, it will return nothing.

If either the word is not stored in the database or a translation for an available word is not stored in the database, the server returns an error 404. *(I may consider adding a second type of error, but for simplicity sakes, I'm just keeping them both as 404.)*

## Libraries Used
- **Express**: for supporting GET requests
- **Mongoose**: for linking up to MongoDB
- **Nodemon**: for running the actual Node server and restarting where any changes are made.

## Development Intentions
Currently, there is no intention to add a `PUT` request as this would require greater scrutiny and discussion around who can add words and translations into the database. For now, the main focus is to design an API that can retrieve any stored translations in the database.

Another option, where time permits, is that I could set up a separate application that allows users to register an add words and translations to the database themselves.