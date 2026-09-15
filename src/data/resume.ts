import headshot from './profile.jpg';

export const resume = {
  name: "Evelyn Gaskin",
  photo: headshot,
  tagline: "I apply ML and data science across domains: vision, language, and outcome data, and build the tools to make sense of it all.",
  skillNiches: [
    "Machine Learning",
    "Computer Vision",
    "Language Models",
    "Data Science & Analytics",
  ],
  experience: [
    {
      role: "Data Specialist",
      org: "Ballard Center for Social Impact",
      current: true,
      dates: "August 2026 – Present",
      highlights: [
        "Building a performance tracker hosted by university to serve 150 employees with PostgreSQL.",
        "Coordinate with directors, students, and faculty to create statistical reports and internal tools for over 14 teams.",
      ],
    },
    {
      role: "Technical Automation Intern",
      org: "Apella Technology",
      location: "Palo Alto, CA",
      dates: "April 2026 – August 2026",
      highlights: [
        "Automated recurring configuration pipeline with an Electron application using Playwright, Python scripting and IP provisioning/RTSP streaming to reduce manual data handling time by 50%.",
        "Aggregated and analyzed inventory data for customers.",
      ],
    },
    {
      role: "Program Coordinator & Full-Time Volunteer",
      location: "Romania",
      dates: "September 2024 – April 2026",
      highlights: [
        "Expanded community English and Romanian classes across 2 cities and minority-language school, trained volunteers.",
      ],
    },
    {
      role: "Research Assistant",
      org: "BYU Computer Vision, Perception, Cognition & Control Lab",
      dates: "November 2022 – April 2024",
      highlights: [
        "Engineered synthetic correspondence-data generation framework using OpenGL 3D fractal rendering and Blender cloth simulation, producing 10K+ densely labeled image pairs and removing the human-annotation bottleneck for pre-training.",
        "Analyzed silicon sampling of LLM conversational persuasion data with chain of thought and PCA to compare against human samples.",
      ],
    },
    {
      role: "Teaching Assistant",
      org: "Introduction to Data Science, Machine Learning",
      dates: "January 2023 – April 2024",
      highlights: [
        "Instructed 200+ students in Python techniques for data analysis, visualization, and machine learning.",
        "Built autograders and trained new teaching assistants.",
      ],
    },
  ],
  education: [
    {
      school: "Brigham Young University",
      schoolShort: "BYU",
      location: "Provo, UT",
      degree: "B.S. Computer Science",
      minor: "Global and Community Impact",
      dates: "September 2022 – Present",
      year: "April 2028",
      highlights: [
        "3.98 GPA · Dean's List (top 5%) 2x · 1st place in innovation challenge for pitch and product design",
        "Predictive modeling theory, data science & ML, software construction, full stack web programming",
        "Built a full stack note-taking app from no experience in 6 weeks, chess game in Java with web API",
        "Calculus, linear algebra, statistics, physics (mechanics and electricity/magnetism)",
        "Design and research of social impact issues, approaches, and evaluation",
        "VP of student association Training Responsible AI Leaders, Peer Advisor and Mentor",
      ],
    },
  ],
  skills: [
    {
      label: "Languages",
      items: ["Python", "R", "SQL", "C/C++", "Java", "TypeScript"],
    },
    {
      label: "ML & AI",
      items: ["PyTorch", "scikit-learn", "TensorFlow", "Hugging Face", "OpenCV", "Local LLM inference", "Prompt design and evaluation"],
    },
    {
      label: "Tools & Data",
      items: ["Git", "Docker", "PostgreSQL", "Firebase", "AI-assisted development workflows"],
    },
    {
      label: "Communication",
      items: ["Technical writing for broad audiences", "Romanian (professional working proficiency)"],
    },
  ],
  contact: {
    email: "evelyngaskin@gmail.com",
    github: "https://github.com/eggaskin",
    linkedin: "https://linkedin.com/in/evelyngaskin",
  },
};
