import React from 'react'
import RyanLogo from '../assets/Ryan.svg?react'
import styles from './Header.module.css'
function Header() {
  return (
    <header className={styles.header}>
        <RyanLogo />
        <nav className={styles.nav}>
            <ul>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#hobbies">Hobbies</a></li>
                <li><a href="#motivacao">Motivação</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header