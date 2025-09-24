import React from 'react';
import abdi from "./assets/image.png"; // sax .png

const App = () => {
  return (
    <main>
      <div className="pattern"></div>
      <div className="wrapper">
        <header>
          <img src={abdi} alt="ABDIRAHMAN-1 Banner" />
          <h1>
            Find <span className="text-gradient">Movies</span> you'll enjoy
            without the hassle
          </h1>
        </header>

        <p>Search</p>
      </div>
    </main>
  );
};

export default App;
