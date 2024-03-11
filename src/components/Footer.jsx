import '../assets/styles/footer.css'
import Footer_Logo from "../assets/logo/DetailAlt.png";

export default function Footer() {
    
    return (
        <footer>

            <div className="main-footer">

                <div className="footer-upper">
                    <img src={Footer_Logo} alt="" />
                    <div className="footer-links">
                        <ul>
                            <h3>Links</h3>
                            <li>Sports</li>
                            <li>Politcs</li>
                            <li>Business</li>
                            <li>Entertainment</li>
                        </ul>

                        <ul>
                            <h3>Follow Us</h3>
                            <li>X</li>
                            <li>Instagram</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-lower">
                    <h4>Copyright @ 2024 Details.com - All Rights Reserved.</h4>
                </div>
    
            </div>

        </footer>
    )
}
