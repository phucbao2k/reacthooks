import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
const Covid = ()=> {
    const [dataCovid, setDataCovid] = useState([]);
    useEffect(() => {
        async function fetchData() {
            let res = await axios.get('https://api.apify.com/v2/key-value-stores/EaCBL1JNntjR3EakU/records/LATEST?disableRedirect=true');
            console.log('data covid: ',res )
            let data = res && res.data ? res.data : [];
            console.log('check day:', )
            if (data && data.length > 0) {
                data.map(item => {
                    item.data.date = moment(item.data.date).format('DD/MM/YYYY');
                    return item;
                })
            }
            
            setDataCovid(data)
        }
        fetchData();

    }, []);
return (
    <>
    <h3>Covid 19 tracking</h3>
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Confirmed</th>
                    <th>Active</th>
                    <th>DEATHS</th>
                    <th>Recovered</th>
                </tr>
            </thead>
            <tbody>
                {dataCovid && dataCovid.length> 0 && dataCovid.map(item => {
                    return (
                        <tr >
                            <td>{item.data.date}</td>
                            <td>{item.Confirmed}</td>
                            <td>{item.Active}</td>
                            <td>{item.death}</td>
                            <td>{item.Recovered}</td>
                        </tr>
                    )
                })}
            </tbody>
           
           
           
           
        </table>
    </>
)
}
export default Covid;