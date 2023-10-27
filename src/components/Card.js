import React from 'react';
import '../styles/Card.css';
import { DeleteOutline } from '@mui/icons-material';



const Card = ({ title, description, imageSrc }) => {
  return (
    <div className="card">
      {/* <img className="card-image" src={imageSrc} alt={title} /> */}
      <div className="card-content">
        {/* <p className="card-title">{title}</p> */}
        <p className="card-description">{description}</p>
        <div className='card-actions'>
        <DeleteOutline className="card-delete" />
        <a className="card-link" href="#"> = </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
