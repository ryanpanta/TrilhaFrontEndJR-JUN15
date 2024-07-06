import React from "react";
import styles from "./Motivation.module.css";
function Motivation() {
    return (
        <section id="motivacao" className={styles.motivacao}>
            <div className={styles.container}>
                <h2 className={`subtitulo ${styles.subtitulo}`}>Motivação</h2>
                <p>
                    Quero participar da comunidade <strong>Código Certo Coders</strong> como
                    voluntário para contribuir com a comunidade e compartilhar o
                    conhecimento que adquiri em desenvolvimento e UX/UI. Meu
                    principal foco é <strong>aprender</strong> com pessoas experientes, pois
                    acredito que a colaboração com profissionais <strong>dedicados</strong> e
                    <strong> apaixonados</strong> pode impulsionar meu crescimento. Além disso,
                    vejo essa oportunidade como uma forma de retribuir o que
                    aprendi, criando soluções inovadoras e fortalecendo nossa
                    comunidade.
                </p>
            </div>
        </section>
    );
}

export default Motivation;
