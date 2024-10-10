// components/Footer.js

import React from 'react';

const Footer = () => (
  <footer style={footerStyle}>
    <p>&copy; 2024 My Next.js Site. All Rights Reserved.</p>
  </footer>
);

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
  position: 'absolute',
  bottom: 0,
  width: '100%'
};

export default Footer;
