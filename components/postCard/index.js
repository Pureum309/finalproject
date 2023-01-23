import styles from '@/styles/Home.module.css'

export default function BottomCard({
    txtHeading = "Heading Text...",
    txt = "description..."

}) {
    return (
        <div className={styles.bottomCont}>
            <div className={styles.bottomInnerCont}>
                <h3>{txtHeading}</h3>
                <p>{txt}</p>
            </div>
        </div>
    )
}

