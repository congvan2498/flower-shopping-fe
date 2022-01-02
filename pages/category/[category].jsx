import { useRouter } from 'next/router';
import ProductCard from '../../components/ProductCard';
import styles from '../../styles/ShopPage.module.css';
import { getProductsByCategory } from '../api/products/[category]';
import Layout from "../_layout";

const CategoryPage = ({ products }) => {
  const router = useRouter();

  return (
      <Layout>
          <div className={styles.container}>
              <h1 className={styles.title}>Results for {router.query.category}</h1>
              <div className={styles.cards}>
                  {products.map((product) => (
                      <ProductCard key={product.id} product={product} />
                  ))}
              </div>
          </div>
      </Layout>
  );
};

export default CategoryPage;

export async function getServerSideProps(ctx) {
  const category = ctx.query.category;
  const products = await getProductsByCategory(category);
  return { props: { products } };
}
