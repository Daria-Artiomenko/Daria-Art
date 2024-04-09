import './promo.scss';
import avatar from '../../assets/img/avatar.jpg';
const Promo = () => {
    return (
        <section className='promo'>
            <div className="container">
                <div className="promo-wrapper">
                    <div className="promo-text">
                        <div className="promo-hello">Hello World!</div>
                        <p className="promo-info">I’m Darya Artyomenko, self-motivated and enthusiastic Frontend React Developer, based in Minsk, Belarus. </p>
                    </div>
                    <img src={avatar} alt="avatar"  className='promo-avatar'/>
                </div>
            </div>
        </section>
    )
}
export default Promo;