import styles from '@/styles/Home.module.css'

export default function CategoryCard({

    txt = "Tops"
}){

    return (

            <div className={styles.categorycont}>
                <img 
                    className={styles.categoryimg}
                    src = "./dress_placeholder.png" 
                />
                <div className={styles.categorytxt}>
                    {txt}
                </div>
            </div>
    )
}