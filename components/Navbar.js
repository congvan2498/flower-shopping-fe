import Link from 'next/link';
import { useSelector } from 'react-redux';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const cart = useSelector((state) => state.cart);

  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  return (
    <nav className={styles.navbar}>
      <h6 className={styles.logo}>Shop Hoa Yêu Thương</h6>
      <ul className={styles.links}>
        <li className={styles.navlink}>
          <Link href="/">Trang Chủ</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="/shop">Tài Khoản</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="/cart">
            <p>Giỏ hàng ({getItemsCount()})</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
