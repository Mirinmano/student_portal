import React, { useState } from 'react'
import './Certificate.css'
import Card from './Card';

const CourceCertificate = ({submissions}) => {
    const [isNavVisible, setNavVisible] = useState(false);

  // Toggle the visibility of the navigation
  const handleToggle = () => {
    setNavVisible(prevState => !prevState);
  };
  console.log(JSON.stringify(submissions));
  return (
    <div>
        <i className="mobile-toggle bi bi-list"
            onClick={handleToggle}
        ></i>

<nav className={`vertical-nav ${isNavVisible ? 'show' : ''}`}>
  <ul>
      <li><a href="cert.html"></a></li>
    <li><a href="cert.html"></a></li>
    <li><a href="cert.html"></a></li>
    <li><a href="cert.html"></a></li>
    <li><a href="cert.html" className="active">&emsp;&emsp;Semester 1</a></li>
    <li><a href="cert.html">&emsp;&emsp;Semester 2</a></li>
    <li><a href="cert.html">&emsp;&emsp;Semester 3</a></li>
    <li><a href="cert.html">&emsp;&emsp;Semester 4</a></li>
    <li><a href="cert.html">&emsp;&emsp;Semester 5</a></li>
    <li><a href="cert.html">&emsp;&emsp;Semester 6</a></li>
    <li><a href="cert.html">&emsp;&emsp;Semester 7</a></li>
    <li><a href="cert.html">&emsp;&emsp;Semester 8</a></li>
  </ul>
</nav>
    <main className="main">
        <div className="container mt-5">
            <div className="row">
                
                  <>
                    {
                      
                      submissions.map( submission => (
                        <div className="col-sm-6 col-md-4 col-lg-4 mb-4">
                        <div className="card">
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/004/805/384/small/graduation-certificate-template-free-vector.jpg" className="card-img-top" alt="House Image" />
                        <div className="custom-card-body card-body">
                            <span className="badge badge-danger">{submission.payment}</span>
                            <h5 className="custom-card-title">{submission.title}</h5>
                            <p className="custom-card-text">{submission.company}</p>
                        </div>
                    </div>
                </div>
                      ))
                    }
                  </>
            </div>
        </div>
    </main>

    <footer id="footer" className="footer">
      <div className="container">
        <div className="copyright text-center ">
          <p>© <span>Copyright</span> <strong className="px-1 sitename">Mano</strong> <span>All Rights Reserved</span></p>
        </div>
      </div>
    </footer>

  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  <script src="assets/vendor/aos/aos.js"></script>
  <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
  <script src="assets/js/main.js"></script>
  
</div>
  )
}

export default CourceCertificate