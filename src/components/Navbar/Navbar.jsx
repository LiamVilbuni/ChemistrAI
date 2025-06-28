'use client';
import './Navbar.css';
import assets from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Navbar = () => {

    const toggleColorMode = () => {
        const currentMode = localStorage.getItem('color-mode') || 'light';
        const newMode = currentMode === 'dark' ? 'light' : 'dark';
        localStorage.setItem('color-mode', newMode);
        setColorMode();
    };

    const setColorMode = () => {
        const root = document.documentElement;
        const currentMode = localStorage.getItem('color-mode') || 'light';
        if (currentMode === 'dark') {
            root.style.setProperty('--color-primary', '#0077B6');
            root.style.setProperty('--color-secondary', '#7209B7');
            root.style.setProperty('--color-accent', '#3EF8C1');
            root.style.setProperty('--color-background', '#F5F7FA');
            root.style.setProperty('--color-surface', '#E1E5EC');
            root.style.setProperty('--color-text-primary', '#1E1E1E');
            root.style.setProperty('--color-text-secondary', '#4B4B4B');
            root.style.setProperty('--color-success', '#00C896');
            root.style.setProperty('--color-error', '#D72638');

            document.getElementById('light-mode').style.display = 'block';
            document.getElementById('dark-mode').style.display = 'none';
        } else {
            root.style.setProperty('--color-primary', '#E50914');
            root.style.setProperty('--color-secondary', '#B5179E');
            root.style.setProperty('--color-accent', '#3EF8C1');
            root.style.setProperty('--color-background', '#0B0F18');
            root.style.setProperty('--color-surface', '#1E2633');
            root.style.setProperty('--color-text-primary', '#F5F7FA');
            root.style.setProperty('--color-text-secondary', '#C0C7D2');
            root.style.setProperty('--color-success', '#00E6AA');
            root.style.setProperty('--color-error', '#FF4D5B');

            document.getElementById('light-mode').style.display = 'none';
            document.getElementById('dark-mode').style.display = 'block';
        }

        if (!localStorage.getItem('color-mode')) {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                localStorage.setItem('color-mode', 'dark');
            } else {
                localStorage.setItem('color-mode', 'light');
            }
        }
    };

    React.useEffect(() => {
        const lightModeIcon = document.getElementById('light-mode');
        const darkModeIcon = document.getElementById('dark-mode');
        lightModeIcon.addEventListener('click', toggleColorMode);
        darkModeIcon.addEventListener('click', toggleColorMode);
        setColorMode();

        return () => {
            lightModeIcon.removeEventListener('click', toggleColorMode);
            darkModeIcon.removeEventListener('click', toggleColorMode);
        };
    }, []);

    return (
        <div className="navbar">
            <div className="navbar__sidebar">
                <div className='navbar__logo'>
                    <p><a href="/">ChemistrAI</a></p>
                </div>

                <div className="navbar__links">
                    <ul>
                        <li><a href="/about" className="navbar__link" id="navbar__link-about">About</a></li>
                        <li><a href="/features" className="navbar__link" id="navbar__link-features">Features</a></li>
                    </ul>
                </div>
            </div>

            <div className='navbar__color-mode'>
                <Image src={assets.sun} alt="Light Mode" height={32} width={32} priority={true} className='navbar__color-mode-icon' id='dark-mode' />
                <Image src={assets.moon} alt="Dark Mode" height={32} width={32} priority={true} className='navbar__color-mode-icon' id='light-mode' />
            </div>

            <div className='navbar__auth'>
                <a href="/auth/login" className="navbar__auth-link" id="navbar__auth-link-login">Login</a>
                <a href="/auth/signup" className="navbar__auth-link" id="navbar__auth-link-signup">Sign Up</a>
            </div>
        </div>
    )
};

export default Navbar;