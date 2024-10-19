# Expense Padi

Expense Padi is a modern, responsive web application built with React and Vite, designed to help users manage their finances effectively. It provides features for tracking expenses, monitoring income, and visualizing financial data.

## Features

- Dashboard with financial overview
- Expense tracking and categorization
- Bank account integration
- Customizable tracking rules
- Secure authentication system (Sign Up, Login, Reset Password, Forgot Password)
- Routing with fallback for invalid routes
- Protected Routes to ensure secure access to authenticated pages
- Responsive design for mobile and desktop

## Technologies Used

- React
- Vite
- Tailwind CSS
- Recharts for data visualization
- Formik for form handling
- Yup for form validation
- React Router for navigation
- Material-UI components
- Firebase Authentication & Firestore for user management

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/Ibinola/expense-padi.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd your-repo-name
   ```

3. **Install dependencies:**

   ```bash
    npm install
   ```

### Required Environment Variables

1. `VITE_FIREBASE_API_KEY` - Your Firebase API Key
2. `VITE_FIREBASE_AUTH_DOMAIN` - Your Firebase Auth Domain
3. `VITE_FIREBASE_PROJECT_ID` - Your Firebase Project ID
4. `VITE_FIREBASE_STORAGE_BUCKET` - Your Firebase Storage Bucket
5. `VITE_FIREBASE_MESSAGING_SENDER_ID` - Your Firebase Messaging Sender ID
6. `VITE_FIREBASE_APP_ID` - Your Firebase App ID

## Usage

To run the project locally:

1. Start the development server
   ```sh
   npm run dev
   ```
2. Visit `http://localhost:5173` in your browser.

## Project Structure

The project follows a standard React application structure:

- `src/`: Contains the source code
  - `assets/`: Static assets like images and icons
  - `components/`: Reusable React components
  - `context/`: Manages user credentials and state globally using React's Context API
  - `layout/`: Contains layout for main app structure
  - `pages/`: Individual page components
  - `utils/`: Utility functions and helpers
  - `reducers/`: Contains reducer functions for state management
- `public/`: Public assets


## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
