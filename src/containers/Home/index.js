import React, { useState, useEffect } from 'react';
import { Container, Col, Row, CardDeck, Button } from 'reactstrap';
import he from 'he';
import { getRandomVideos, getMocksVideos } from '../../api';
import VideoCard from '../../components/VideoCard';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


const convertResponse = ({ items }) => {
  return items.map(i => {
      const  { videoId } = i.id;
      const { title, description, thumbnails } = i.snippet;
      const { medium } = thumbnails;
      return { 
        id: videoId, 
        title: he.decode(title), 
        description: he.decode(description), 
        image: medium 
      }
  });
}

const Home = () => {
  const [response, setResponse] = useState([]);

  const random = async () =>{
    try{
      const { data } = await getRandomVideos();
      //const data = getMocksVideos();
      setResponse(convertResponse(data));
    } catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    random();
  }, []);

  return (
    <Container>
        <Header />
        <br/>
        <Row className="justify-content-end">        
            <Button onClick={random} color="warning">Randomizer!</Button>
        </Row>
        <br/>
        <Row>
          <CardDeck>
          {
            response.map(r => {
                return(
                  <Col key={r.id} xs="6" sm="4">
                    <VideoCard key={r.id} title={r.title} image={r.image} description={r.description} id={r.id} />
                  </Col>
                )
            })
          }
          </CardDeck>
        </Row>
        <br />
        <hr/>
        <Footer />
      </Container>
  );
}

export default Home;
