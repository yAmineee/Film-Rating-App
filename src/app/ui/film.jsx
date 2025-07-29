'use client'

import { use , useState } from "react";


export default function FilmComponent({movies}){

  const movies_list = use(movies);
  const [currentSlide , setCurrentSlide] = useState(0);

  const nextslide = () => {
    setCurrentSlide(currentSlide === movies_list.length - 1 ? 0 : currentSlide+1);
  };

   const prevslide = () => {
    setCurrentSlide(currentSlide - 1 < 0 ? movies_list.length - 1  : currentSlide-1);
  };

  return (

    <>

      <div className=" slide-btn hover:cursor-pointer" onClick={prevslide}> &#10094;</div>

      {  
        movies_list.map( (mv, idx) => (

          /**DISPLAY (valeur : afficher(.main-div) ou cacher (.cacher)) propriété css  */
          <Film key={idx} a_movie_object = {mv} display = {currentSlide === idx ? "main-div" : "cacher" }  />

        ))
      }

      <div className=" slide-btn hover:cursor-pointer " onClick={nextslide}>&#10095;</div>
    </>

  );
} 

function Film({a_movie_object, display}){

  const [like , setLike] = useState(0);
  const [dislike , setDislike] = useState(0);

  const LikeContent = () => {
    setLike(like+1)
  }

  const DislikeContent = () => {
    setDislike(dislike+1)
  }

  const mov_title = a_movie_object.Title;
  const mov_year = a_movie_object.Year;
  const mov_lang = a_movie_object.Language;
  const mov_duration = a_movie_object.Runtime;
  const mov_genre = a_movie_object.Genre;
  const mov_released = a_movie_object.Released;
  const mov_synopsy = a_movie_object.Plot;
  const mov_pics = a_movie_object.Images;

  return (

    <div className={display} >

      <div id="main-div-header">
        <h1>  {mov_title} ( {mov_year} ) </h1>
        
      </div>
        
      <div id="main-div-body">
        <p>
          Languages : {mov_lang} <br />
          Duration : {mov_duration} <br />
          Genre : {mov_genre} <br />
          Released : {mov_released} <br />
          Synospis : {mov_synopsy} <br />
        </p>

        <div id="main-div-body-pics">
          {mov_pics.map(pic => (

            <img key={mov_pics.indexOf(pic)} src={pic} alt={mov_title} width={200}/>
            
          ))}

        </div>

      </div> 

      <div id="btns">

        <button className="boutons" onClick={LikeContent}> Like ({like}) </button>
        <button className="boutons" onClick={DislikeContent}>  Dislike ({dislike}) </button>

      </div>
        
    </div>
  );

}