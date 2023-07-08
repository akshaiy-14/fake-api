import React from 'react';

const Header = () => {
  return (
    <header>
        <div>
            <h1 style={{ textAlign: "center" }}>Fetching data from an API</h1>
            <a href='https://jsonplaceholder.typicode.com/'>
            <h3 style={{ marginRight: '0' }}>Source</h3>
            </a>
        </div>
    </header>
  );
};

export default Header;