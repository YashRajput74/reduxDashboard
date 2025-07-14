import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars, faMagnifyingGlass, faBell, faPowerOff
} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../features/auth/authSlice';

export default function Header() {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [tempName, setTempName] = useState('');
    const user = useSelector((state) => state.auth.user);
    
    const handleLogin = () => {
        if (tempName.trim()) {
            dispatch(login({ name: tempName }));
            setIsModalOpen(false);
            setTempName('');
        }
    }

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <header>
            <img src="/purple_logo.svg" alt="logo" />
            <nav>
                <div className="hamburger">
                    <FontAwesomeIcon icon={faBars} size="lg" className='faicon' />
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='faicon' />
                    <input type="text" placeholder='Search Projects' value={inputValue} />
                </div>
                <div>
                    <div>
                        {user ? (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
                                <p style={{ margin: 0 }}>{user.name}</p>
                                <button onClick={handleLogout} className="logout-button" style={{ cursor: 'pointer', padding: '4px 8px' }}>Logout</button>
                            </div>
                        ) : (
                            <p onClick={() => setIsModalOpen(true)} style={{ cursor: 'pointer' }}>
                                Guest
                            </p>
                        )}
                    </div>
                    <FontAwesomeIcon icon={faEnvelope} className='faicon' />
                    <FontAwesomeIcon icon={faBell} className='faicon' />
                    <FontAwesomeIcon icon={faPowerOff} className='faicon' />
                    <FontAwesomeIcon icon={faBars} size="lg" className='faicon' />
                </div>
            </nav>
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h3>Sign In</h3>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={tempName}
                            onChange={(e) => setTempName(e.target.value)}
                        />
                        <button onClick={handleLogin}>Login</button>
                        <button onClick={() => setIsModalOpen(false)}>Cancel</button>
                    </div>
                </div>
            )}
        </header>
    )
}