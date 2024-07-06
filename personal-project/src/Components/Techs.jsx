import React from 'react'
import styles from './Techs.module.css'
import JavaScript from '../assets/js.jpg';
import TypeScript from '../assets/ts.jpg';
import ReactJS from '../assets/react.jpg';
function Techs() {
  return (
    <section className={styles.techs}>
        <div className={styles.container}>
            <h2 className={`subtitulo ${styles.subtitulo}`}>
                Tecnologias
            </h2>
            <div className={styles.conteudo}>
                <p>Desenvolvo pequenos projetos pessoais como <strong>Desenvolvedor Front-end</strong> e, como bolsista de iniciação científica, trabalho com a bibilioteca <strong>React.js</strong>. </p>
                <div className={styles.icones}>
                    <div>
                        <img src={JavaScript} alt="Logotipo do JavaScript" />
                    </div>
                    <div>
                        <img src={TypeScript} alt="Logotipo do TypeScript" />
                    </div>
                    <div>
                        <img src={ReactJS} alt="Logotipo do React" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Techs