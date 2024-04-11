import './promo.scss';
import avatar from '../../assets/img/avatar.jpg';
import cv from '../../assets/pdf/CV_Darya_Artyomenko.pdf';
const Promo = () => {
    return (
        <section className='promo'>
            <div className="container">
                <div className="promo-wrapper">
                    <div className="promo-text">
                        <div className="promo-hello">Hello World!</div>
                        <p className="promo-info">I’m <span>Darya Artyomenko</span>, self-motivated and enthusiastic Frontend React Developer, based in Minsk, Belarus. </p>
                        <div className="promo-CV">
                            <div className="promo-CV-title">My CV</div>
                            <a href={cv} className="promo-CV-view" target='_blank'>view</a>
                            <a href={cv} className="promo-CV-download" download>download</a>
                        </div>
                    </div>
                    <img src={avatar} alt="avatar"  className='promo-avatar'/>
                </div>
            </div>
        </section>
    )
}
export default Promo;