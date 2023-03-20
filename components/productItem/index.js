import { useRouter } from 'next/router'
import styles from '@/styles/Home.module.css'

export default function Product(){
    const r = useRouter();
    const { title, imgs, price } = r.query;

    return (
        <div className={styles.productCont}>

            <div className={styles.productItem}>
                <img src={imgs} alt={title} />
            </div>

            <div className={styles.productInnerCont}>
                <h2>{title}</h2>
                <div className={styles.productInfo}>
                    <div className={styles.amount}>{price}</div>
                    <button className={styles.addcartbtn}>Add to Cart</button>
                </div>
            </div>

        </div>
    )
}