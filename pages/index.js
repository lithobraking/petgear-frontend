import Head from 'next/head';
// import Image from 'next/image';
// import styles from '../styles/Home.module.css';
import products from '../products.json';
import { Card, Container, Row } from 'react-bootstrap';

export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        {products.map((product) => (
          <Row>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.meta_description}</Card.Text>
              </Card.Body>
            </Card>
          </Row>
        ))}
      </Container>
    </div>
  )
}
