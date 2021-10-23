import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
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
        <Row xs={1} md={2} className="g-4">
          {products.map((product) => (
            <Link href={`/products/${product.slug}`}>
              <Card className='m-2' style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Subtitle className='mb-2 text-muted'>${product.price}</Card.Subtitle>
                  <Card.Text>{product.meta_description}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          ))}
        </Row>
      </Container>
    </div>
  )
}
