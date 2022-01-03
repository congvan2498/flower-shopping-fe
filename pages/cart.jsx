import Image from 'next/image';
import {useSelector, useDispatch} from 'react-redux';
import {
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
} from '../redux/cart.slice';
import styles from '../styles/CartPage.module.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Box, Button} from "@material-ui/core";
import React from "react";

const CartPage = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const getTotalPrice = () => {
        return cart.reduce(
            (accumulator, item) => accumulator + item.quantity * item.price,
            0
        );
    };

    return (
        <div>
            <Navbar/>
            <div className={styles.container}>
                {cart.length === 0 ? (
                    <h1>Your Cart is Empty!</h1>
                ) : (
                    <>
                        <div className={styles.header}>
                            <div>Hình Ảnh</div>
                            <div>Tên</div>
                            <div>Giá</div>
                            <div>Số Lượng</div>
                            <div>Hành Động</div>
                            <div>Tổng Tiền</div>
                        </div>
                        {cart.map((item) => (
                            <div className={styles.body}>
                                <div className={styles.image}>
                                    <Image src={item.image} height="90" width="65"/>
                                </div>
                                <p>{item.product}</p>
                                <p>$ {item.price}</p>
                                <p>{item.quantity}</p>
                                <div className={styles.buttons}>
                                    <button onClick={() => dispatch(incrementQuantity(item.id))}>
                                        +
                                    </button>
                                    <button onClick={() => dispatch(decrementQuantity(item.id))}>
                                        -
                                    </button>
                                    <button onClick={() => dispatch(removeFromCart(item.id))}>
                                        x
                                    </button>
                                </div>
                                <p>$ {item.quantity * item.price}</p>
                            </div>
                        ))}
                        <div>

                        </div>
                        <h2>Tổng tiền của đơn hàng: $ {getTotalPrice()}</h2>
                        {/*<Button*/}
                        {/*    type="submit"*/}
                        {/*>*/}
                        {/*    Đặt Hàng*/}
                        {/*</Button>*/}
                    </>
                )}
            </div>
        </div>
    );
};

export default CartPage;
