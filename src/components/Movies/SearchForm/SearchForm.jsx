import { React, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import useFormValidation from "../../../hooks/useFormValidation/useFormValidation";

export default function SearchForm({
  isCheck,
  changeShort,
  searchedMovie,
  searchMovies,
  setIsError,
  savedMovie
}) {
  const { pathname } = useLocation();
  const { values, handleChange, reset } = useFormValidation();

  useEffect(() => {
    if (pathname === "/saved-movies" && savedMovie.length === 0) {
      reset({ search: "" });
    } else {
      reset({ search: searchedMovie });
    }
    setIsError(false);
  }, [searchedMovie, reset, setIsError, pathname, savedMovie]);

  function onSubmit(evt) {
    evt.preventDefault();
    if (evt.target.search.value) {
      searchMovies(evt.target.search.value);
      setIsError(false);
    } else {
      setIsError(true);
    }
  }
  return (
    <form
      className="search-form"
      name={"SearchForm"}
      onSubmit={onSubmit}
      noValidate
    >
      <input
        required
        className="search-form__input"
        type="text"
        placeholder="Фильм"
        value={values.search || ""}
        onChange={(evt) => {
          handleChange(evt);
          setIsError(false);
        }}
        disabled={savedMovie ? (savedMovie.length === 0 && true) : false}
      />
      <button type="submit" className={`search-form__button ${savedMovie ? (pathname === '/saved-movies' && savedMovie.length === 0) && 'search-form__button_disabled' : ''}`}>
        Найти
      </button>
      <hr className="search-form__line" />
      <FilterCheckbox isCheck={isCheck} changeShort={changeShort} />
    </form>
  );
}
