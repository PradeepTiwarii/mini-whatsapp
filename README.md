# Chat Application

This project is a simple chat application built with Node.js, Express, MongoDB, and EJS. It allows users to create, view, edit, and delete chat messages. The server renders views using EJS templates and communicates with a MongoDB database to manage the chat messages.

## Features

- View all chats
- Create new chat messages
- Edit existing chat messages
- Delete chat messages
- Server-side rendering with EJS
- RESTful routing
- MongoDB for data storage

## Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- EJS templating engine
- Method-Override for PUT and DELETE requests

## Installation

### Prerequisites
Ensure that you have the following installed on your system:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Steps

1. Clone the repository
   ```bash
   git clone https://github.com/PradeepTiwarii/mini-whatsapp.git
   ```

2. Navigate to the project directory
   ```bash
   cd mini-whatsapp
   ```

3. Install the dependencies
   ```bash
   npm install
   ```

4. Start the MongoDB server (if not already running)
   ```bash
   mongod
   ```

5. Run the application
   ```bash
   node app.js
   ```

6. Visit `http://localhost:8080` in your browser to see the app in action.

## Folder Structure

- `models/chat.js` - Defines the MongoDB schema for the Chat model.
- `views/` - Contains EJS templates for rendering views:
  - `index.ejs` - Displays all chats.
  - `new.ejs` - Form to create a new chat.
  - `edit.ejs` - Form to edit an existing chat.
- `public/` - Contains static files (CSS, images, etc.).

## API Routes

- `GET /chats` - View all chats.
- `GET /chats/new` - Display form to create a new chat.
- `POST /chats` - Create a new chat.
- `GET /chats/:id` - View a specific chat.
- `GET /chats/:id/edit` - Display form to edit a chat.
- `PUT /chats/:id` - Update a chat message.
- `DELETE /chats/:id` - Delete a chat message.

## Database

The application uses MongoDB as the database. It stores chat messages in the following format:

- `from` - Sender of the message.
- `to` - Recipient of the message.
- `msg` - The chat message.
- `created_at` - Timestamp of when the message was created.

## License

This project is open-source and available under the MIT License.

## Acknowledgements

- Express.js for the web framework
- MongoDB for the database
- EJS for templating
- Mongoose for database interaction

