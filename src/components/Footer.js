import React from "react"
import { SocialIcon } from 'react-social-icons';

const styles = {
    textAlign: "left",
    fontFamily: "Black Ops One",
    fontSize: "3vh"
}

const Footer = () => <footer style={styles} className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Contact us</h5>
                <p>General Flores 1234.</p>
                <p>TEL: 2200 12 34</p>
                <p>blackdoggym@gmail.com</p>
            </div>

            <hr className=" w-100 d-md-none pb-0" />

            <div className="col-md-6 mb-md-0 mb-6">
                <div >
                    <div className="col-2" style={{ display: "inline-block" }}><SocialIcon url="https://www.linkedin.com/in/eduardo-vi%C3%B1oles" bgColor="#ff5a01" /></div>
                    <div className="col-2" style={{ display: "inline-block" }}><SocialIcon network="twitter" /></div>
                    <div className="col-2" style={{ display: "inline-block" }}><SocialIcon network="email" url="eduardovinoles@gmail.com" /></div>
                    <div className="col-2" style={{ display: "inline-block" }}><SocialIcon network="whatsapp" url="tel:+059-092-426-352" /></div>
                </div>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2022 Copyright:
        <a href="#!"> BlackDog Gym.</a>
    </div>

</footer>

export default Footer
