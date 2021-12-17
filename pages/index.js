import CategoryCard from '../components/CategoryCard';
import styles from '../styles/Home.module.css';
import {getProducts} from "./api/products";
import ProductCard from "../components/ProductCard";

const HomePage = ({products}) => {
  return (
    <div className={styles.container}>
        <div className={styles.container}>
            <div className={styles.cards}>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    </div>
  );
};

export default HomePage;

export async function getStaticProps() {
    const products = await getProducts();
    return { props: { products } };
}
