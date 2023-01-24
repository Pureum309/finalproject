import styles from '@/styles/Home.module.css'

export default function CategoryCard({

    txt = "Tops",
    img = "./dress_placeholder.png"

}){

    return (

            <div className={styles.categorycont}>
                <img 
                    className={styles.categoryimg}
                    src = {img}
                />
                <div className={styles.categorytxt}>
                    {txt}
                </div>
            </div>
    )
}