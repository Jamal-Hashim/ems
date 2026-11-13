
const admin = [
    {
        id: 1,
        firstName: "Jamal",
        email: "admin@gmail.com",
        password: "123",
    }
];

const employees = [
    {
        id: 1,
        firstName: "Rahul",
        email: "employee1@gmail.com",
        password: "123",

        taskCounts: {
            active: 1,
            newTask: 1,
            completed: 2,
            failed: 1
        },

        tasks: [
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Create Login Page",
                taskDescription: "Build a responsive login page using React and Tailwind CSS.",
                taskDate: "2026-11-03",
                category: "Development"
            },
            {
                active: false,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Design Dashboard",
                taskDescription: "Create a modern admin dashboard with responsive cards.",
                taskDate: "2026-11-05",
                category: "Design"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Setup React Project",
                taskDescription: "Initialize the React project and configure Tailwind CSS.",
                taskDate: "2026-10-29",
                category: "Development"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                taskTitle: "JavaScript Assignment",
                taskDescription: "Complete the JavaScript practice assignment.",
                taskDate: "2026-10-27",
                category: "Learning"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Create Navbar",
                taskDescription: "Build a responsive navigation bar.",
                taskDate: "2026-10-25",
                category: "Development"
            }
        ]
    },

    {
        id: 2,
        firstName: "Amit",
        email: "employee2@gmail.com",
        password: "123",

        taskCounts: {
            active: 1,
            newTask: 1,
            completed: 2,
            failed: 1
        },

        tasks: [
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Build Portfolio Website",
                taskDescription: "Develop a personal portfolio website using React.",
                taskDate: "2026-11-04",
                category: "Development"
            },
            {
                active: false,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Create Landing Page",
                taskDescription: "Design a professional landing page for a business.",
                taskDate: "2026-11-06",
                category: "Design"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Fix Navbar",
                taskDescription: "Fix mobile navigation responsiveness.",
                taskDate: "2026-10-30",
                category: "Bug Fixing"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                taskTitle: "API Integration",
                taskDescription: "Integrate the third-party API into the application.",
                taskDate: "2026-10-26",
                category: "Backend"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Create Footer",
                taskDescription: "Develop a reusable website footer.",
                taskDate: "2026-10-24",
                category: "Development"
            }
        ]
    },

    {
        id: 3,
        firstName: "Priya",
        email: "employee3@gmail.com",
        password: "123",

        taskCounts: {
            active: 1,
            newTask: 1,
            completed: 2,
            failed: 1
        },

        tasks: [
            {
                active: false,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Design Product Cards",
                taskDescription: "Create reusable product cards for an e-commerce website.",
                taskDate: "2026-11-05",
                category: "Design"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Homepage UI",
                taskDescription: "Complete the homepage user interface.",
                taskDate: "2026-11-03",
                category: "UI/UX"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Create Wireframes",
                taskDescription: "Prepare wireframes for the new website.",
                taskDate: "2026-10-29",
                category: "Design"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                taskTitle: "Figma Prototype",
                taskDescription: "Submit the final interactive Figma prototype.",
                taskDate: "2026-10-26",
                category: "UI/UX"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Design Login Screen",
                taskDescription: "Create a clean and modern login screen.",
                taskDate: "2026-10-23",
                category: "Design"
            }
        ]
    },

    {
        id: 4,
        firstName: "Sneha",
        email: "employee4@gmail.com",
        password: "123",

        taskCounts: {
            active: 1,
            newTask: 1,
            completed: 2,
            failed: 1
        },

        tasks: [
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Develop REST API",
                taskDescription: "Create REST API endpoints for the application.",
                taskDate: "2026-11-04",
                category: "Backend"
            },
            {
                active: false,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Database Integration",
                taskDescription: "Connect the application with the database.",
                taskDate: "2026-11-07",
                category: "Backend"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Fix Authentication",
                taskDescription: "Resolve the login authentication issue.",
                taskDate: "2026-10-30",
                category: "Bug Fixing"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                taskTitle: "Payment Gateway",
                taskDescription: "Complete payment gateway integration.",
                taskDate: "2026-10-25",
                category: "Backend"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Create API Documentation",
                taskDescription: "Write documentation for all API endpoints.",
                taskDate: "2026-10-22",
                category: "Documentation"
            }
        ]
    },

    {
        id: 5,
        firstName: "Arjun",
        email: "employee5@gmail.com",
        password: "123",

        taskCounts: {
            active: 1,
            newTask: 1,
            completed: 2,
            failed: 1
        },

        tasks: [
            {
                active: false,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Create Website Banner",
                taskDescription: "Design an attractive banner for the company website.",
                taskDate: "2026-11-05",
                category: "Design"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Social Media Posts",
                taskDescription: "Create graphics for the upcoming marketing campaign.",
                taskDate: "2026-11-03",
                category: "Marketing"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Brand Guidelines",
                taskDescription: "Prepare brand colors, typography, and visual guidelines.",
                taskDate: "2026-10-29",
                category: "Branding"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                taskTitle: "Email Newsletter",
                taskDescription: "Prepare and send the monthly email newsletter.",
                taskDate: "2026-10-26",
                category: "Marketing"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Create Logo",
                taskDescription: "Design a professional logo for the brand.",
                taskDate: "2026-10-24",
                category: "Design"
            }
        ]
    }
];

// export const setLocalStorage = () => {
//     localStorage.setItem('employees', JSON.stringify(employees));
//     localStorage.setItem('admin', JSON.stringify(admin));
// }
// export const getLocalStorage = () => {
//     const employeesData = JSON.parse(localStorage.getItem('employees'));
//     const adminData = JSON.parse(localStorage.getItem('admin'));
//     return { employeesData, adminData };

// }

export const setLocalStorage = () => {
    // Default data sirf pehli baar save hoga.
    // Refresh par existing data overwrite nahi hoga.
    if (!localStorage.getItem('employees')) {
        localStorage.setItem('employees', JSON.stringify(employees));
    }

    if (!localStorage.getItem('admin')) {
        localStorage.setItem('admin', JSON.stringify(admin));
    }
};

export const getLocalStorage = () => {
    const employeesData = JSON.parse(localStorage.getItem('employees') || '[]');
    const adminData = JSON.parse(localStorage.getItem('admin') || '[]');

    return { employeesData, adminData };
};