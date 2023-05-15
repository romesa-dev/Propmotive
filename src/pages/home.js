import { Image, Text } from "@mantine/core";
import Banner from "../components/Banner/banner";
import CircularImageCard from "../components/Cards/circularImageCard";
// import MiniHeader from "../components/Navbar/min-header";
// import NavBar from "../components/Navbar/navbar";
// import Text,{SubHeading} from "../components/Typography/text"

export default function Home() {
    // const data = useMydata()
    return(<>
            {/* <NavBar/> */}
            <Banner />
            <CircularImageCard/>
           {/* <div> {data.name}</div> */}
            {/* <Text className="ot-caption">Test</Text>
            <SubHeading className="sub-heading">Best Selling</SubHeading> */}
    
    </>)
}