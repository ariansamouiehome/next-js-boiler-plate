import PageComponents from 'containers/Home';
import {getContentfulEntries} from "../utils/contentfulApi";

export async function getStaticProps() {
    const res = await getContentfulEntries('blog');
    return {props:{data:res.items}}
}

const Page = (props) => {
    return (<PageComponents {...props} />)
}

export default Page;