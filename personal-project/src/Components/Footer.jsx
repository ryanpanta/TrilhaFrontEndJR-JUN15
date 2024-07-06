import React from "react";
import styles from "./Footer.module.css";
function Footer() {
    return (
        <footer id="contato" className={styles.footer}>
            <div className={styles.grid}>
                <p>Entre em contato comigo, estou disponível 👋 </p>
                <div className={styles.links}>
                    <a href="mailto:ryan.rodrigues62@hotmail.com">
                        ryan.rodrigues62@hotmail.com
                    </a>
                    <a href="https://www.linkedin.com/in/ryanrodrigves">
                        linkedin.com/in/ryanrodrigves
                    </a>
                    <a href="https://www.github.com/ryanpanta">
                        github.com/ryanpanta
                    </a>
                </div>
            </div>
            <p className={styles.direitos}>Ryan, todos os direitos reservados.</p>
        </footer>
    );
}

export default Footer;
