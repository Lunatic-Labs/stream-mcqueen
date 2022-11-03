import React from 'react'
import styled from "styled-components"
import { useDispatch } from 'react-redux';
import { fetchDataByGenre } from '../../../.history/lipscombplus-ui/src/store/index_20221025122212';


export default function SelectGenre({genres, type}) {
  const dispatch = useDispatch();

  return (
    <Select className='flex' onChange={e => {
      dispatch(fetchDataByGenre({genre: e.target.value}))
    }}>
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