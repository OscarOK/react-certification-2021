import React, { useRef } from 'react';
import VideoCard from '../../components/VideoCard/VideoCard.component';
import { Container, Title } from '../../components/Universal/Universal.component';

import data from '../../utils/data';

function HomePage() {
  //const history = useHistory();
  const sectionRef = useRef(null);

  return (
    <section className="omepage" ref={sectionRef}>
      <Container
        className="d-flex justify-content-center align-items-center"
        height={'200px'}
      >
        <Title>Welcome, live your mement in Wizeline!</Title>
      </Container>

      <div className="row">
        {data().items.map((element) => (
          <VideoCard
            key={element.etag}
            title={element.snippet.title}
            description={element.snippet.description}
            thumbnail={element.snippet.thumbnails.high}
          ></VideoCard>
        ))}
      </div>
    </section>
  );
}

export default HomePage;
