'use client'

import { use } from "react";


export default function FilmComponent({movies}){

  const movies_list = use(movies);

  function Film({a_movie_object}){

    const mov_title = a_movie_object.Title;
    const mov_year = a_movie_object.Year;
    const mov_lang = a_movie_object.Language;
    const mov_duration = a_movie_object.Runtime;
    const mov_genre = a_movie_object.Genre;
    const mov_released = a_movie_object.Released;
    const mov_synopsy = a_movie_object.Plot;

    return (

      <div id="main-div">

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
            Images ??
          </div>

        </div> 

        <div id="btns">

          <button className="boutons"> Like </button>
          <button className="boutons">  Dislike </button>

        </div>
          
      </div>
  );

  }

  const amovie = movies_list[0];

  return (

    <Film a_movie_object = {amovie} />

  );
}