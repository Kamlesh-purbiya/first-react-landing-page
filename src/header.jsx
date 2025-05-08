import './style/style.css';
import './all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './imgs/logo1.png';

function He() {
    return (
        <header>
            <div className='container'>


                <div className='row fn align-content-center'>
                    <div className='col-2 fl py-2'><img src={logo} /></div>
                    <div className='col-5 align-content-center d-flex'>
                        <div className='col-5 d-flex align-items-center'>
                            <div><i class="fa-solid fa-phone fa-2xl me-2"></i></div>
                            <div>
                                <div><i>Contact us 24/7</i></div>
                                <div><b>+91 7414845496</b></div>
                            </div>
                        </div>
                        <div className='col-7 srch bg-body-tertiary rounded-3 align-content-center d-flex'>
                            <select classname=''>
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
                            <button className='rounded-3 border-0 ms-3 bg-dark'><i className="fa-solid fa-magnifying-glass px-2 fa-2xl" style={{ color: '#c8c9cb' }} />
                            </button>
                        </div>
                    </div>
                    <div className='col-5'>
                        <div>
                        <select classname=''>
                                <option value disabled selected>All Categories</option>
                                <option value>Car</option>
                                <option value>Car</option>
                                <option value>Car</option>
                                <option value>Car</option>
                                <option value>Car</option>
                                <option value>Car</option>
                                <option value>Car</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="bg-warning w-full">
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Active</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>

    );
}
export default He;