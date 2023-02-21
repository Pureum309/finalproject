import { useRouter } from 'next/router'
import styles from '@/styles/Home.module.css'
import record from "../../data/sizechart.json";

export default function SizeChart(){

    return (
        <div className={styles.sizechart}>

            <div className={styles.sizechartTitle}>
                <h1>Size Chart</h1>
            </div>

            <div className={styles.rankcont} id="table">
                <table>
                    <thead>
                        <tr>
                            <th>UK Size</th>
                            <th>Bust inches</th>
                            <th>Bust cm</th>
                            <th>Waist inches</th>
                            <th>Waist cm</th>
                            <th>Hips inches</th>
                            <th>Hips cm</th>
                        </tr>
                    </thead>

                    <tbody>        
                        {record.map((rec, index) => {
                            return (
                                <tr className={styles.row} key={index}>
                                    <td>{rec.UKSize}</td>
                                    <td>{rec.BustIn}</td>
                                    <td>{rec.BustCm}</td>
                                    <td>{rec.WaistIn}</td>
                                    <td>{rec.WaistCm}</td>
                                    <td>{rec.HipsIn}</td>
                                    <td>{rec.HipsCm}</td>
                                </tr>
                             )
                        })}
                    </tbody>
                </table>
            </div>

        </div>    
    )
}