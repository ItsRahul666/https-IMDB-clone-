import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MovieCard from './MovieCard'
import Pagination from './Pagination'

function Movies({ handleAddtoWatchlist, handleRemoveFromWatchlist, watchlist }) {
  const [movies, setMovies] = useState([])
  const [pageNo, setPageNo] = useState(1)

  const handlePrev = () => {
    if (pageNo > 1) {
      setPageNo(pageNo - 1)
    }
  }

  const handleNext = () => {
    setPageNo(pageNo + 1)
  }

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=55873209e0bf6fe424627d2dcb9a41f3&language=en-US&page=${pageNo}`)
      .then(res => {
        setMovies(res.data.results)
      })
  }, [pageNo])

  return (
    <div className='p-5'>
      <div className='text-2xl m-5 font-bold text-center '>
        Trending Movies
      </div>

      <div className='flex flex-row flex-wrap justify-between items-center'>
        {movies.map((movieObj) => (
          <MovieCard
            key={movieObj.id}
            movieObj={movieObj}
            poster_path={movieObj.poster_path}
            name={movieObj.original_title}
            handleAddtoWatchlist={handleAddtoWatchlist}
            handleRemoveFromWatchlist={handleRemoveFromWatchlist}
            watchlist={watchlist}
          />
        ))}
      </div>

      <Pagination pageNo={pageNo} handleNext={handleNext} handlePrev={handlePrev} />
    </div>
  )
}

export default Movies




// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import MovieCard from './MovieCard'
// import Pagination from './Pagination'

// function Movies({handleAddtoWatchlist , handleRemoveFromWatchlist , watchlist}) {
//   const [movies, setMovies] = useState([])
//   const [pageNo, setPageNo] = useState(1)

//   const handlePrev = () => {
//     if (pageNo > 1) {
//       setPageNo(pageNo - 1)
//     }
//   }

//   const handleNext = () => {
//     setPageNo(pageNo + 1)
//   }

//   useEffect(() => {
//     axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=55873209e0bf6fe424627d2dcb9a41f3&language=en-US&page=${pageNo}`)
//       .then(res => {
//         setMovies(res.data.results)
//       })
//   }, [pageNo])

//   return (
//     <div className='p-5'>
//       <div className='text-2xl m-5 font-bold text-center '>
//         Trending Movies
//       </div>

//       <div className='flex flex-row flex-wrap justify-between items-center'>
//         {movies.map((movieObj) => {
//           return <MovieCard  key={movieObj.id} movieObj={movieObj} poster_path={movieObj.poster_path} name={movieObj.original_title} handleAddtoWatchlist={handleAddtoWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} watchlist={watchlist} />
//         })}
//       </div>

//       <Pagination pageNo={pageNo} handleNext={handleNext} handlePrev={handlePrev} />
//     </div>
//   )
// }

// export default Movies


// import React, { useState } from 'react'
// import MovieCard from './MovieCard'
// import { useEffect } from 'react'
// import axios from 'axios'
// import Pagination from './Pagination'

// function Movies() {

//   const [movies , setMovies] = useState([])
//   const [pageNo , setPageNo] = useEffect(1)

//   const handlePrev = ()=>{
//     if(pageNo===1){
//       setPageNo(pageNo)
//     }
//     else
//     setPageNo(pageNo-1)
//   }

//   const handleNext = ()=>{
//     setPageNo(pageNo+1)
//   }

//   useEffect(()=>{
//     axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=55873209e0bf6fe424627d2dcb9a41f3&language=en-US&page=${pageNo}`).then(function(res){
//       setMovies(res.data.results)
//     })
//   },[pageNo])

//   return (
//     <div className='p-5'>
//         <div className='text-2xl m-5 font-bold text-center '>
//             Trending Movies
//         </div>

//         <div className='flex flex-row flex-wrap justify-between items-center'>
          

//           {movies.map((movieObj)=>{
//             return <MovieCard poster_path={movieObj.poster_path} name={movieObj.original_title}/>
//           })}
                      
//         </div>

//           <Pagination pageNo={pageNo} handleNext={handleNext} handlePrev={handlePrev} />
//     </div>
//   )
// }

// export default Movies