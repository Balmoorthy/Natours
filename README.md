# 🏞️ Tour Booking Application

This is a full-featured tour booking application built using **Express.js** for the backend and **MongoDB** for data storage. The front-end is developed using **Pug** templates. This application includes features such as RESTful API design, middleware implementation, authentication, authorization, and more.

## 🚀 Features

### Backend (Express.js, MongoDB, Mongoose)
- **RESTful API**: Built robust APIs for handling tour and user data.
- **HTTP Methods**:
  - `GET`: Fetch tours, users, or specific resources.
  - `POST`: Add new tours, users, or bookings.
  - `PATCH`: Update existing resources like user profile or tour information.
  - `DELETE`: Remove tours, users, or bookings.
- **File Uploads**: Users can upload profile pictures.
- **Password Management**: Users can update passwords and initiate password resets using tokens.
- **Custom Middleware**: Built custom middleware and integrated 3rd-party libraries.
- **User Authentication**: Implemented user authentication using **JWT tokens** for secure access.
- **User Authorization**: Protected routes based on user roles and permissions.
- **Password Reset**: Implemented password reset functionality using tokens.
- **Email Notifications**: Integrated email service for sending notifications.
- **Data Sanitization & Security**: Protected against NoSQL injections and sanitized inputs.
- **Aggregation Pipelines**: Utilized MongoDB aggregation for complex data handling such as matching, grouping, and projecting.
- **Improved Performance**: Enhanced read performance using MongoDB indexing.

### Frontend (Pug)
- Dynamic rendering of HTML using **Pug templates**.

### Tools
- **Postman**: Used for API testing and response validation.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB.
- **NDB**: Debugging tools for Node.js.
- **JWT**: Used for user authentication and authorization.
- **Nodemailer** or **SendGrid**: For sending emails (e.g., password reset emails).

## 🛠️ Technologies Used
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Frontend**: Pug
- **Authentication**: JWT, bcrypt
- **Security**: Data sanitization, NoSQL injection protection, XSS prevention
- **Error Handling**: Global error handling for catching errors in asynchronous functions.

## 📚 API Endpoints

### Tours
- **GET** `/api/v1/tours` – Fetch all tours
- **POST** `/api/v1/tours` – Create a new tour (Admin only)
- **GET** `/api/v1/tours/:id` – Get a tour by ID
- **PATCH** `/api/v1/tours/:id` – Update a tour by ID (Admin only)
- **DELETE** `/api/v1/tours/:id` – Delete a tour by ID (Admin only)

### Users
- **GET** `/api/v1/users` – Fetch all users (Admin only)
- **POST** `/api/v1/users/signup` – Sign up a new user
- **POST** `/api/v1/users/login` – Login a user
- **PATCH** `/api/v1/users/updateMe` – Update the logged-in user's profile
- **PATCH** `/api/v1/users/updateMyPassword` – Change the logged-in user's password
- **POST** `/api/v1/users/forgotPassword` – Initiate password reset
- **PATCH** `/api/v1/users/resetPassword/:token` – Reset password with token
- **DELETE** `/api/v1/users/deleteMe` – Delete the logged-in user's account

### File Uploads
- **POST** `/api/v1/users/uploadPhoto` – Upload a user profile photo

### Security
- **JWT Authentication**: Secure the routes using JSON Web Tokens.
- **Authorization**: Restrict access to specific resources based on user roles.

## 🧰 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Balmoorthy/Natours.git   
2. Install dependencies:
   ```bash
   npm install
3. Create a `.env` file and add the following environment variables:
   - `DATABASE` - MongoDB connection string. 
   - `DATABASE_PASSWORD` - MongoDB Database password 
   - `JWT_SECRET` - Secret for signing JWT tokens 
   - `JWT_EXPIRES_IN` - Token expiration time
   - `JWT_COOKIE_EXPIRES_IN` - Cookie expiration time 
   - `EMAIL_SERVICE` - Email service provider (e.g., SendGrid) 
   - `EMAIL_USERNAME` -  Email service username
   - `EMAIL_PASSWORD` - Email service password
4. Start the development server:
   ```bash
   npm run start

# 📄 API Documentation

You can test the API using Postman. Import the provided https://documenter.getpostman.com/view/38522747/2sAXxQdrq6 to easily test all the endpoints.

# 📫 Contact

For any questions or support, feel free to open an issue or contact me at [tamilanbala72@gmail.com].
