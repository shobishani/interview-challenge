import React from 'react';
import PhotosList from '../photo-list/PhotosList';
import styled from 'styled-components';

const AlbumsList = (props) => {
  const {albums} = props;

  return (
    <div>
      {!!(albums && albums.length) && albums.map((item, index) => {
        return <Albums key={index}><PhotosList key={index} photos={item}/></Albums>
      })}
    </div>
  )
}

const Albums = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row nowrap;
`;


export default AlbumsList;