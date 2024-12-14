import React, {Component} from "react";
import "./Footer.scss";

class Footer extends Component {
    render() {
        return (
            <footer>
                <small className="footer-title">Contact me</small>
                <div className="flex justify-center flex-col items-center">
                    <div className="w-1/3 flex justify-around">
                        <a
                            className="flex justify-between items-center"
                            href="https://github.cosm/mblmarlon98"
                            target="_blank">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/icons/github.svg`} className="h-[30px]" alt=""/>
                        </a>
                        <a
                            className="flex justify-between items-center"
                            href="https://www.linkedin.com/in/marlon-berdefy-39211b141/"
                            target="_blank">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/icons/linkedin.svg`} className="h-[30px]" alt=""/>
                        </a>
                        <a
                            className="flex justify-between items-center"
                            href="mailto:berdefymarlon@gmail.com?subject=Project%20Inquiry%20from%20mbl.com&body=Hi%20Marlon,%0D%0A%0D%0AI%20am%20reaching%20out%20regarding%20a%20potential%20project.%20I've%20had%20the%20chance%20to%20explore%20your%20work%20on%20your%20website,%20and%20I%20would%20like%20to%20discuss%20a%20specific%20project%20in%20more%20detail.%0D%0A%0D%0ACould%20you%20please%20provide%20additional%20information%20on%20your%20availability,%20rates,%20and%20the%20next%20steps%20for%20starting%20a%20collaboration?%0D%0A%0D%0AThank%20you,%0D%0A[Sender's%20Name]"
                            target="_blank">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/icons/email.svg`} className="h-[30px]" alt=""/>
                        </a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
