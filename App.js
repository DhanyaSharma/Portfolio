import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="App-header">
        <h1>Welcome to My Portfolio</h1>
        <p>Hi, I'm Dhanya Sharma – A Software Engineer</p>
        {/* Resume Download Section */}
      <section className="resume">
      <a href="/DHANYA_resume.pdf" download>
          <button className="download-btn">Download Resume</button>
        </a>
      </section>
     
        <p>
        Engineering student skilled in web development,proficient in C++ and Python. Multilingual in English, Hindi, and German, with a passion for building 
        innovative solutions and collaborating in diverse teams.I love building
        user-friendly, responsive web applications and always strive to improve my skills.
        </p>
      </header>

      {/* Skills Section */}
      <section className="section">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>React</li>
          <li>JavaScript</li>
          <li>HTML & CSS</li>
          <li>Node.js</li>
          <li>Git/GitHub</li>
          <li>C++</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section className="section">
        <h2>My Projects</h2>
        <div className="projects">
          
          <div className="project-card">
            <h3>Portfolio</h3>
            <p>React JS</p>
            <a href="https://github.com/DhanyaSharma/HospitalDonationPage" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>

          <div className="project-card">
            <h3>Heart Disease Prediction Model</h3>
            <p>Logistic Regression/ data analysis/ Python (Pandas, 
              Scikit-learn)</p>
            <a href="https://github.com/DhanyaSharma/ML--Heart-Disease-Prediction" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
          
          <div className="project-card">
            <h3>Hospital Donation System</h3>
            <p>HTML/CSS/JS/Python/MySql</p>
            <a href="https://github.com/DhanyaSharma/HospitalDonationPage" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
          
    
          {/* Add more projects as needed */}
        </div>
      </section>
      

      {/* Contact Section */}
      <section className="section">
        <h2>Contact</h2>
        
        <ul>
          <li>Email: <a href="mailto:dhanya.sharma2004@gmail.com">dhanya.sharma2004@gmail.com</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/dhanya-s-b59260215/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></li>
          <li>GitHub: <a href="https://github.com/DhanyaSharma" target="_blank" rel="noopener noreferrer">GitHub Profile</a></li>
        </ul>

      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 DhanyaSharma. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
