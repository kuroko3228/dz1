import Container from '../Container/Container'
import styles from './Fotter.module.css'
import img from '../../images/28.svg';
import img1 from '../../images/29.svg';
import img2 from '../../images/30.svg';


function Fotter() {
    return (
        <Container>
            <div className={styles.footer}>
                <h1>Drille</h1>
                <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '50px', marginBottom: '100px' }}>
                    <div className={styles.items}>
                        <h2>ABOUT US</h2>
                        <ul>
                            <li><a href="">ABOUT US</a></li>
                            <li> <a href="">Contact Us</a> </li>
                            <li> <a href="">Privacy Policy</a> </li>
                            <li> <a href="">Terms of Service</a> </li>
                        </ul>
                    </div>
                    <div className={styles.items}>
                        <h2>COMPANY</h2>
                        <ul>
                            <li> <a href="">Explore World</a> </li>
                            <li> <a href="">Trending Video</a> </li>
                            <li> <a href="">Book a Trip</a> </li>
                            <li> <a href="">Visit Gallery</a> </li>
                        </ul>
                    </div>
                    <div className={styles.items}>
                        <h2>USEFUL LINKS</h2>
                        <ul>
                            <li> <a href="">Buy this theme</a> </li>
                            <li> <a href="">Drile Landing</a> </li>
                            <li> <a href="">Documentation</a> </li>
                            <li> <a href="">Video tutorial</a> </li>
                        </ul>
                    </div>
                    <div className={styles.items}>
                        <h2>FOLLOW US</h2>
                        <ul>
                            <li> <img src={img} alt="" /> <a href="">Facebook</a> </li>
                            <li> <img src={img1} alt="" />  <a href="">Twitter</a> </li>
                            <li> <img src={img2} alt="" />  <a href="">Instagram</a> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Fotter
