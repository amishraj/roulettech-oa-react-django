# Roulettech Online Assessment - React & Django Web Application

## Description

This web application demonstrates the core concepts of React, integrated with a Django backend. The frontend is built using React, showcasing key React features such as components, JSX, props, and state. The Django backend serves as an API, serving dynamic content for the application.

## Features

- **React Frontend**: Demonstrates core React concepts with dynamic content based on user interaction.
- **Django Backend**: Provides API endpoints to serve data to the React frontend.
- **Tab-based Navigation**: Users can switch between different React concepts using tabs.

## Project Structure


## Installation and Running the Project

### Backend (Django)

1. **Navigate to the Backend Directory:**

   ```bash
   cd backend
   ```

2. **Install the required packages:**

    ```bash
    pip install -r requirements.txt
    ```

    or

    ```bash
    pip3 install -r requirements.txt
    ```
3. **Run the Django Server:**

    ```bash
    python manage.py runserver
    ```
### Frontend (React)

1. **Navigate to the Frontend Directory:**
    ```bash
   cd backend
   ```

2. **Install the required packages:**

    ```bash
   npm install
   ```

3. **Run the React Development Server**

    ```bash
    npm run dev
    ```

### Usage
- The React frontend runs on http://localhost:5173/ and interacts with the Django backend running on http://localhost:8000/.
- Use the tab buttons to switch between different React concepts (Components, JSX, Props, State).
- The content displayed dynamically changes based on the selected tab, fetched from the Django API.
