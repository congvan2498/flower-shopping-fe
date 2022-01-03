import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cart.slice';
import styles from '../styles/ProductCard.module.css';
import {Card} from "@mui/material";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <Card style={{padding : "1rem"}}>
      <Image src="/fea4.png" height={200} width={200} />
      <h4 className={styles.title}>{product.product}</h4>
      <p style={{color: "red"}}>$ {product.price}</p>
      <button
        onClick={() => dispatch(addToCart(product))}
        className={styles.button}
      >
        Thêm vào giỏ hàng
      </button>
    </Card>
  );
};

export default ProductCard;
