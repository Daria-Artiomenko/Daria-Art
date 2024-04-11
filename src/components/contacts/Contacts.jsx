import linkedin from '../../assets/icons/linkedin.svg';
import github from '../../assets/icons/github.svg';
import instagram from '../../assets/icons/instagram.svg';


import './contacts.scss';


const Contacts = () => {

    return (
        <section className='contacts'>
            <div className="container">
                <div className="contacts-title">Contacts</div>
                <p className='contacts-text'>Do you have any questions?  Feel free to contact me.</p>
                <div className="contacts-info">
                    <a href="tel:+375257167250" className="contacts-phone">+375 (25) 716-72-50 (Life)</a>
                    <a href="mailto:daridaraart@gmail.com" className="contacts-email">daridaraart@gmail.com</a>
                </div>
                <div className='contacts-links'>
                    <a href="https://www.linkedin.com/in/%D0%B4%D0%B0%D1%80%D1%8C%D1%8F-%D0%B0%D1%80%D1%82%D1%91%D0%BC%D0%B5%D0%BD%D0%BA%D0%BE-924655239/" className="contacts-link"><img src={linkedin} alt="linkedin" /></a>
                    <a href="https://github.com/Daria-Artiomenko" className="contacts-link"><img src={github} alt="github" /></a>
                    <a href="https://www.instagram.com/dara_art__/" className="contacts-link"><img src={instagram} alt="instagram" /></a>
                </div>
            </div>
        </section>
    )
}
export default Contacts;