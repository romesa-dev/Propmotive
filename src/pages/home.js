import Banner from "../components/Banner/banner";
import MiniHeader from "../components/Nav-bar/miniHeader";
import NavBar from "../components/Nav-bar/nav-bar";
import Text,{SubHeading} from "../components/Typography/text"

export default function Home() {
    return(<>
            <MiniHeader />
            <NavBar />
            <Banner />
            {/* <Text className="ot-caption">Test</Text>
            <SubHeading className="sub-heading">Best Selling</SubHeading> */}
    
    </>)
}