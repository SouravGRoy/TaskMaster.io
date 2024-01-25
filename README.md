TaskMaster.io

This repository contains both the frontend and backend implementations for a feature-rich Todo application. The application allows users to efficiently manage their tasks, providing functionalities such as creating new todos, editing existing ones, marking tasks as completed, and user authentication.

## Backend

### Getting Started

#### Prerequisites

Ensure that you have Node.js and PostgreSQL installed on your machine.

#### Installation

1. Clone the backend repository:

   ```bash
   git clone https://github.com/your-username/todo-app-backend.git
   ```

2. Install dependencies:

   ```bash
   cd todo-app-backend
   npm install
   ```

3. Set up your PostgreSQL database and update the `./db/config.js` file with your database configuration.

4. Run the backend application:

   ```bash
   npm start
   ```

   The server will be running on the specified port (default is 8000).

#### Configuration

In the `./config.js` file, you can configure the following:

- **Port**: The port on which the server will run. Default is 8000.

#### Endpoints

- **Get Todos**:
  - **URL**: `/todos/:userEmail`
  - **Method**: `GET`
  - **Description**: Retrieve todos for a specific user based on their email.

- **Create a Todo**:
  - **URL**: `/todos`
  - **Method**: `POST`
  - **Description**: Create a new todo.

- **Edit a Todo**:
  - **URL**: `/todos/:id`
  - **Method**: `PUT`
  - **Description**: Edit a todo based on its ID.

- **Delete a Todo**:
  - **URL**: `/todos/:id`
  - **Method**: `DELETE`
  - **Description**: Delete a todo based on its ID.

- **User Authentication**:
  - **Sign Up**:
    - **URL**: `/signup`
    - **Method**: `POST`
    - **Description**: Create a new user account.

  - **Login**:
    - **URL**: `/login`
    - **Method**: `POST`
    - **Description**: Authenticate and generate a JWT token for the user.

## Frontend

### Getting Started

#### Prerequisites

Ensure that you have Node.js installed on your machine.

#### Installation

1. Clone the frontend repository:

   ```bash
   git clone https://github.com/your-username/todo-app-frontend.git
   ```

2. Install dependencies:

   ```bash
   cd todo-app-frontend
   npm install
   ```

3. Set up the environment variables in the `.env` file. Define `REACT_APP_SERVERURL` with the URL of your backend server.

4. Run the frontend application:

   ```bash
   npm start
   ```

   The application will be running on the specified port.

### Components

- **App Component**:
  - **Dependencies**:
    - React
    - useState
    - useEffect
  - **Usage**: Manages the state of tasks, fetches data from the backend, and renders the main application.

- **ListHeader Component**:
  - **Dependencies**:
    - React
  - **Usage**: Renders the header of the todo list, including an input field for adding new tasks.

- **ListItem Component**:
  - **Dependencies**:
    - React
  - **Usage**: Renders individual todo items, providing options for editing and deleting tasks.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
