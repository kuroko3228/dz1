import Container from "../Container/Container";
import styles from "./Seller.module.css"
import Metal from '../../images/15.png';
import Clock from '../../images/12.png';
import Chair from '../../images/13.png';
import Wall from '../../images/14.png';
import Modern from '../../images/80.png';
import Outdoor  from '../../images/90.png';
import Chaman from '../../images/100.png';

function Seller(){
return(
    <Container>
        <div className={styles.Seller_main}>
            <div className={styles.Seller_items}>
                <img className={styles.wh120} src={Metal} alt="" />
                <h3>Metal Vintage Pendant</h3>
                <p>$79.00</p>
            </div>
            <div className={styles.Seller_items}>
            <img className={styles.wh120}  src={Clock} alt="" />
                <h3>Klosh Table Clock</h3>
                <p>$99.00</p>
            </div>
            <div className={styles.Seller_items}>
            <img className={styles.wh120}  src={Chair} alt="" />
                <h3>Arne Dining Chair</h3>
                <p>$350.00</p>
            </div>
            <div className={styles.Seller_items}>
                <img className={styles.wall} src={Wall} alt="" />
                <h3>Klosh Wall Clock</h3>
                <p>$80.00 – $129.00</p>
            </div>
        </div>


        <div className={styles.Seller_main_two}>
        <div className={styles.Seller_items_two}>
        <img className={styles.wh}  src={Modern} alt="" />
                <h3>Metal Vintage Pendant</h3>
                <p>$79.00</p>
            </div>
            <div className={styles.Seller_items_two}>
            <img className={styles.wh1}  src={Outdoor} alt="" />
                <h3>Metal Vintage Pendant</h3>
                <p>$99.00</p>
            </div>
            <div className={styles.Seller_items_two}>
                <img className={styles.wall} src={Chaman} alt="" />
                <h3>Metal Vintage Pendant</h3>
                <p>$499.00</p>
            </div>
        </div>
    </Container>
)
}
export default Seller