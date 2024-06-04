import './App.css';
import Navbar from './components/Navbar';
import Watchlist from './components/Watchlist';
import Movies from './components/Movies';
import React, { useEffect, useState } from 'react';
import Banner from './components/Banner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  let [watchlist, setWatchlist] = useState([]);

  let handleAddtoWatchlist = (movieObj) => {
    if (!watchlist.find(movie => movie.id === movieObj.id)) {
      let newWatchlist = [...watchlist, movieObj];
      localStorage.setItem('moviesApp', JSON.stringify(newWatchlist));
      setWatchlist(newWatchlist);
      console.log(newWatchlist);
    }
  };

  let handleRemoveFromWatchlist = (movieObj) => {
    console.log("Removing movie:", movieObj); 
    let filteredWatchlist = watchlist.filter((movie) => {
      return movie.id !== movieObj.id;
    });
    localStorage.setItem('moviesApp', JSON.stringify(filteredWatchlist));
    setWatchlist(filteredWatchlist);
    console.log("Updated watchlist:", filteredWatchlist); 
  };

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem('moviesApp');
    if (moviesFromLocalStorage) {
      setWatchlist(JSON.parse(moviesFromLocalStorage));
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<><Banner /> <Movies watchlist={watchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} handleAddtoWatchlist={handleAddtoWatchlist} /> </>} />
          <Route path="/watchlist" element={<Watchlist setWatchlist={setWatchlist} watchlist={watchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
