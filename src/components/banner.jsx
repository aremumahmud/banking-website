import './baner.css'
import imgs from '../assets/special/pexels-kindelmedia-7688460.jpg'

function Banner({text="About Us"}) {
    return <div className="banner">
        <div className="image">
            <img src={imgs} alt="" />
            <div className='bar'>
                <p>{text}</p>
            </div>
        </div>
    </div>
}

export default Banner