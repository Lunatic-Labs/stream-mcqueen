import React from 'react'
import CardSlider from './CardSlider'
import background from '../assets/Dark_GradientDark_Gradient.jpg';


export default React.memo (function Slider({movies}) {
    const getMoviesFromRange=({from, to}) => {
        return movies.slice(from, to)
    }

    //move to stylesheet when css is restructured
    const myStyle={
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
  };

  return (
  
    
    <div style>
        <CardSlider title="Trending Now" data={getMoviesFromRange(0, 10)}/>
        <CardSlider title="New Videos" data={getMoviesFromRange(10, 20)}/>
        <CardSlider title="Chapel" data={getMoviesFromRange(20, 30)}/>
        <CardSlider title="Concerts" data={getMoviesFromRange(30, 40)}/>
        <CardSlider title="Events" data={getMoviesFromRange(40, 50)}/>
        <CardSlider title="Sports" data={getMoviesFromRange(50, 60)}/>
    </div>
  )
});

