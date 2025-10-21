import React from 'react';
import { FaFacebookF, FaTwitter, FaGoogle, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section text-center pt-5 pb-5 bg-dark">
      <div className="container">
        <ul className="list-unstyled d-flex justify-content-center mb-4">
          <li>
            <a href="#" className="facebook text-white fs-4 pe-3">
              <FaFacebookF className="fs-5" />
            </a>
          </li>
          <li>
            <a href="#" className="twitter text-white fs-4 pe-3">
              <FaTwitter className="fs-5" />
            </a>
          </li>
          <li>
            <a href="#" className="google text-white fs-4 pe-3">
              <FaGoogle className="fs-5" />
            </a>
          </li>
          <li>
            <a href="#" className="github text-white fs-4">
              <FaGithub className="fs-5" />
            </a>
          </li>
        </ul>

        <p className="floot-text text-white text-capitalize fs-6">
          copy right 2018 &copy; by{' '}
          <a href="#" className="footer-a text-white text-decoration-underline">
            theme-fair
          </a>{' '}
          all rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
