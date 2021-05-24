import React, {useEffect} from 'react';
import ListWrapper from "components/ListWrapper";

const Home = () => {

    const Item = [
        <div>First item card</div>,
        <div>item card</div>,
        <div>item card</div>,
        <div>item card</div>,
        <div>item card</div>,
        <div>item card</div>,
        <div>item card</div>,
        <div>item card</div>,
        <div>item card</div>,
    ];

    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        setTimeout(() =>{
            setLoading(false);
        },1500);
    },[]);

    return (
        <>
            <ListWrapper
                loadingState={loading}
                listWrapperItems={Item}
            />
        </>
    )
}

export default Home;