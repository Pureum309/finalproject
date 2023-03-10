import Product from '@/components/productItem'
import SizeChart from '@/components/sizechart'
import styles from '@/styles/Home.module.css'

import Logo from '@/components/logo'

export default function Image(){ 

return (
        <>
            <Logo /> 
            <main className={styles.productMain}>
                <Product/>
                <SizeChart/>
            </main>
        </>
    )
}

