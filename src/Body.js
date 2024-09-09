import React from 'react'

const Body = () => {
  return (
    <div>
         <main className="main">
    <section id="hero" className="hero section">

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1>Let's get connected</h1>
            <p>Express yourself and Showcase your achievements</p>
            <div className="d-flex">
              <a href="#about" className="btn-get-started">Login</a>
              <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="glightbox btn-watch-video d-flex align-items-center"></a>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img">
            <img src="./img.png" className="img-fluid " alt="img"/>
          </div>
        </div>
      </div>

    </section>


  </main>

  <footer id="footer" className="footer">

    <div className="container">
      <div className="copyright text-center ">
        <p>© <span>Copyright</span> <strong className="px-1 sitename">Mano</strong> <span>All Rights Reserved</span></p>
      </div>
      </div>

  </footer>
    </div>
  )
}

export default Body