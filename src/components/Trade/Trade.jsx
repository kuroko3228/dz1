import Container from "../Container/Container";
import styles from './Trade.module.css'
import img from '../../images/17.png';
import img1 from '../../images/18.png';
import img2 from '../../images/19.png';
import img3 from '../../images/20.png';
import img4 from '../../images/21.png';
import Vanity from '../../images/35.png';
import LAMP from '../../images/40.png';
import CABINET from '../../images/45.png';
import Sofa from '../../images/50.png';

function Trade() {
    return (
        <Container>
            <div className={styles.trade_h1}>
                <h1>TRENDING CATEGORIES</h1>
            </div>
            <div className={styles.Father}>
            <svg className={styles.Right} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z"></path></svg>
                <div className={styles.son1}>
                    <img src={img} alt="" />
                </div>
                <div className={styles.son1}>
                    <img src={img1} alt="" />
                </div>
                <div className={styles.son1}>
                    <img src={img2} alt="" />
                </div>
                <div className={styles.son1}>
                    <img src={img3} alt="" />
                </div>
                <div className={styles.son1}>
                    <img src={img4} alt="" />
                </div>
                <div className={styles.son1}>
                    <img src={img} alt="" />
                </div>
                <svg className={styles.Left} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M6.23 20.23L8 22l10-10L8 2 6.23 3.77 14.46 12z"></path></svg>
            </div>

            <div className={styles.tabls}>
                <div className={styles.tabls_item}>
                <img src={Vanity} alt="" />
                <h2>DRESSING TABLE</h2>
                <p>$1,200.00</p>
                </div>
                <div className={styles.tabls_item}>
                <img src={LAMP} alt="" />
                <h2>LAMP</h2>
                <p>$1,200.00</p>
                </div>
                <div className={styles.tabls_item}>
                <img src={CABINET} alt="" />
                <h2>CABINET</h2>
                <p>$1,200.00</p>
                </div>
                <div className={styles.tabls_item}>
                <img src={Sofa} alt="" />
                <h2>Sofa</h2>
                <p>$1,200.00</p>
                </div>
            </div>
        </Container>
    )
}

export default Trade