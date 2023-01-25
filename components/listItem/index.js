import styles from '@/styles/Home.module.css'
import axios from 'axios'
import { useState } from 'react';

export default function ListItem(){
    const [product, setProduct] = useState([]);

    const options = {
        method: 'GET',
        url: 'https://unofficial-shein.p.rapidapi.com/products/search',
        params: {
          keywords: 'jacket',
          language: 'en',
          country: 'US',
          currency: 'USD',
          sort: '7',
          limit: '20',
          page: '1'
        },
        headers: {
          'X-RapidAPI-Key': '8db434156fmsh8abfd27620c9887p121d34jsn2447b940325c',
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
            // setProduct([]);
        });

    return (
            <>
            <div className={styles.mainitem}>
                {product != null && product.length > 0 && product.map((item, index) => (
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