import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import qzone1 from '../../assets/qZone1.png';
import qzone2 from '../../assets/qZone2.png';
import qzone3 from '../../assets/qZone3.png';

const RightSidebar = () => {
    return (
        <div>
            <h4>Login With</h4>
            <div>
                <Button className='px-5 mb-2 w-100' variant="outline-primary"><FaGoogle /> Login With Google</Button>
                <Button className='px-5 w-100' variant="outline-secondary"><FaGithub /> Login With Github</Button>
            </div>
            <div className='mt-4'>
                <h4>Find Us On</h4>
                <Button className='ps-2 w-100 text-start mb-2' variant="outline-info"><FaFacebookF /> Facebook</Button>
                <Button className='ps-2 w-100 text-start mb-2' variant="outline-primary"><FaTwitter /> Twitter</Button>
                <Button className='ps-2 w-100 text-start mb-2' variant="outline-danger"><FaInstagram /> Instagram</Button>

            </div>
            <div className='mt-4 rounded text-center' style={{ backgroundColor: "#F3F3F3" }}>
                <h4 className='p-3'>Q Zone </h4>
                <img className='img-fluid' src={qzone1} alt="" />
                <img className='img-fluid' src={qzone2} alt="" />
                <img className='img-fluid' src={qzone3} alt="" />
            </div>
        </div>
    );
};

export default RightSidebar;