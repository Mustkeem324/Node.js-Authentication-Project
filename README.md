# Node.js Authentication Project

This Node.js application provides robust authentication features including sign-up, sign-in, password management, and Google OAuth integration.

## Live Demo

Explore the live demo [here](https://6f911064-991f-4f65-981c-2c530ccf5639-00-28i27l1i2rv3i.pike.replit.dev/).

## Features

- **Sign up with Email:** Create an account using email and password.
- **Sign In/Out:** Authenticate with email/password and sign out.
- **Password Reset:** Reset forgotten passwords securely.
- **Google Login/Signup:** Use Google accounts for seamless authentication.
- **Password Security:** Utilizes bcrypt for password encryption.
- **reCAPTCHA:** Integrated to enhance security during sign-up and login.

## Environment Variables

To run the application locally, set up these environment variables in a `.env` file:

```plaintext
PORT=5000
DB_URL=mongodb://localhost:27017/mydatabase
CLIENT_ID=your_client_id
CLIENT_SECRET=your_client_secret
EMAIL=your_email@gmail.com
PASSWORD=your_gmail_password
RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key
CLIENT_URL=http://localhost:3000/auth/login/success
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Mustkeem324/Node.js-Authentication-Project.git
   ```
2. Navigate to the project directory:
   ```bash
   cd node-authentication
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   npm start
   ```
5. Access the application in your browser at `http://localhost:5000`.


## Dependencies

- Express.js
- MongoDB
- Passport.js
- bcrypt
- express-session
- express-ejs-layouts
- dotenv
- nodemailer

## Contributing

Contributions are welcome! Submit issues or pull requests to improve the project.

## Credits

  Created by [MUSTKEEM AHAMD](https://github.com/mustkeem324).
