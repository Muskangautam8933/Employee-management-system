const employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Prepare Weekly Report",
        "description": "Compile KPIs and send summary to manager.",
        "date": "2025-11-10",
        "category": "Reporting",
        "active": true,
        "completed": false,
        "newTask": true,
        "failed": false
      },
      {
        "title": "Client Standup",
        "description": "Attend daily standup with client team.",
        "date": "2025-11-12",
        "category": "Meeting",
        "active": true,
        "completed": false,
        "newTask": false,
        "failed": false
      },
      {
        "title": "Fix Login Bug",
        "description": "Resolve 500 error on login for edge cases.",
        "date": "2025-11-08",
        "category": "Bug",
        "active": false,
        "completed": true,
        "newTask": false,
        "failed": false
      },
      {
        "title": "Write Unit Tests",
        "description": "Add tests for auth and profile modules.",
        "date": "2025-11-14",
        "category": "Development",
        "active": true,
        "completed": false,
        "newTask": false,
        "failed": false
      },
      {
        "title": "Security Refresher",
        "description": "Complete OWASP Top 10 training.",
        "date": "2025-11-05",
        "category": "Learning",
        "active": false,
        "completed": false,
        "newTask": false,
        "failed": true
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Design Review",
        "description": "Review Figma mockups for dashboard.",
        "date": "2025-11-11",
        "category": "Meeting",
        "active": false,
        "completed": true,
        "newTask": false,
        "failed": false
      },
      {
        "title": "API Integration",
        "description": "Integrate payment gateway callbacks.",
        "date": "2025-11-15",
        "category": "Development",
        "active": true,
        "completed": false,
        "newTask": true,
        "failed": false
      },
      {
        "title": "Error Monitoring Setup",
        "description": "Configure alerts in monitoring tool.",
        "date": "2025-11-09",
        "category": "Admin",
        "active": false,
        "completed": false,
        "newTask": false,
        "failed": true
      },
      {
        "title": "Refactor Utils",
        "description": "Clean and modularize helper functions.",
        "date": "2025-11-13",
        "category": "Development",
        "active": true,
        "completed": false,
        "newTask": false,
        "failed": false
      },
      {
        "title": "Sprint Retro Notes",
        "description": "Document action items from retro.",
        "date": "2025-11-12",
        "category": "Reporting",
        "active": false,
        "completed": true,
        "newTask": false,
        "failed": false
      },
      {
        "title": "Onboarding Support",
        "description": "Assist new joiner with repo setup.",
        "date": "2025-11-12",
        "category": "Admin",
        "active": true,
        "completed": false,
        "newTask": false,
        "failed": false
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Cache Strategy",
        "description": "Propose caching plan for product pages.",
        "date": "2025-11-16",
        "category": "Development",
        "active": true,
        "completed": false,
        "newTask": true,
        "failed": false
      },
      {
        "title": "Deploy Hotfix",
        "description": "Patch production env for CORS headers.",
        "date": "2025-11-07",
        "category": "Bug",
        "active": false,
        "completed": true,
        "newTask": false,
        "failed": false
      },
      {
        "title": "Data Backup Audit",
        "description": "Verify nightly backup integrity.",
        "date": "2025-11-10",
        "category": "Admin",
        "active": false,
        "completed": false,
        "newTask": false,
        "failed": true
      },
      {
        "title": "Code Review",
        "description": "Review PRs for checkout flow.",
        "date": "2025-11-12",
        "category": "Development",
        "active": true,
        "completed": false,
        "newTask": false,
        "failed": false
      },
      {
        "title": "Team Knowledge Share",
        "description": "Prepare 15-min talk on indexes.",
        "date": "2025-11-14",
        "category": "Learning",
        "active": true,
        "completed": false,
        "newTask": false,
        "failed": false
      },
      {
        "title": "Quarterly Metrics",
        "description": "Collect metrics for Q3 review.",
        "date": "2025-11-06",
        "category": "Reporting",
        "active": false,
        "completed": true,
        "newTask": false,
        "failed": false
      },
      {
        "title": "Stakeholder Sync",
        "description": "Align scope with product and sales.",
        "date": "2025-11-13",
        "category": "Meeting",
        "active": true,
        "completed": false,
        "newTask": false,
        "failed": false
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Mobile QA",
        "description": "Test responsive behavior on iOS/Android.",
        "date": "2025-11-11",
        "category": "Testing",
        "active": false,
        "completed": true,
        "newTask": false,
        "failed": false
      },
      {
        "title": "Feature Flag Setup",
        "description": "Add flags for beta checkout.",
        "date": "2025-11-12",
        "category": "Development",
        "active": true,
        "completed": false,
        "newTask": true,
        "failed": false
      },
      {
        "title": "DB Migration Plan",
        "description": "Draft migration steps for schema v2.",
        "date": "2025-11-17",
        "category": "Development",
        "active": true,
        "completed": false,
        "newTask": false,
        "failed": false
      },
      {
        "title": "Vendor Invoice",
        "description": "Submit invoices for October services.",
        "date": "2025-11-05",
        "category": "Admin",
        "active": false,
        "completed": false,
        "newTask": false,
        "failed": true
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Performance Profiling",
        "description": "Profile API endpoints with APM tool.",
        "date": "2025-11-12",
        "category": "Development",
        "active": true,
        "completed": false,
        "newTask": true,
        "failed": false
      },
      {
        "title": "Accessibility Audit",
        "description": "Fix contrast and ARIA issues.",
        "date": "2025-11-09",
        "category": "Testing",
        "active": false,
        "completed": true,
        "newTask": false,
        "failed": false
      },
      {
        "title": "Incident Postmortem",
        "description": "Write RCA for last outage.",
        "date": "2025-11-10",
        "category": "Reporting",
        "active": false,
        "completed": false,
        "newTask": false,
        "failed": true
      },
      {
        "title": "Team Demo",
        "description": "Showcase feature progress in demo call.",
        "date": "2025-11-13",
        "category": "Meeting",
        "active": true,
        "completed": false,
        "newTask": false,
        "failed": false
      },
      {
        "title": "Docs Update",
        "description": "Update README and API reference.",
        "date": "2025-11-15",
        "category": "Admin",
        "active": true,
        "completed": false,
        "newTask": false,
        "failed": false
      },
      {
        "title": "E2E Tests",
        "description": "Add e2e tests for cart and checkout.",
        "date": "2025-11-08",
        "category": "Testing",
        "active": false,
        "completed": true,
        "newTask": false,
        "failed": false
      },
      {
        "title": "Docker Cleanup",
        "description": "Prune unused images and volumes.",
        "date": "2025-11-06",
        "category": "Admin",
        "active": false,
        "completed": true,
        "newTask": false,
        "failed": false
      },
      {
        "title": "Learning Hour",
        "description": "Watch session on GraphQL best practices.",
        "date": "2025-11-16",
        "category": "Learning",
        "active": true,
        "completed": false,
        "newTask": false,
        "failed": false
      }
    ]
  }
];

const admin = [
  {
    "id": 101,
    "email": "admin@example.com",
    "password": "123"
  }
];


export const setLocalStorage = ()=>{
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin =JSON.parse(localStorage.getItem('admin'))
  
  return (employees , admin);
  
}


