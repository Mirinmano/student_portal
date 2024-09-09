import React from 'react'

const Card = ({submission}) => {
  return (
    <div className="card">
                        <img src={submission.imageUrl} className="card-img-top" alt="House Image" />
                        <div className="custom-card-body card-body">
                            <span className="badge badge-danger">{submission.payment}</span>
                            <h5 class="custom-card-title">{submission.title}</h5>
                            <p class="custom-card-text">{submission.company}</p>
                            <p class="custom-card-price">$850,000</p>
                        </div>
                    </div>
  )
}

export default Card