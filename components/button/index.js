import styles from '@/styles/Home.module.css'

export default function Button({
    text = "text"
}) {
    return (
        <button 
            className={styles.button}
            type="submit">
            {text}
        </button>
    )
}

