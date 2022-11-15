import React from 'react'
import styled from "styled-components"
import { useDispatch } from 'react-redux';


export default function SelectGenre({genres, type}) {
  return (
    <Select className='flex' onChange={}>
        {genres.map((genre) => {
            return (
                <option value={genre.id} key={genre.id}>
                    {genre.name}
                </option>
            )
        })}
    </Select>
  )
}

const Select = styled.select``;