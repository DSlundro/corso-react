import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from './components/AddMovie';

const FIREBASE_API = 'https://react-http-91377-default-rtdb.europe-west1.firebasedatabase.app/movies.json';

function App() {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    // async http request
    const fetchMovieHandler = useCallback( async () =>{
        setIsLoading(true);
        setError(null);

        // handling errors with try/catch
        try {
            //const response = await fetch('https://swapi.dev/api/films/');
            const response = await fetch(FIREBASE_API);

            if (!response.ok) throw new Error(`Error ${response.status} Something went wrong!`);

            const data = await response.json();
            const loadedMovies = [];

            for (const key in data) {
                loadedMovies.push({
                    id: key,
                    title: data[key].title,
                    releaseData: data[key].releaseData,
                    openingText: data[key].openingText
                })
            }

            setMovies(loadedMovies);
        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
    }, []);
    useEffect(() => {
        fetchMovieHandler();
    },[fetchMovieHandler]);

    async function addMovieHandler(movie){
        
        try {
            const response = await fetch(FIREBASE_API, {
                method: 'POST',
                body: JSON.stringify(movie),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            setError(error.message);
        }
    };

    // CONTENT
    let content = <p>Loading...</p>;
    if(movies.length === 0) content = <p>Found no movies.</p>;
    if(movies.length > 0) content = <MoviesList movies={movies} />
    if(error) content = <p>{error}</p>;
    if(isLoading) content = <p>Loading...</p>;


    return (
        <React.Fragment>
            <section>
                <AddMovie onAddMovie={addMovieHandler} />
            </section>
            <section>
                <button onClick={fetchMovieHandler}>Fetch Movies</button>
            </section>
            <section>
                {content}
            </section>
        </React.Fragment>
    );
}

export default App;
