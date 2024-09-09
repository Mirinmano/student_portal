import React from 'react';
import CGPAChart from './CGPAChart'; // Import the CGPAChart component
import './semestercards.css';

const SemesterCards = () => {
  const semesterData = [
    { semester: 1, cgpa: 9.2, events: 3, courses: 2, internships: 1 },
    { semester: 2, cgpa: 8.9, events: 4, courses: 1, internships: 2 },
    { semester: 3, cgpa: 9.2, events: 3, courses: 2, internships: 1 },
    { semester: 4, cgpa: 8.9, events: 4, courses: 1, internships: 2 },
    { semester: 5, cgpa: 9.2, events: 3, courses: 2, internships: 1 },
    { semester: 6, cgpa: 8.9, events: 4, courses: 1, internships: 2 },
    { semester: 7, cgpa: 9.2, events: 3, courses: 2, internships: 1 },
    { semester: 8, cgpa: 8.9, events: 4, courses: 1, internships: 2 },
    // Add more semester data here...
  ];

  return (
    <div className="container">
      <h2 className="text-center mb-4">Semester-wise CGPA & Certificates</h2>
      <div className="row">
        {semesterData.map((data, index) => (
          <div className="col-12" key={index}>
            <div className="card">
              <div className="card-body  d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="card-title ">Semester {data.semester}</h5>
                  <p className="card-text">
                    CGPA Scored: <strong>{data.cgpa} / 10</strong>
                  </p>
                  <div className="certificates-info">
                    <span>Events: <strong>{data.events}</strong></span>
                    <span>Courses: <strong>{data.courses}</strong></span>
                    <span>Internships: <strong>{data.internships}</strong></span>
                  </div>
                </div>
                <div className="chart-container">
                  <CGPAChart chartId={`chart${data.semester}`} cgpa={data.cgpa} maxCGPA={10} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SemesterCards;
