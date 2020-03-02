import React from 'react';

const Footer = () => (
  <footer>
    <div className="text-copyright">&copy; 2020 Open Health AI</div>
    <style jsx>{`
      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer img {
        margin-left: 0.5rem;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `}</style>
  </footer>
);

export default Footer;
