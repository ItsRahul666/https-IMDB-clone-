import React, { useEffect, useState } from 'react';
import genreids from "../components/utility/genres";

function Watchlist({ watchlist, handleRemoveFromWatchlist, setWatchlist }) {
  const [search, setSearch] = useState('');
  const [genreList, setGenreList] = useState(['All Genres']);
  const [currentGenre , setCurrentGenre] = useState('All Genres')

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let handleFilter = (genre) => {
      setCurrentGenre(genre)
  }

  const sortIncreasing = () => {
    const sortedIncreasing = [...watchlist].sort((movieA, movieB) => movieA.vote_average - movieB.vote_average);
    setWatchlist(sortedIncreasing);
  };

  const sortDecreasing = () => {
    const sortedDecreasing = [...watchlist].sort((movieA, movieB) => movieB.vote_average - movieA.vote_average);
    setWatchlist(sortedDecreasing);
  };

  useEffect(() => {
    const temp = watchlist.map((movieObj) => genreids[movieObj.genre_ids[0]]);
    const uniqueGenres = ['All Genres', ...new Set(temp)];
    setGenreList(uniqueGenres);
    console.log(uniqueGenres);
  }, [watchlist]);

  return (
    <>
      <div className='flex justify-center flex-wrap m-4'>
        {genreList.map((genre, index) => (
          <div onClick={()=>handleFilter(genre)} key={index} className={currentGenre==genre? ' flex justify-center bg-blue-400 h-[3rem] w-[9rem] rounded-xl text-white font-bold items-center mx-4' : 'flex justify-center bg-gray-400 h-[3rem] w-[9rem] rounded-xl text-white font-bold items-center mx-4'}>
            {genre}
          </div>
        ))}
      </div>

      <div className='flex justify-center m-4 '>
        <input
          onChange={handleSearch}
          value={search}
          type='text'
          className='h-[3rem] w-[18rem] bg-gray-200 outline-none px-4'
          placeholder='Search For Movies'
        />
      </div>

      <div className='overflow-hidden rounded-lg border border-gray-200 my-8'>
        <table className='w-full text-gray-500 text-center'>
          <thead className='border-b-2'>
            <tr>
              <th>Name</th>
              <th className='flex justify-center'>
                <div onClick={sortIncreasing} className='p-2'>
                  <i className='fa-solid fa-arrow-up'></i>
                </div>
                <div className='p-2'>Ratings</div>
                <div onClick={sortDecreasing} className='p-2'>
                  <i className='fa-solid fa-arrow-down'></i>
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
          {watchlist.filter((movieObj) => {
              if (currentGenre === 'All Genres') {
                 return true;
                 } else {
                   return genreids[movieObj.genre_ids[0]] === currentGenre;
                  } 

            }).filter((movieObj) => movieObj.title.toLowerCase().includes(search.toLowerCase()))
              .map((movieObj) => (
                <tr className='border-b-2' key={movieObj.id}>
                  <td className='flex items-center px-6 py-4'>
                    <img
                      className='h-[5rem] w-[4rem]'
                      src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                      alt={movieObj.title}
                    />
                    <div className='mx-10'>{movieObj.title}</div>
                  </td>
                  <td>{movieObj.vote_average}</td>
                  <td>{movieObj.popularity}</td>
                  <td>{genreids[movieObj.genre_ids[0]]}</td>
                  <td className='text-red-800 cursor-pointer' onClick={() => handleRemoveFromWatchlist(movieObj)}>
                    Delete
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
