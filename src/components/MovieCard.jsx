import React from 'react';

function MovieCard({ poster_path, name, movieObj, handleAddtoWatchlist, handleRemoveFromWatchlist, watchlist }) {

  function doesContain(movieObj) {
    return watchlist.some(movie => movie.id === movieObj.id);
  }

  return (
    <div className='relative h-[50vh] w-[250px] mb-8 bg-center bg-cover rounded-xl hover:scale-110 hover:cursor-pointer duration-300' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})` }}>

      {doesContain(movieObj) ? 
        <div onClick={() => handleRemoveFromWatchlist(movieObj)} className='font-bold text-3xl m-2 rounded-lg h-10 w-10 flex items-center justify-center absolute top-0 right-0 bg-gray-900/60'> 
          &#10060; 
        </div> : 
        <div onClick={() => handleAddtoWatchlist(movieObj)} className='text-white font-bold text-3xl m-2 rounded-lg h-10 w-10 flex items-center justify-center absolute top-0 right-0 bg-gray-900/60'>
          &#43;
        </div>
      }

      <div className='absolute bottom-0 left-0 right-0 text-white text-xl p-2 w-full text-center bg-gray-900/60'>
        {name}
      </div>
    </div>
  );
}

export default MovieCard;


















// import React from 'react';
// import Watchlist from './Watchlist';

// function MovieCard({ poster_path , name , movieObj , handleAddtoWatchlist , handleRemoveFromWatchlist}) {

//     function doesContain(movieObj){
//         for(let i=0 ; i<Watchlist.length ; i++){
//           if(Watchlist[i].id == movieObj.id){
//             return true
//           }
//         }
//         return false
//     }
//   return (
//     <div className='relative h-[50vh] w-[250px] mb-8 bg-center bg-cover rounded-xl hover:scale-110 hover:cursor-pointer duration-300' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})` }}>

//       {doesContain(movieObj)?
//       <div  onClick={()=>(handleRemoveFromWatchlist(movieObj))}  className=' font-bold text-3xl m-2 rounded-lg h-10  w-10 flex items-center justify-center absolute top-0 right-0  bg-gray-900/60'> &#10060; </div> : 
      
//       <div onClick={()=>(handleAddtoWatchlist(movieObj))} className='text-white font-bold text-3xl m-2 rounded-lg h-10  w-10 flex items-center justify-center absolute top-0 right-0  bg-gray-900/60'>
//       &#43;
//     </div>}
      
      

//       <div className='absolute bottom-0 left-0 right-0 text-white text-xl p-2 w-full text-center bg-gray-900/60'>
//         {name}
//       </div>
//     </div>
//   );
// }

// export default MovieCard;











// function MovieCard({poster_path ,  name}) {
//   return (
//     <div className='h-[50vh] w-[250px]  mb-8 bg-center bg-cover rounded-xl hover:scale-110 hover:cursor-pointer duration-300 ' style={{backgroundImage : `url(https://image.tmdb.org/t/p/original/${poster_path})`}}>

//         <div className='text-white text-xl  p-2 w-full text-center  bg-gray-900/60'>

//           {name}

//         </div>

//     </div>
//   )
// }

// export default MovieCard