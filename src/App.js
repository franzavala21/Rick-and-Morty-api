import React, { useEffect, useState } from "react";
import Characters from "./components/Characters";
import Pagination from "./components/Pagination";
import Navbar from './components/Navbar'



function AppRM() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({})

  const initialUrl = "https://rickandmortyapi.com/api/character"

  const fecthCharacters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })

      .catch((error) => console.log(error));
  };

  const onPrevious = () => {
    fecthCharacters(info.prev)
  }

  const onNext = () => {
    fecthCharacters(info.next)

  }


  useEffect(() => {
    fecthCharacters(initialUrl);
  }, [])

  return (
    <>

      <Navbar />
      <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
      <div className="container mt-5 ">
        <Characters characters={characters} />
      </div>
      <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
    </>


  );
}

export default AppRM;
