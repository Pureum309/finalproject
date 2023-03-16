import styles from '@/styles/Home.module.css'
import axios from 'axios'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ListItem(props){
    const [product, setProduct] = useState(null);
    const [keyword, setKeyword] = useState("");
    const r = useRouter();

    const options = {
        method: 'GET',
        url: 'https://unofficial-shein.p.rapidapi.com/products/search',
        params: {
          keywords: props.keyword,
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

      const loadData = async () => {
        console.log("loadData()");
      await axios.request(options)
      .then((response) => {
          // console.clear();
          console.log(response.data);
          setProduct(response.data.info.products);
          setKeyword(props.keyword);
      }).catch(function (error) {
          console.error(error);
          // setProduct([]);
      });
    }

    if (keyword != "" && keyword != props.keyword)
    {
        loadData();
    }

    useEffect(() => {
      //   const loadData = async () => {
      //     await axios.request(options)
      //     .then((response) => {
      //         // console.clear();
      //         console.log(response.data);
      //         setProduct(response.data.info.products);
      //     }).catch(function (error) {
      //         console.error(error);
      //         // setProduct([]);
      //     });
      //   }
        loadData();
    }, []);
      const handleClick = (select) => {
          console.log("product clickkkkeeedddd!")
          console.log(select)
          console.log("end of select");
          r.push({
              pathname: '/productItem',
              query: {
                  title: select.goods_name,
                  imgs: select.goods_img,
                  price: select.salePrice.amountWithSymbol
              }
          })
      }
        return (
            <>
            <div className={props.mainitem || props.productMainItem}>
                {product != null && product.length > 0 && product.slice(0,props.limit).map((item, index) => (
                    <div className={props.items || props.productItems} key={index} onClick={() => handleClick(item)}>
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