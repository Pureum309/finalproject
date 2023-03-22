import styles from "@/styles/Products.module.css";
import ListItem from "@/components/listItem";
import Logo from "@/components/logo";

export default function Product() {
    return (
        <>
            <div className={styles.logoMain}>
                <Logo />
            </div>
            <div productMainCont={styles.productMainCont}>
                <ListItem
                    limit={24}
                    productMainItem={styles.productMainItem}
                    productItems={styles.productItems}
                    productItem1={styles.productItem1}
                    productItemImage={styles.productItemImage}
                    productItemText={styles.productItemText}
                    product_goods_name={styles.product_goods_name}
                    product_goods_price={styles.product_goods_price}
                    keyword="Women Top and Bottom"
                />
            </div>
        </>
    );
}
