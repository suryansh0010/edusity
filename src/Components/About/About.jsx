import React from 'react';
import './About.css';
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={about_img} alt='About' className='about-img' />
        <img src={play_icon} alt='Play' className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className='about-right'>
        <h3>About University</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <p>
        Enjoy what is ahead of you and best of luck! Congratulations, Class of 2021! As you cherish the fruits of your hard work, I wish that success keeps following you in everything that you do. Dream new dreams, embark on who you are, embrace life with passion, and keep reaching for the stars.        </p>
        <p>
        I Graduated Graduation was the most important day in my life. I waited for this amazing day for twelve years to reach my dream and move on to college. For most people, graduation is a memorable day. It is hard for me to forget it even after a hundred years. The day I woke up realizing it was my graduation day, I was smiling all day long knowing that I had made my family proud of me. I remember everything about my graduation day: my party, cake, dress, makeup, hair, cap and gown, and the gifts I got from family and friends.        </p>

      </div>
    </div>
  );
}

export default About;
