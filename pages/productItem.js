import Product from '@/components/productItem'
import SizeChart from '@/components/sizechart'
import styles from '@/styles/Home.module.css'

import Logo from '@/components/logo'

export default function Image(){ 

return (
        <>
            <div>
                <Logo />
            </div> 
            
            <div className={styles.productMain2}>
                <Product/>
                <SizeChart/>
            </div>
        </>
    )
}

