import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { API_URL, imgToUrl } from '../utils/urls';
import { Card, Container, Row } from 'react-bootstrap';

export default function Home({ products }) {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container className='p-5'>
        <Row xs={1} md={2} className="g-4">
          {products.map((product) => (
            <Link href={`/products/${product.slug}`}>
              <Card className='m-2' style={{ width: '18rem' }}>
                <Card.Img variant='top' src={imgToUrl(product.image)} />
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

export async function getStaticProps() {
  const productRes = await fetch(`${API_URL}/products/`);
  const products = await productRes.json();

  return {
    props: {
      products
    }
  }
}