import styles from './Footer.css';
const Footer = () => {
return(
    <div className="footer-container">
        <div className="copyright">
            <span> Zwigato Pvt Limited Solutions 2023</span>
        </div>
        <div className="company">
            <h3>Company</h3>
            <ul>
                <li>About</li>
                <li>Careers</li>
                <li>Team</li>
                
            </ul>
        </div>
        <div className="contact-us">
            <h3>Contact Us</h3>
            <ul>
                <li>Help &amp; Support</li>
                <li>Partner with us</li>
                <li>Ride with us</li>
                
            </ul>
        </div>
        <div className="deliver">
            <h3>We deliver to:</h3>
            <ul>
                <li>Bangalore</li>
                <li>Gurgaon</li>
                <li>Hyderabad</li>
                <li>Delhi</li>
                <li>Pune</li>
            </ul>
        </div>
    </div>
);

}

export default Footer;