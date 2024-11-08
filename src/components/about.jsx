import imgs from '../assets/special/intro-style1-video-gallery.jpg'
import img2 from '../assets/special/pexels-rdne-7821717.jpg'

function About() {
    return <div className="about">
        <div className="img">
        <img src={imgs} alt="" />
        </div>
        <div className="infos">
            <p className="title">
Known for Trust,
Honesty & Customer
                Support</p>
            <p>At Swifts Capitals, we are dedicated to upholding the highest standards of trust and integrity in all our services. Our commitment to transparency and customer satisfaction is unwavering, ensuring you have a reliable partner for all your banking needs.

            </p>
            <br />
            <p>We believe in empowering our customers with the freedom to manage their finances effortlessly, offering a wide range of services designed to make banking a seamless experience.</p>
            <br />
            <img src={img2} alt="" />
       
        </div>
    </div>
}

export default About