import Head from 'next/head';
import { API_URL, imgToUrl } from '../../utils/urls';


const Product = ({product}) => {
    return (
        <>
            <Head>
                {product.meta_title &&
                    <title>{product.meta_title}</title>
                }
                {product.meta_description &&
                    <meta name='description' content={product.meta_description} />
                }
            </Head>
            <div className='detail-img'>
                <img src={imgToUrl(product.image)} width='550' height='372' />
            </div>
            <div>
                <h2><b>{product.name}</b></h2>
            </div>
            <div>
                <h4>${product.price}</h4>
            </div>
            <div>
                <p>{product.meta_description}</p>
            </div>
        </>
    )
}

export default Product;

export async function getStaticProps({ params: { slug } }) {
    const productRes = await fetch(`${API_URL}/products/?slug=${slug}`);
    const match = await productRes.json();

    return {
        props: {
            product: match[0]
        }
    }
}

export async function getStaticPaths() {
    const productsRes = await fetch(`${API_URL}/products/`);
    const products = await productsRes.json();

    return {
        paths: products.map(product => ({
            params: {
                slug: String(product.slug)
            }
        })),
        fallback: false
    }
}