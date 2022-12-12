import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import Filter from "./components/Filters/Filter";
import Cards from "./components/Cards/Cards";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";



function AppRM() {
  const [characters, setCharacters] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");
  const [info, setInfo] = useState({})


  const initialUrl = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`

  useEffect(() => {
    if(pageNumber == 0){
      return setCharacters(null)
    }
    fetch(initialUrl)
    .then((response)=> response.json())
    .then((data)=>{
      if(data.error){
        setCharacters(data.error)
      }else{
        setCharacters(data.results)
        setInfo(data.info)
      }
    })
  }, [initialUrl])

  return (
    <div className="App">
      <h1 className="text-center ubuntu my-4"> Rick & Morty <span className="text-primary">WiKi</span></h1>
      <Search setPageNumber={setPageNumber} setSearch={setSearch}/>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filter/>
          </div>
          <div className="col-8">
            <div className="row">
              <Cards results={characters}/>
            </div>
          </div>
        </div>
      </div>
      <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
    </div>


  );
}

export default AppRM;
