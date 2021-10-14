import React from 'react';
//config
import {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from '../config.js';
//import components
import HeroImage from './HeroImage/index.js';
import Grid from './Grid/index.js';
import Thumb from './Thumb/index.js';
import Spinner from './Spinner/index.js';
import SearchBar from './SearchBar/index.js';
import Button from './Button/index.js';



//import Hook
import {useHomeFetch} from '../Hooks/useHomeFetch'
//import Images
import Noimage from '../images/no_image.jpeg';

const Home = () =>  {
    
    const {state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore} = useHomeFetch();
    console.log(state);

    if (error) return <div> Something went wrong...</div>;

    return (
        <>
            {!searchTerm && state.results[0] ? (
            <HeroImage 
                image = {`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                title = {state.results[0].original_title}
                text = {state.results[0].overview}
            /> 
            ) : null}
            <SearchBar setSearchTerm={setSearchTerm}/>
            <Grid header={searchTerm ? 'Search Result':'Popular Movies'}>
                {state.results.map(movie => (
                    <Thumb 
                        key={movie.id}
                        clickable
                        image={
                            movie.poster_path
                            ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                            : Noimage
                        }
                        movieId={movie.id}
                    />
                ))}
            </Grid>
            {loading && <Spinner />}
            {state.page < state.total_pages && !loading && (
            <Button text='Load More' callback={() => setIsLoadingMore(true)} /> 
            )}
        </>
    )
};

export default Home;