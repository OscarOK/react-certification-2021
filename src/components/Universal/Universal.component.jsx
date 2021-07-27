import styled from 'styled-components';

const Container = styled.div`
  background-color: white;
  border-radius: 3px;
  margin: 15px;
  height: ${(props) => props.height};
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.35);
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 40%;
  object-fit: cover;
  src: ${(props) => props.src};
`;

const InfoContainer = styled.div`
  width: 100%;
  height: 60%;
  padding: 25px;
`;

const Title = styled.h2`
  font-size: 24px;
  display: -webkit-box !important;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
  overflow: hidden;
`;

const Description = styled.p`
  font-size: 16px;
  font-weight: 300;
  display: -webkit-box !important;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  white-space: normal;
  overflow: hidden;
`;

export { Container, Thumbnail, InfoContainer, Title, Description };
