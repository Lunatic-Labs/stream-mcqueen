import React from 'react'
import CardSlider from './CardSlider'

export default function Slider({movies}) {
    const getMoviesFromRange=({from, to}) => {
        return movies.slice(from, to)
    }

  return (
    <div>
        <CardSlider title="Trending Now" data={getMoviesFromRange(0, 10)}/>
        <CardSlider title="New Videos" data={getMoviesFromRange(10, 20)}/>
        <CardSlider title="Chapel" data={getMoviesFromRange(20, 30)}/>
        <CardSlider title="Most Liked" data={getMoviesFromRange(30, 40)}/>
        <CardSlider title="Events" data={getMoviesFromRange(40, 50)}/>
        <CardSlider title="Epics" data={getMoviesFromRange(50, 60)}/>
    </div>
  )
}
