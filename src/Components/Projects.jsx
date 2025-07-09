import React from 'react';
import './Projects.css'; // NEW

const Projects = () => {
  return (
    <section id="projects" className="container py-5">
      <h2 className="text-center mb-5">Projects</h2>
      <div className="row">

        {/* Project 1 */}
        <div className="col-md-6 mb-4">
          <div className="card project-card">
            <div className="card-body">
              <h5  className=" card-title">Intuitive PC Interaction</h5>
              <p className="card-text">
                A hands-free computer control system combining hardware and software to enhance accessibility, especially for users with mobility impairments.
              </p>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="col-md-6 mb-4">
          <div className="card project-card">
            <div className="card-body">
              <h5 className="card-title">User Registration with Python & XAMPP</h5>
              <p className="card-text">
                Developed a secure user registration system using Python and MySQL, deployed with XAMPP. Validates and stores user data with backend integration.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;