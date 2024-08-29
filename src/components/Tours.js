import { ToursData } from '../data';
import Title from './Title';
import React from 'react';

const Tours = () => {
  return (
    <section className='section' id='tours'>
      <Title title={'featured'} subTitle={'tours'} />

      <div className='section-center featured-center'>
        {ToursData.map((tour) => {
          const { id, image, date, title, info, location, duration, cost } = tour;
          return (
            <article className='tour-card' key={id}>
              <div className='tour-img-container'>
                <img src={image} className='tour-img' alt='' />
                <p className='tour-date'>{date}</p>
              </div>
              <div className='tour-info'>
                <div className='tour-title'>
                  <h4>{title}</h4>
                </div>
                <p>{info}</p>
                <div className='tour-footer'>
                  <p>
                    <span>
                      <i className='fas fa-map'></i>
                    </span>
                    {location}
                  </p>
                  <p>{duration} days</p>
                  <p>from ${cost}</p>
                </div>
              </div>
            </article>
          );
        })}
        {/* 
        <article className='tour-card'>
          <div className='tour-img-container'>
            <img src='./images/tour-2.jpeg' className='tour-img' alt='' />
            <p className='tour-date'>october 1th, 2020</p>
          </div>
          <div className='tour-info'>
            <h4>best of java</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime
              reprehenderit eum quod exercitationem fugit, qui corporis.
            </p>
            <div className='tour-footer'>
              <p>
                <span>
                  <i className='fas fa-map'></i>
                </span>
                indonesia
              </p>
              <p>11 days</p>
              <p>from $1400</p>
            </div>
          </div>
        </article>

        <article className='tour-card'>
          <div className='tour-img-container'>
            <img src='./images/tour-3.jpeg' className='tour-img' alt='' />
            <p className='tour-date'>september 15th, 2020</p>
          </div>
          <div className='tour-info'>
            <h4>explore hong kong</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime
              reprehenderit eum quod exercitationem fugit, qui corporis.
            </p>
            <div className='tour-footer'>
              <p>
                <span>
                  <i className='fas fa-map'></i>
                </span>
                hong kong
              </p>
              <p>8 days</p>
              <p>from $5000</p>
            </div>
          </div>
        </article>

        <article className='tour-card'>
          <div className='tour-img-container'>
            <img src='./images/tour-4.jpeg' className='tour-img' alt='' />
            <p className='tour-date'>december 5th, 2019</p>
          </div>
          <div className='tour-info'>
            <h4>kenya highlights</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime
              reprehenderit eum quod exercitationem fugit, qui corporis.
            </p>
            <div className='tour-footer'>
              <p>
                <span>
                  <i className='fas fa-map'></i>
                </span>
                kenya
              </p>
              <p>20 days</p>
              <p>from $3300</p>
            </div>
          </div>
        </article> */}
      </div>
    </section>
  );
};

export default Tours;
