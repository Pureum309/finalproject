import styles from '@/styles/Products.module.css'
import ListItem from "@/components/listItem";
import Logo from "@/components/logo";

export default function Product(){
    return(
        <>
            <Logo />
            <ListItem limit={20} 
                productMainItem={styles.productMainItem }
                productItems={styles.productItems}
                productItem1={styles.productItem1}
                productItemImage={styles.productItemImage}
                productItemText={styles.productItemText}
                keyword = "Women Top and Bottom"
            />
        </>
    )
}