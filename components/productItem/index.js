import { useRouter } from 'next/router'
import styles from '@/styles/Home.module.css'

export default function Product(){
    const r = useRouter();
    const { title, imgs, price } = r.query;

    return (
        <div className={styles.product}>

            <div className={styles.productItem}>
                <img src={imgs} alt={title} />
            </div>

            <h2>{title}</h2>

            {/* <div className={styles.description}>Description</div> */}

            <div className={styles.productInfo}>
                <div className={styles.amount}>{price}</div>
                <button>Add to Cart</button>
            </div>

        </div>
    )
}