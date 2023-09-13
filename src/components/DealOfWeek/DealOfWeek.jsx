import Container from '../Container/Container'
import styles from './DealOfWeek.module.css'
import divan from '../../images/divan.png';
import png1 from '../../images/smal1.png';
import png2 from '../../images/smal2.png';
import png3  from '../../images/smal3.png';
import png4 from '../../images/smal4.png';

function Deal(){
    return(
        <Container>
                <div className={styles.Deal_main}>
                    <div className={styles.Deal_divan}>
                        <img src={divan} alt="" />
                    </div>
                    <div className={styles.Deal_items}>
                        <button className={styles.btn1}>DEAL OF THE WEEK</button>
                        <div className={styles.Deal_price}>
                            <h2>From</h2>
                        <span className={styles.span}> $99.99</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Mauris eget hendrerit odio, non ultrices lorem. Donec vel 
                            vestibulum eros. Curabitur fringilla arcu varius.
                        </p>
                        <button className={styles.btn2}>SHOP NOW</button>
                        <div className={styles.list__items}>
                            <div className={styles.item}><img src={png1} alt="" /></div>
                            <div className={styles.item}><img src={png2} alt="" /></div>
                            <div className={styles.item}><img src={png3} alt="" /></div>
                            <div className={styles.item}><img src={png4} alt="" /></div>
                        </div>
                    </div>
                </div>
            
        </Container>
    )

}
export default Deal 