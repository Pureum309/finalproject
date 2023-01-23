import { React } from 'react';

export default function BottomCard({
    txtHeading = "Heading Text...",
    txt = "description..."

}) {
    return (
        <div className="cont" style={styles.cont}>
            <div className="innerCont" style={styles.innerCont}>
                <h3>{txtHeading}</h3>
                <p>{txt}</p>
            </div>
        </div>
    )
}

const styles = {
    cont: {
        width: "80%",
        height: "15em",
        backgroundColor: "grey",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
       

    },

    innerCont: {
        width: "70%",
        height: "10em",
        backgroundColor: "white",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
}