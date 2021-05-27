import PageComponents from 'containers/Home';
import {getContentfulEntries} from "../utils/contentfulApi";

export async function getStaticProps() {
    const res = await getContentfulEntries('homePage');
    return {props:{data:res.items}}
}

const Page = (props) => {
    return (<PageComponents {...props} />)
}

export default Page;