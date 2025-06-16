![2E184A63-446A-4F88-8AE9-8A58B13F6E96](https://github.com/user-attachments/assets/bda1928d-894f-4bd0-b5ae-00af85b19e7c)Anapnoe Resort Website

A luxury resort website built with the MERN stack (MongoDB, Express.js, React.js, Node.js) featuring a modern, elegant design inspired by high-end hospitality websites.
Welocme page
![2E184A63-446A-4F88-8AE9-8A58B13F6E96](https://github.com/user-attachments/assets/5fc761ff-ad8d-42be-bbaf-004e6eb117c3)
Rooms
![3A8B9CD3-EB5A-41E4-B86C-6D0699EEB469](https://github.com/user-attachments/assets/ca877770-f6f6-4c53-bd99-eb3b5511bdd4)
Spa
![72F3FDE3-0406-465C-9A5A-6B02D020C529](https://github.com/user-attachments/assets/e975dc81-55ff-4889-b6e7-5309ec2857d5)
Activities and entertainment
![28A7215E-1C62-4D5B-8990-52B795BD4B04](https://github.com/user-attachments/assets/ef42beef-4791-4c7b-9ab9-692cbe0de524)
Gallery
![372E6C35-E329-4A94-8651-A71D5FD1B629](https://github.com/user-attachments/assets/d1f980ee-f293-4fd5-ab3b-b05a2092627c)
Contact
![C8F00E43-66F9-41E0-B9BC-36BA72EADB70](https://github.com/user-attachments/assets/b168990f-dd97-410d-90ce-cf71f71e00b9)

Features

- Full-screen video header with dictionary-inspired copy
- Responsive design with seamless transitions
- Modern UI with Material-UI components
- Interactive room booking system
- Contact form with real-time validation
- Admin dashboard for managing bookings and content

Tech Stack

- Frontend:
  - React.js
  - Material-UI
  - Framer Motion for animations
  - React Router for navigation
  - Axios for API calls

-Backend:
  - Node.js
  - Express.js
  - MongoDB with Mongoose
  - JWT for authentication
  - Multer for file uploads

 Getting Started

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

Project Structure

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

 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
 Acknowledgments

- Design inspiration from luxury resort websites
- Material-UI for the component library
- Framer Motion for smooth animations 
