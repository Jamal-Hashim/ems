# EMS – Employee Management System

A responsive Employee Management System built using **React.js, Tailwind CSS, and Context API**. This application allows Admins to manage employee tasks, while Employees can view and track their assigned tasks.

## 🚀 Live Demo

🌐 **Live Website:** [https://jamal-hashim.github.io/ems/](https://jamal-hashim.github.io/ems/)

📂 **GitHub Repository:** [https://github.com/Jamal-Hashim/ems](https://github.com/Jamal-Hashim/ems)

## 🔑 Demo Login Credentials

### 👨‍💼 Admin Login
- **Email:** admin@gmail.com
- **Password:** 123

### 👨‍💻 Employee Login
- **Email:** employee1@gmail.com
- **Password:** 123

**Note:** These credentials are provided for demo and testing purposes only.

## 🚀 Features

### 👨‍💼 Admin Dashboard
- Admin Login
- View employee dashboard
- Create and assign tasks to employees
- Manage employee tasks
- Track task status

### 👨‍💻 Employee Dashboard
- Employee Login
- View assigned tasks
- Check task details
- Track task status
- View task summary

### 🔐 Authentication
- Separate Admin and Employee login
- Login state management
- Logout functionality
- User data stored in LocalStorage

## 🛠️ Technologies Used

- **React.js** – Frontend development
- **Tailwind CSS** – Responsive UI styling
- **Context API** – Global state management
- **JavaScript (ES6+)** – Application logic
- **LocalStorage** – Store user and task data
- **Vite** – Development and build tool

## 📂 Project Structure

```text
EMS/
├── public/
├── src/
│   ├── components/
│   │   ├── Auth/
│   │   │   └── Login.jsx
│   │   ├── Dashboard/
│   │   │   ├── AdminDashboard.jsx
│   │   │   └── EmployeeDashboard.jsx
│   │   └── other/
│   │       ├── Header.jsx
│   │       ├── CreateTask.jsx
│   │       ├── AllTask.jsx
│   │       ├── TaskList.jsx
│   │       └── TaskListNumbers.jsx
│   ├── context/
│   │   └── AuthProvider.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── README.md
```

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Jamal-Hashim/ems.git
```

### 2. Navigate to Project Folder

```bash
cd ems
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start Development Server

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

## 💾 Data Storage

This project uses browser **LocalStorage** to store application data.

- Employee information
- Task information
- Login session data

**Note:** This is a frontend practice project. It does not use a backend server or database. LocalStorage data is stored in the user's browser.

## 🎯 Project Objective

The main objective of this project is to understand and practice important React concepts through a real-world application, including:

- React Components
- Props and State
- Context API
- Conditional Rendering
- Event Handling
- LocalStorage
- State Management
- Reusable Components
- Responsive UI Design

## 👨‍💻 Developer

**Jamal Hashim**

- GitHub: [@Jamal-Hashim](https://github.com/Jamal-Hashim)

---

⭐ If you like this project, consider giving it a star!
