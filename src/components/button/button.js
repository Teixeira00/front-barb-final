import styles from "./button.module.css"; 
import Link from "next/link"; 

export default function Button({ children, link, ...props }) {
    // Se a propriedade 'link' for passada, usamos Link
    if (link) {
        return (
            <Link href={link} passHref>
                <button className={styles.button} {...props}>
                    {children}
                </button>
            </Link>
        );
    }

    // Caso contrário, retorna um botão normal
    return (
        <button className={styles.button} {...props}>
            {children}
        </button>
    );
}