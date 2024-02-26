// App.js

import React from 'react';
import './App.css';

const App = () => {
  const characters = [
    { name: "Tanjiro Kamado", role: "Main Protagonist", image: "https://wallpapercave.com/wp/wp4885760.jpg" },
    { name: "Nezuko Kamado", role: "Tanjiro's Sister", image: "https://wallpapercave.com/wp/wp5444935.jpg" },
    { name: "Zenitsu Agatsuma", role: "Demon Slayer Corps Member", image: "https://wallpapercave.com/wp/wp4819872.jpg" },
    { name: "Inosuke Hashibira", role: "Demon Slayer Corps Member", image: "https://th.bing.com/th/id/OIP.slETgIshFRMd1n5KsCT_EAHaFL?w=237&h=180&c=7&r=0&o=5&pid=1.7" }
    // Add more characters here
  ];

  const quotes = [
    { text: "Your scars are the proof of your strength.", author: "Sakonji Urokodaki" },
    { text: "Keep your heart burning!", author: "Kyojuro Rengoku" },
    { text: "To protect my family, I will do anything!", author: "Giyu Tomioka" }
    // Add more quotes here
  ];

  return (
    <div className="container">
      <header>
        <h1>Demon Slayer Fan Page</h1>

      </header>
      <main>
        <section className="character">
          <h2>Main Characters</h2>
          <div className="character-grid">
            {characters.map((character, index) => (
              <div className="character-card" key={index}>
                <img src={character.image} alt={character.name} />
                <h3>{character.name}</h3>
                <p>{character.role}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="quote">
          <h2>Inspirational Quotes</h2>
          {quotes.map((quote, index) => (
            <blockquote key={index}>
              "{quote.text}"
              <footer>- {quote.author}</footer>
            </blockquote>
          ))}
        </section>
      </main>
      <footer>
        <p>Created by Suleman</p>
      </footer>
    </div>
  );
}

export default App;
