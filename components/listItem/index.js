import styles from '@/styles/Home.module.css'
import axios from 'axios'
import { useState, useEffect } from 'react';

export default function ListItem(props){
    const [product, setProduct] = useState(null);

    const options = {
        method: 'GET',
        url: 'https://unofficial-shein.p.rapidapi.com/products/search',
        params: {
          keywords: 'Women Top and Bottom',
          language: 'en',
          country: 'US',
          currency: 'USD',
          sort: '7',
          limit: '20',
          page: '1'
        },
        headers: {
          'X-RapidAPI-Key': '7c2b8fa67amshc778ca1794495a2p144c0djsn30fa174cd401',
          'X-RapidAPI-Host': 'unofficial-shein.p.rapidapi.com'
        }
      };

      useEffect(() => {
          const loadData = async () => {
            await axios.request(options)
            .then((response) => {
                // console.clear();
                console.log(response.data);
                setProduct(response.data.info.products);
            }).catch(function (error) {
                console.error(error);
                // setProduct([]);
            });
          }

          loadData();
      }, []);

        return (
            <>
            <div className={props.mainitem || props.productMainItem}>
                {product != null && product.length > 0 && product.slice(0,props.limit).map((item, index) => (
                    <div className={props.items || props.productItems} key={index}>
                        <div className = {props.item1 || props.productItem1}>
                            <div>
                                <img className = {props.itemImage || props.productItemImage } src= {item.goods_img}/>
                            </div>
                        </div> 
                        <div className={props.itemText || props.productItemText}>
                            <a>{item.goods_name}</a> 
                            <a>{item.salePrice.amountWithSymbol}</a>
                        </div>
                    </div>
                ))}
            </div>
            </>
    )
}