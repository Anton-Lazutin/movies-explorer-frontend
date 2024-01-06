import { useLocation } from 'react-router-dom'
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import { useState } from "react";
import Preloader from '../Preloader/Preloader';

export default function MoviesCardList({ movies, addMovie, isLoading, savedMovies, onDelete, serverError, firstEntrance }) {
  const { pathname } = useLocation()
  const [count, setCount] = useState(printCards().init);
  const fact = movies.slice(0, count);

  function printCards() {
    const counter = { init: 12, step: 3 };
    if (window.innerWidth < 1440) {
      counter.init = 8;
      counter.step = 2;
    }
    if (window.innerWidth < 650) {
      counter.init = 5;
      counter.step = 2;
    }
    return counter;
  }

  function clickMore() {
    setCount(count + printCards().step);
  }

  return (
    <section className="card-list page__card-list">
      <ul className="card-list__lists">
      {isLoading ? <Preloader /> :
          (pathname === '/movies' && fact.length !== 0) ?
            fact.map(data => {
              return (
                <MoviesCard
                  key={data.id}
                  savedMovies={savedMovies}
                  addMovie={addMovie}
                  data={data}
                />
              )
            }) : movies.length !== 0 ?
              movies.map(data => {
                return (
                  <MoviesCard
                    key={data._id}
                    onDelete={onDelete}
                    data={data}
                  />
                )
              }) : pathname === '/movies'}
      </ul>
      <button
        type="button"
        className={`card-list__more ${
          count >= movies.length && "card-list__more_hidden"
        }`}
        onClick={clickMore}
      >
        Ёще
      </button>
    </section>
  );
}
