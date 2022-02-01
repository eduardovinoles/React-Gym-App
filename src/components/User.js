import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function User() {
    let params = useParams()
    const [data, setData] = useState({});

    const fetchData = async () => {
        fetch(`https://gym-app-back.herokuapp.com/user/${params._id}`)
            .then((data) => data.json())
            .then((data) => {
                setData(data);
            });
    };

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <h1>{data.name}</h1>
            <p>{data.type}</p>
            <p>{data.ci}</p>
            <p>{data.tel}</p>
            <p>{data.address}</p>
        </>
    );
}
export default User;
