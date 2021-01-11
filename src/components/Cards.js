import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1> My Projects & Internship Experiences </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='profile_deploy/images/Enovax.png'
              text='Internship at Enovax'
              label='Internships'
              
            />
            <CardItem
              src='profile_deploy/images/cauldron.jpeg'
              text='Recipe generating app - Cauldron'
              label='Projects'
              
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='profile_deploy/images/petcaretaker.png'
              text='PetCaretaker Service website'
              label='Projects'
              
            />
            <CardItem
              src='profile_deploy/images/clubmanager.png'
              text='club manager application'
              label='Projects'
              
            />
            <CardItem
              src='profile_deploy/images/robotic.jpg'
              text='Robotic projects (self-driving using LIDAR, Application controlled using RTOS)'
              label='Projects'
             
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
