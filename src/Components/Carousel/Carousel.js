import './Carousel.css';
import { useState } from 'react';

function Carousel(props) {
    const { imgAddresses } = props;
    const [addresses, setAddresses] = useState(imgAddresses);

    return (
        <div className="Carousel slider">
            {addresses.map((address, index) => {
                return (<img className='carousel-img' key={index} src={address} />)
            })}
        </div>
    );
}

export default Carousel;