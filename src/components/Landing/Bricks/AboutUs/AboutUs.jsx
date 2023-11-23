import './AboutUs.css'

const AboutUs = () =>{
    return(
        <div className="AboutUs">
            <div className="AboutUs__info">
                <h1 className="AboutUs__info__title">Quienes somos</h1>
                <p className="AboutUs__info__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet interdum ullamcorper, quam sem sodales eros, vel varius orci elit eu nisi.</p>
            </div>
            <img className="AboutUs__img" src='../../../assets/img/landing/AboutUs.jpeg' alt='paisaje'/>
        </div>
    )
}

export default AboutUs