# React Basic UI

React Basic UI is a simple and elegant React application that provides a basic user interface with a login page, a header, and a footer. This project is designed to be a starting point for building more complex React applications with a clean and responsive UI.

## Features

### 1. **Login Page**
- **Email and Password Inputs**: Users can enter their email and password to log in.
- **Remember Me Checkbox**: A user can choose to remember their login credentials.
- **Show Password Toggle**: A user can toggle the visibility of the password field.
- **Forgot Password Link**: A user can navigate to the forgot password page.
- **Responsive Design**: The login form is centered both on large and small screens.

### 2. **Header**
- **Navigation Links**: Provides links to Home, About, and Contact pages.
- **Login and Sign Up Buttons**: The user can redirect to the login page or sign up.
- **Responsive Navigation**: The header is responsive, with a collapsible menu on smaller screen sizes.

### 3. **Footer**
- **Conditional Rendering**: The footer is conditionally rendered depending on the current page. It's hidden on the login page to offer a cleaner user experience.

### 4. **Layout**
- **Consistent Structure**: The layout maintains the same structure throughout different pages, where the header and footer are present on all pages except the login page.
- **Body Overflow Handling**: The body overflow is handled to prevent scrolling on the login page, ensuring the login form is always visible.

## Usage

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Md-Abu-Rayhan/react-basic-ui.git
   cd react-basic-ui
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the Application**
   ```bash
   npm start
   ```

   Application opens in `http://localhost:3000`.

### Customize

* **Styles**: Application styles are with Tailwind CSS. You can extend / change via its configuration or directly within the components.
- **Routes**: The application makes use of React Router for routing. You can extend or edit routes in the `App.js` file.
- **Components**: Components are modular and can be easily extended or modified to fit your needs.

### Example Pages

- **Home Page**: The default landing page with a simple welcome message.
- **About Page**: A page providing information about the application.
- **Contact Page**: A page with contact information or a contact form.
- **Login Page**: The login page with email, password, and remember me functionality.

Happy Codeding! </>