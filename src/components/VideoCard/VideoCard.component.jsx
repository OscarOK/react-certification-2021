import React from 'react';
import {
  Container,
  Thumbnail,
  InfoContainer,
  Title,
  Description,
} from '../Universal/Universal.component';

const VideoCard = ({ title, description, thumbnail }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <Container height={'325px'}>
        <Thumbnail src={thumbnail.url}></Thumbnail>
        <InfoContainer>
          <Title>{title}</Title>
          <Description className="text-muted">{description}</Description>
        </InfoContainer>
      </Container>
    </div>
  );
};

export default VideoCard;
