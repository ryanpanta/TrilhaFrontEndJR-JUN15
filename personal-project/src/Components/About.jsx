import React from "react";
import styles from "./About.module.css";
import Alfenas from "../assets/Alfenas.jpg";
function About() {
    return (
        <section id="sobre" className={styles.sobre}>
            <div className={styles.container}>
                <h2 className={`subtitulo ${styles.subtitulo}`}>Sobre</h2>
                <div className={styles.grid}>
                    <p>
                        Meu nome é Ryan Rodrigues, tenho 22 anos e sou natural
                        de Alfenas, Minas Gerais ☕. Desde pequeno, sempre fui
                        fascinado por computadores e tecnologia, o que me levou
                        a escolher <strong>Ciência da Computação</strong> como carreira. Em 2021,
                        realizei meu sonho de ingressar na Universidade Federal
                        de Alfenas. Durante a graduação, tenho me especializado
                        em <strong>Desenvolvimento Web</strong> e <strong>UI/UX</strong>, áreas que me apaixonam e
                        nas quais tenho me aprofundado cada vez mais.
                    </p>
                    <div className={styles.foto}>
                        <img
                            src={Alfenas}
                            alt="Foto de Alfenas, Minas Gerais"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
