import React from "react";
import styles from "./Introduction.module.css";
import FotoPerfil from "../assets/ryan.png";
function Introduction() {
    return (
        <section className={styles.container}>
            <div className={styles.grid}>
                <div className={styles.conteudo}>
                    <p>👋 Olá, eu sou o Ryan Rodrigues</p>
                    <h1>
                        Desenvolvedor <br /> Front-end e <br />
                        UX/UI Designer
                    </h1>
                </div>
                <div className={styles.foto}>
                    <img src={FotoPerfil} alt="Foto de perfil" />
                </div>
            </div>
        </section>
    );
}

export default Introduction;
