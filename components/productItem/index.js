import styles from '@/styles/Home.module.css'

export default function Product({
    
     })
  {
    return (
        <div className={styles.product}>
            <div className={styles.productItem}>
        </div>
        <h2>Title</h2>
        <div className={styles.description}>Description</div>
        <div>
            <div>
            <div className={styles.amount}>$XXXX</div>
            <button>Add to Cart</button>
            </div>
        </div>
        </div>
    )
}