
import Link from "next/link";

import FilmComponent from '@/app/ui/film'
import { Suspense } from 'react'

/**Composant représentant le nom et le logo */
function Nameandlogo (args){

  const name = args.name ;

  return (
    <div id="logoandname">
      <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="50px" height="50px">
          <path fillRule="evenodd"  d="M1.5 2.5h13v10a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1zM0 1h16v11.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 
          2.5 0 0 1 0 12.5zm3.75 4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M7 4.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m1.75.75a.75.75 0 1 0 0-1.5.75.75
          0 0 0 0 1.5" fill="#7ec8e38d" />
      </svg>

      <h1 id="logoandname-name"> {name} </h1>
    </div>

  );
}

/**Composant représentant l'entête du site */
function Header (args){

  const page_name = args.title ;

  return (
    <header> 
      {/*Logo et nom du site*/}
      <Nameandlogo name = {page_name}/>
    </header>
  );

}

async function fetch_film_data() {

  const baseUrl = process.env.URL || 'http://localhost:3000';
  /** Pas besoin de spécifier public/.... pour les fichiers static
   *  Juste mettre le nom du fichier statique
   */
  const json_api_url = `${baseUrl}/film.json`;  //Lien de fichier json 

  try {

    const response = await fetch(json_api_url);
    const response_json = await response.json();

    return response_json;
    
  } catch (error) {

    console.log(error.message);
    
  }
 
  return [];

}


function Body(){

  const movies_json = fetch_film_data();

  return (

    <section className="main-section">

      <Suspense fallback={<div>Loading...</div>}>
        <FilmComponent movies={movies_json} />
      </Suspense>

    </section>  
  );

}


function Footer(){
  return (
    <footer className="text-sm">
      <p > Auteur : Yamine Ibrahima &nbsp; | &nbsp; Petit projet pour commencer l'apprentissage
        de Nextjs &amp; Reactjs 
      </p>
      <br />

      
      <p> Juillet 2025 </p>
    </footer>
  );
}


/**Main */
export default function Home() {
  fetch_film_data()

  return (
    <>

      <Header title = "Laconcu-Rating-App"/>

      <Body />

      <Footer />
      
    </>
  );
}

