import React from 'react';
import './upload.css';

const Upload = ({addTitle, setAddTitle,addPaid, setAddPaid, addCompany, setAddCompany, addCategory, setAddCategory, addSemester, setAddSemester, handleChange, handleSubmit}) => {
  
  return (
    <div>
      <div className="form-container">
        <div className="form-box">
          <h2>Upload Certificate</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                placeholder="Enter the title"
                value={addTitle}
                onChange={(e) => setAddTitle(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Paid or Free</label><br />
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="payment"
                  id="paid"
                  value="Paid"
                  checked={addPaid === 'Paid'}
                  onChange={(e) => setAddPaid(e.target.value)}
                  required
                />
                <label className="form-check-label" htmlFor="paid">Paid</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="payment"
                  id="free"
                  value="Free"
                  checked={addPaid === 'Free'}
                  onChange={(e) => setAddPaid(e.target.value)}
                  required
                />
                <label className="form-check-label" htmlFor="free">Free</label>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="provider" className="form-label">Company/Certificate Provider</label>
              <input
                type="text"
                className="form-control"
                id="provider"
                name="provider"
                placeholder="Enter the provider's name"
                value={addCompany}
                onChange={(e) => setAddCompany(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="category" className="form-label">Certificate Category</label>
              <select
                className="form-select"
                id="category"
                name="category"
                value={addCategory}
                onChange={(e) => setAddCategory(e.target.value)}
                required
              >
                <option value="">Select a category</option>
                <option value="Event">Event</option>
                <option value="Course">Course</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="semester" className="form-label">Semester</label>
              <select
                className="form-select"
                id="semester"
                name="semester"
                value={addSemester}
                onChange={(e) => setAddSemester(e.target.value)}
                required
              >
                <option value="">Select your semester</option>
                <option value="1">1st Semester</option>
                <option value="2">2nd Semester</option>
                <option value="3">3rd Semester</option>
                <option value="4">4th Semester</option>
                <option value="5">5th Semester</option>
                <option value="6">6th Semester</option>
                <option value="7">7th Semester</option>
                <option value="8">8th Semester</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="certificate-img" className="form-label">Upload Certificate Image</label>
              <input
                className="form-control"
                type="file"
                id="certificate-img"
                name="certificateImg"
                accept="image/*"
                onChange={handleChange}
                required
              />
            </div>

            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Upload;
