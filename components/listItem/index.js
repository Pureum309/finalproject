import styles from '@/styles/Home.module.css'
import axios from 'axios'
import { useState } from 'react';

export default function ListItem(){
    const [product, setProduct] = useState([]);

    const options = {
        method: 'GET',
        url: 'https://unofficial-shein.p.rapidapi.com/products/list',
        params: {
          cat_id: '1980',
          adp: '10170797',
          language: 'en',
          country: 'US',
          currency: 'USD',
          sort: '7',
          limit: '20',
          page: '1'
        },
        headers: {
          'X-RapidAPI-Key': '08f7b71a5dmsh33c5dbaf83cb8b8p190223jsn8265577bbee3',
          'X-RapidAPI-Host': 'unofficial-shein.p.rapidapi.com'
        }
    };
    
    axios.request(options)
            .then((response) => {
            console.clear();
            console.log(response.data);
            setProduct(response.data.info.products);
        }).catch(function (error) {
            console.error(error);
            setProduct();
        });

    return (
            <>
            <div className={styles.mainitem}>
                {product.map((item, index) => (
                    <div className={styles.items} key={index}>
                    <div className = {styles.item1}>
                        <div>
                            <img className = {styles.itemImage} src= {item.goods_img}/>
                        </div>
                    </div> 
                        <a>{item.goods_name}</a> 
                        <a>{item.salePrice.amountWithSymbol}</a>
                    </div>
                ))}
            </div>
            </>
    )
}