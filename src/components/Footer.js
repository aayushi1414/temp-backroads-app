import React from 'react';
import { PageLinks, SocialLinks } from '../data';

const Footer = () => {
  return (
    <footer className='section footer'>
      <ul className='footer-links'>
        {PageLinks.map((item) => {
          const { id, href, text } = item;
          return (
            <li key={id}>
              <a href={href} className='footer-link'>
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className='footer-icons'>
        {SocialLinks.map((item) => {
          const { id, href, icon } = item;
          return (
            <li key={id}>
              <a href={href} target='_blank' className='footer-icon' rel='noreferrer'>
                <i className={icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className='copyright'>
        copyright &copy; Backroads travel tours company
        <span id='date'>{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
