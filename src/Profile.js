import React from 'react'
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js";
import './profile.css'

const Profile = () => {
    
  return (
    <div>
        <div className="profile-header">
    <img src="img.png" className="img-fluid " alt="Profile Picture"/><br /><br/>
    <h2>Mirin Mano M</h2>
    <p>717822Y129</p>
  </div>

  <div className="container mt-5">
    <div className="profile-section">
      <h5>Personal Information</h5>
      <p><strong>Email : </strong> 717822y129@kce.ac.in</p>
      <p><strong>Phone : </strong> 9363506419</p>
      <p><strong>Address : </strong>Mathapuram, Tholaiyavattam post, Kanyakumari, 629157</p>
    </div>

    <div className="profile-section">
      <h5>Profile Stats</h5>
      <div className="row">
        <div className="col-12 profile-stats">
          <h5>12</h5>
          <p>Certificates</p>
        </div>
        <div className="col-12 profile-stats">
          <h5>5</h5>
          <p>Projects Completed</p>
        </div>
        <div className="col-12 profile-stats">
          <h5>3</h5>
          <p>Internships</p>
        </div>
      </div>
    </div>

    
  </div>
    </div>
  )
}

export default Profile