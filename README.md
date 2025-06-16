# Anapnoe Resort Website

A luxury resort website built with the MERN stack (MongoDB, Express.js, React.js, Node.js) featuring a modern, elegant design inspired by high-end hospitality websites.

## Features

- Full-screen video header with dictionary-inspired copy
- Responsive design with seamless transitions
- Modern UI with Material-UI components
- Interactive room booking system
- Contact form with real-time validation
- Admin dashboard for managing bookings and content

## Tech Stack

- **Frontend:**
  - React.js
  - Material-UI
  - Framer Motion for animations
  - React Router for navigation
  - Axios for API calls

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB with Mongoose
  - JWT for authentication
  - Multer for file uploads

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/anapnoe-resort.git
   cd anapnoe-resort
   ```

2. Install dependencies:
   ```bash
   # Install server dependencies
   npm install

   # Install client dependencies
   cd client
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

4. Start the development server:
   ```bash
   # Run both frontend and backend
   npm run dev

   # Run backend only
   npm run server

   # Run frontend only
   npm run client
   ```

## Project Structure

```
anapnoe-resort/
├── client/                 # React frontend
│   ├── public/            # Static files
│   └── src/               # Source files
│       ├── components/    # Reusable components
│       ├── pages/         # Page components
│       ├── context/       # React context
│       └── utils/         # Utility functions
├── models/                # MongoDB models
├── routes/                # API routes
├── middleware/            # Custom middleware
├── config/               # Configuration files
└── server.js             # Entry point
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Design inspiration from luxury resort websites
- Material-UI for the component library
- Framer Motion for smooth animations 