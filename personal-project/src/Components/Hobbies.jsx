import React from "react";
import styles from "./Hobbies.module.css";
import Cat from "../assets/cat.svg?react";
import TableTenis from "../assets/table-tenis.svg?react";
function Hobbies() {
    return (
        <section className={styles.hobbies} id="hobbies">
            <div className={styles.container}>
                <h2 className={`subtitulo ${styles.subtitulo}`}>Hobbies</h2>
                <div className={styles.grid}>
                    <div className={styles.hobbieItem}>
                        <Cat />
                        <h3>Gatinhos</h3>
                        <p>
                            Amo gatinhos e tenho duas adoráveis companheiras.
                            Gosto de passar o tempo brincando com elas, o que
                            sempre traz alegria e momentos de diversão para o
                            meu dia.
                        </p>
                    </div>
                    <div className={styles.hobbieItem}>
                        <TableTenis />
                        <h3>Tênis de Mesa</h3>
                        <p>
                            Gosto de praticar tênis de mesa quando tenho um
                            tempo disponível. A estratégia por trás do esporte é
                            algo que me atrai e aprecio bastante. Além de ser
                            uma forma de descontração, também me proporciona
                            exercício físico.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hobbies;
