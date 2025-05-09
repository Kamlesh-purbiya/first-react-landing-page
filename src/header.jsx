import './style/style.css';
import './all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './imgs/logo1.png';

function He() {
    return (
        <header className=''>
            <div className='w-full f align-content-center'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-2 fl py-2'><img src={logo} /></div>
                        <div className='col-5 align-content-center d-flex ms-4'>
                            <div className='col-5 d-flex align-items-center'>
                                <div><i class="fa-solid fa-phone fa-2xl me-2"></i></div>
                                <div>
                                    <div><i>Contact us 24/7</i></div>
                                    <div><b>+91 7414845496</b></div>
                                </div>
                            </div>
                            <div className='col-7 srch bg-body-tertiary rounded-3 align-content-center d-flex '>
                                <select classname>
                                    <option value disabled selected>All Categories</option>
                                    <option value>Car</option>
                                    <option value>Car</option>
                                    <option value>Car</option>
                                    <option value>Car</option>
                                    <option value>Car</option>
                                    <option value>Car</option>
                                    <option value>Car</option>
                                </select>


                                <div className='h-50 mt-3 ms-1'><input type="search" placeholder='Search Products' /></div>
                                <button className='rounded-3 border-0 ms-4 bg-dark'><i className="fa-solid fa-magnifying-glass px-2 fa-2xl" style={{ color: '#c8c9cb' }} />
                                </button>
                            </div>
                        </div>
                        <div className='col-4 ms-5'>
                            <div className='drp d-flex justify-content-between h-100'>
                                <div classname='ms-4 col-6 '>
                                    <select >
                                        <option value disabled selected>English</option>
                                        <option value>Car</option>
                                        <option value>Car</option>
                                        <option value>Car</option>
                                        <option value>Car</option>
                                        <option value>Car</option>
                                        <option value>Car</option>
                                        <option value>Car</option>
                                    </select>
                                    <select classname=''>
                                        <option value disabled selected>USD</option>
                                        <option value>Car</option>
                                        <option value>Car</option>
                                        <option value>Car</option>
                                        <option value>Car</option>
                                        <option value>Car</option>
                                        <option value>Car</option>
                                        <option value>Car</option>
                                    </select>
                                </div>
                                <div className='align-items-center d-flex justify-content-around col-5'>
                                    <div><i class="fa-regular fa-user"></i><span className='ms-3'>Account</span></div>
                                    <div>
                                        <div>
                                            <i className="fa-regular fa-heart mx-3 fa-xl" />
                                            <i className="fa-solid fa-cart-shopping fa-xl" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className=" w-full d-flex justify-content-between">
                    <div className='align-content-center sc pe-4 col-2'>
                        <i class="fa-solid fa-bars mx-2"></i>
                        <i>SHOP BY CATEGORIES</i>
                    </div>
                    <div className='col-8'>
                        <ul className="nav justify-content-center">
                            <li className="nav-item">
                                <a className="nav-link active text-black p-2" href="#">Homepages</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-black p-2" href="#">Categories</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-black p-2" href="#">Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-black p-2" href="#">Pages</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-black p-2" href="#">About us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-black  p-2" href="#">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-black  p-2" href="#">Best Discount <i class="fa-solid fa-tag fa-xl"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className='align-content-center col-2'>
                        <i class="ms-5">Recently Viewed</i>
                    </div>
                </div>
            </div>
        </header>

    );
}
export default He;