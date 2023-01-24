import styles from '@/styles/Home.module.css'

export default function ListItem({

}){

    return (

            <div className={styles.mainitem}>
                <div className={styles.items}><div className = {styles.item1}><div></div></div> <a>item name</a> <a>$$$ Price</a></div>
                <div className={styles.items}><div className = {styles.item2}><div></div></div><a>item name</a> <a>$$$ Price</a></div>
                <div className={styles.items}><div className = {styles.item3}><div></div></div><a>item name</a> <a>$$$ Price</a></div>
                <div className={styles.items}><div className = {styles.item4}><div></div></div><a>item name</a> <a>$$$ Price</a></div>
            </div>
    )
}