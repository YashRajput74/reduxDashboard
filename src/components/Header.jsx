import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars, faMagnifyingGlass,  faBell, faPowerOff
} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';

export default function Header() {
    const { inputValue, setInputValue } = useState('');

    return (
        <header>
            <img src="/purple_logo.svg" alt="logo" />
            <nav>
                <div className="hamburger">
                    <FontAwesomeIcon icon={faBars} size="lg" className='faicon'/>
                    <FontAwesomeIcon icon= {faMagnifyingGlass} className='faicon'/>
                    <input type="text" placeholder='Search Projects' value={inputValue} />
                </div>
                <div>
                    <div>
                        <p>David GreyMaax</p>
                    </div>
                    <FontAwesomeIcon icon={faEnvelope} className='faicon' />
                    <FontAwesomeIcon icon={faBell} className='faicon' />
                    <FontAwesomeIcon icon={faPowerOff} className='faicon' />
                    <FontAwesomeIcon icon={faBars} size="lg" className='faicon'/>
                </div>
            </nav>
        </header>
    )
}