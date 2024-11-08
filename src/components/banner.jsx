import './baner.css'
import imgs from '../assets/special/pexels-kindelmedia-7688460.jpg'

function Banner() {
    return <div className="banner">
        <div className="image">
            <img src={imgs} alt="" />
            <div className='bar'>
                <p>About Us</p>
            </div>
        </div>
    </div>
}

export default Banner