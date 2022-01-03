import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container clearfix">
                <div className="footer-top">
                    <div className="row">
                        <div className="col-lg-3 footer-column">
                            <h3>Categories</h3>
                            <div>Specials</div>
                            <br/>
                            <div>Anniversary</div>
                            <br/>
                            <div>Birthdays</div>
                            <br/>
                            <div>Congratulations</div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;
