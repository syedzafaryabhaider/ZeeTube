# ZeeTube App Backend

This is an individual project for backend development.


## Table of Contents

- [Description](#description)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Contact](#contact)


## Description

This project is a robust backend built with NodeJs, ExpressJS and MongoDB, designed to handle a variety of operations for a social media-like platform. It includes user controllers that manage registration, login, logout, and other user-related functionalities. The video controller allows users to perform CRUD operations on videos. Similarly, users can create, read, update, and delete comments and community post. The like controller enables users to like videos, comments, and community, enhancing user interaction and engagement. Additionally, a dashboard controller provides an overview of user activities and interactions. This backend serves as a solid foundation for a future frontend, paving the way for a full-stack social media application.


## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of Node.js and npm.
- You have read guide to Express.js.
- You have a basic understanding of JavaScript and MongoDB.
- You have MongoDB installed or have a MongoDB Atlas account.


## Installation

Follow these steps to get the project set up on your local machine:

1. **Clone the repository**: First, you will need to clone the repository to your local machine. You can do this with the following command:

    ```bash
    git clone https://github.com/syedzafaryabhaider/ZeeTube.git
    ```

2. **Navigate to the project directory**: Change your current directory to the project's directory:

    ```bash
    cd ZeeTube
    ```

3. **Install the dependencies**: Now, you can install the necessary dependencies for the project:

    ```bash
    npm install
    npm install -g nodemon
    npm install dotenv cloudinary mongoose mongoose-aggregate-paginate-v2 bcrypt jsonwebtoken express cors cookie-parser cloudinary multer

    ```

4. **Set up environment variables**: Copy the `.env.example` file and rename it to `.env`. Then, fill in the necessary environment variables.

5. **Start the server**: Finally, you can start the server:

    ```bash
    npm run dev
    ```

Now, you should be able to access the application at `http://localhost:8000` (or whatever port you specified).


## Usage

This project is a backend application, so you'll interact with it using API endpoints. Here are some examples:

**User Registration**

To register a new user, send a POST request to `/api/v1/users/register` with the following data:

```json
{
  "username": "example",
  "email": "example@email.com",
  "password": "examplepassword",
  "fullName": "Example User",
  "avatar": "avatar.jpg",
  "coverImage": "coverImage.jpg",
}


```

**User Login**

To login, send a POST request to `/api/v1/users/login` with the following data:

```json
{
  "email": "example@email",
  "password": "examplepassword"
}
```

**User Logout**

To logout, send a POST request to `/api/v1/users/logout` .

There a lot of endpoint you can see in routes.


## Contributing

This project is open source and it is based on learning. Contributions to ZeeTube are welcome! If you have suggestions or improvements, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add some feature'`).
5. Push to the branch (`git push origin feature/YourFeature`).
6. Create a new Pull Request.


## Tests

This project uses Postman for testing its API endpoints. 
I have provided the postman collection file, import it in your postman collection and set the environment variables.
Variable : zeetube  Value : http://localhost:8000/api/v1/

File name: `zeetube.postman_collection.json`

The tests cover the following areas:

- User registration, login, and logout
- Video CRUD operations
- Comment CRUD operations
- Community CRUD operations
- Liking videos, comments, and Community
- Dashboard functionality

Please note that you'll need to update the environment variables in Postman to match your local setup (e.g., `base_url`, `user_token`).


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


## Contact

Thank you for checking out ZeeTube!
We hope you enjoy using it. If you have any questions or feedback, feel free to reach out via [LinkedIN](http://www.linkedin.com/in/syed-zafaryab-haider).