import products from '../../products.json';
import Head from 'next/head';
const product = products[0];

const Product = () => {
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