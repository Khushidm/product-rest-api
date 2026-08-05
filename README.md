# Product REST API

A RESTful CRUD API built using Node.js, Express.js, MongoDB, and Mongoose.

## Features

- Create products
- Get all products
- Get a single product
- Update products using PUT
- Partially update products using PATCH
- Delete products
- Mongoose schema validation
- Error handling
- HTTP request logging using Morgan
- MongoDB Atlas integration

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Morgan
- dotenv
- Postman

## Project Structure

product-api/
│
├── src/
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   └── Product.js
│   ├── routes/
│   │   └── productRoutes.js
│   └── server.js
│
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
└── README.md

## Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL