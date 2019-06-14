import React from 'react';
import styled from 'styled-components';
import Photo from "../photo/Photo";

const PhotosList = (props) => {
  const whatColor = (index) => {
    switch (index) {
      case 1 :
        return '#29a729';
      case 2 :
        return '#28316f';
      default:
        return '#9c339b';
    }
  }
  return (
    <Wrapper>
      {!!(props.photos && props.photos.length) &&
      props.photos.map((item, index) => {
        return (
          <Photo
            key={item.id}
            photoUrl={item.url}
            photoName={item.title}
            color={whatColor(index)}
          />
        );
      })
      }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  with: 100%;
  padding: 5px;
`;

export default PhotosList;