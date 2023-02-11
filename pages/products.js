import ListItem from "@/components/listItem";
import Logo from "@/components/logo";

export default function Product(){
    return(
        <>
            <Logo />
            <ListItem limit={20}/>
        </>
    )
}