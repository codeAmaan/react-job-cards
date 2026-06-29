import React from 'react'
import {Bookmark} from 'lucide-react'
import './Card.css'
const Card = (props) => {
  return (
      <div className="card">
       <div>
         <div className="top">
            <img src={props.companyLogo} alt={props.company} />
            <button>Save <Bookmark size={15} /> </button>
        </div>

        <div className="center">
            <h3>{props.company} <span>{props.datePost}</span></h3>
            <h2>{props.postt}</h2>
            <div className='tag'>
              <h4>{props.tagOne}</h4>
              <h4>{props.tagTwo}</h4>
            </div>
        </div>
       </div>

        <div className="bottom">
          <div>
            <h3>{props.salary}</h3>
            <p>{props.locat}</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
  )
}

export default Card;
