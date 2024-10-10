// components/Header.js

import React from 'react';
import Link from 'next/link';

const Header = () => (
  <header style={headerStyle}>
    <h1>Welcome to My Next.js Site</h1>
    <nav>
      <Link href="/">Home</Link> | <Link href="/about">About</Link>
    </nav>
  </header>
);

const headerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '10px',
  textAlign: 'center'
};

export default Header;
