import './all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './imgs/logo-light.png';
import icons from './imgs/payment-icons-1.png';
import './style/style.css';

function Footer() {
    return (
        <footer>
            <div className='container-fluid bg-dark pb-5'>
                <div className='container d-flex py-5 col-12'>
                    <div className='fl col-2'>
                        <div><img src={logo} /></div>
                        <div className='mt-4 text-white'>
                            <i className="fa-solid fa-location-dot  fa-xl me-2" style={{ color: '#d4d6d8' }} />
                            29 SE 2nd Ave, Miami Florida 33131, United States <br />
                            <div className='mt-3'> <i className="fa-regular fa-envelope fa-xl me-2" style={{ color: '#d9d9d9' }} /> info@example.com</div>
                            <h4 className='mt-3'>+91 7414845496</h4>
                        </div>
                    </div>
                    <div className=' text-center col-2'>
                        <div><p className='text-white'>SHOPPING</p></div>
                        <div className='ftra text-center me-5 lh-lg'>
                            <ul>
                                <li><a href="#" className='text-white text-decoration-none'>Wishlist</a></li>
                                <li><a href="#" className='text-white text-decoration-none'>Shop By Brand</a></li>
                                <li><a href="#" className='text-white text-decoration-none'>Offers</a></li>
                                <li><a href="#" className='text-white text-decoration-none'>Track Order</a></li>
                                <li><a href="#" className='text-white text-decoration-none'>Size Guide</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className=' text-center col-3'>
                        <div><p className='text-white'>INFORMATION</p></div>
                        <div className='ftra text-center me-5 lh-lg'>
                            <ul>
                                <li><a href="#" className='text-white text-decoration-none'>Track Order</a></li>
                                <li><a href="#" className='text-white text-decoration-none'>Shipping & Returns</a></li>
                                <li><a href="#" className='text-white text-decoration-none'>About us</a></li>
                                <li><a href="#" className='text-white text-decoration-none'>Help</a></li>
                                <li><a href="#" className='text-white text-decoration-none'>Gift Cards</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className=' text-center col-2'>
                        <div><p className='text-white'>ACCOUNT</p></div>
                        <div className='ftra text-center me-5 lh-lg'>
                            <ul>
                                <li><a href="#" className='text-white text-decoration-none'>Cart</a></li>
                                <li><a href="#" className='text-white text-decoration-none'>My Account</a></li>
                                <li><a href="#" className='text-white text-decoration-none'>My Orders</a></li>
                                <li><a href="#" className='text-white text-decoration-none'>Wishlist</a></li>
                                <li><a href="#" className='text-white text-decoration-none'>Affiliate Program</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h4 className='text-white'>Let’s keep in touch</h4>
                        <div className='fs align-content-center rounded-2 ps-3 mt-5'>
                            <input type="search" placeholder='Serch' />
                            <i className="fa-solid fa-arrow-right ms-2 fa-xl" style={{ color: '#dbdbdc' }} />

                        </div>
                        <div className='mt-4'>
                            <i className="fa-brands fa-facebook-f fa-xl me-3" style={{ color: '#cdced0' }} />
                            <i className="fa-brands fa-tiktok fa-xl me-3" style={{ color: '#cdced0' }} />
                            <i className="fa-brands fa-x-twitter fa-xl me-3" style={{ color: '#cdced0' }} />
                            <i className="fa-brands fa-instagram fa-xl me-3" style={{ color: '#cdced0' }} />
                            <i className="fa-brands fa-youtube fa-xl me-3" style={{ color: '#cdced0' }} />
                        </div>
                    </div>
                </div>
                <div className='container d-flex container1 align-items-center rounded-2 justify-content-around'>
                    <div className='d-flex'>
                        <div><i className="fa-solid fa-phone fa-2xl mt-4 me-3" style={{ color: '#bdbfc2' }} /></div>
                        <div className='lh-base'>
                            <div><i className='fw-bold text-white'>Didn't find what you were looking for?</i></div>
                            <div><a href="#" className='text-white'>Contact us</a></div>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div><i className="fa-regular fa-face-smile fa-2xl mt-4 me-3" style={{ color: '#bdbfc2' }} /></div>
                        <div className='lh-base'>
                            <div><i className='fw-bold text-white'>How can we help you today?</i></div>
                            <div><a href="#" className='text-white'>Help Center</a></div>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div><i className="fa-solid fa-life-ring fa-2xl mt-4 me-3 " style={{ color: '#bdbfc2' }} /></div>
                        <div className='lh-base'>
                            <div><i className='fw-bold text-white'>We’d love to hear what you think!</i></div>
                            <div><a href="#" className='text-white'>Give Feedback</a></div>
                        </div>
                    </div>
                </div>
                <div className='container mt-5 d-flex justify-content-between'>
                        <div><i className='text-white'>Copyright © Merto. All Rights Reserved</i></div>
                        <div className='fc'><img src={icons}/></div>
                </div>
            </div>
        </footer>
    )
}
export default Footer