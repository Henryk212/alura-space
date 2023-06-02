import Cabecalho from "../../componentes/Cabecalho";
import Menu from "../../componentes/Menu";
import banner from "../PaginaInicial/banner.png";
import styles from "../PaginaInicial/PaginaInicial.module.scss";

export default function PaginaInicial(){
    return ( 
        <>
        <Cabecalho/>
        <main>
            <section className={styles.principal}>
               <Menu/>
               <div className={styles.principal__imagem}>
                <h1>A Galeria mais completa do espaço</h1>
                <img src={banner} alt="A imagem da terra vista do espaço" />
               </div>
            </section>
        </main>    
        </>
    ) 
        
    
}