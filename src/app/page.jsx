import Image from "next/image";
import Link from "next/link";


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

/**Composant représentant le nom et le logo */
function Nameandlogo (args){

  const name = args.name ;

  return (
    <div id="logoandname">
      <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="50px" height="50px">
          <path fillRule="evenodd"  d="M1.5 2.5h13v10a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1zM0 1h16v11.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 
          2.5 0 0 1 0 12.5zm3.75 4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M7 4.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m1.75.75a.75.75 0 1 0 0-1.5.75.75
          0 0 0 0 1.5" fill="#081bad" />
      </svg>

      <h1 id="logoandname-name"> {name} </h1>
    </div>

  );
}


/**Main */
export default function Home() {
  return (
    <>

      <Header title = "Laconcu-Rating-App"/>
      
    </>
  );
}
