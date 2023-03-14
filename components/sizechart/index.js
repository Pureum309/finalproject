import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";
import record from "../../data/sizechart.json";
import { useState } from "react";

export default function SizeChart() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className={styles.sizechart} id="sizechart">

            <button className={styles.sizeChartBtn} onClick={toggleVisibility}>
                View Size Chart
                {isVisible ? "" : ""}
            </button>

            {isVisible && (
                <div className={styles.rankcont} id="table">
                    <table>
                        <thead>
                            <tr>
                                <th>US Size</th>
                                <th>UK Size</th>
                                <th>EU</th>
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
                                        <td>{rec.USSize}</td>
                                        <td>{rec.UKSize}</td>
                                        <td>{rec.EU}</td>
                                        <td>{rec.WaistIn}</td>
                                        <td>{rec.WaistCm}</td>
                                        <td>{rec.HipsIn}</td>
                                        <td>{rec.HipsCm}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
