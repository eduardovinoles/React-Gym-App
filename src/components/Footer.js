import React from "react"


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

            <hr className=" w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul style={{listStyleType:"none"}}>
                    <li><a href="#!">Link 1</a></li>
                    <li><a href="#!">Link 2</a></li>
                    <li><a href="#!">Link 3</a></li>
                    <li><a href="#!">Link 4</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5>Links</h5>
                <ul style={{listStyleType:"none"}}>
                    <li><a href="#!">Link 1</a></li>
                    <li><a href="#!">Link 2</a></li>
                    <li><a href="#!">Link 3</a></li>
                    <li><a href="#!">Link 4</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2022 Copyright:
        <a href="#!"> BlackDog Gym.</a>
    </div>

</footer>

export default Footer