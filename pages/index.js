import CategoryCard from '../components/CategoryCard';
import styles from '../styles/Home.module.css';
import {getProducts} from "./api/products";
import ProductCard from "../components/ProductCard";
import LayoutApp from "./_layout";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Box, Card} from "@mui/material";

const HomePage = ({products}) => {
    return (
       <div>
           <Navbar />
           <Card className={styles.container} style={{backgroundColor : "#ffe6dd"}}>
           <h2>Lễ tết</h2>
               <div className={styles.container}>
                   <div className={styles.cards}>
                       {products.map((product) => (
                           <ProductCard key={product.id} product={product}/>
                       ))}
                   </div>
               </div>
           </Card>
           <Card className={styles.container} style={{backgroundColor : "#d4e9ff"}}>
               <h2>Bán nhanh</h2>
               <div className={styles.container}>
                   <div className={styles.cards}>
                       {products.map((product) => (
                           <ProductCard key={product.id} product={product}/>
                       ))}
                   </div>
               </div>
           </Card>
           <Footer/>
       </div>
    );
};

export default HomePage;

export async function getStaticProps() {
    const products = await getProducts();
    return {props: {products}};
}
