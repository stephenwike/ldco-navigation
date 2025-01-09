import React from 'react';
import Link from 'next/link';
import styles from './Navigation.module.css';

interface NavigationProps {
    isLoggedIn: boolean;
    onLogout?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ isLoggedIn, onLogout }) => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navContainer}>
                <Link href="/" className={styles.logo}>
                    MyApp
                </Link>
                <ul className={styles.navList}>
                    {!isLoggedIn ? (
                        <>
                            <li className={styles.navItem}>
                                <Link href="https://auth.example.com/login">Login</Link>
                            </li>
                            <li className={styles.navItem}>
                                <Link href="https://auth.example.com/signup">Sign Up</Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className={styles.navItem}>
                                <Link href="/dashboard">Dashboard</Link>
                            </li>
                            <li className={styles.navItem}>
                                <button className={styles.logoutButton} onClick={onLogout}>
                                    Logout
                                </button>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
