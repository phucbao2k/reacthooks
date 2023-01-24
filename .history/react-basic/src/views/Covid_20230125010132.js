import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
const Covid = ()=> {
    const [dataCovid, setDataCovid] = useState([]);
    useEffect(() => {
        async function fetchData() {
            let res = await axios.get('https://api.apify.com/v2/key-value-stores/EaCBL1JNntjR3EakU/records/LATEST?disableRedirect=true');
            let data = res && res.data ? res.data : [];
            if (data && data.length > 0) {
                data.map(item => {
                    item.date = moment(item.date).format('DD/MM/YYYY');
                    return item;
                })
            }
            setDataCovid(data)
        }

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
                            <td>{item.date}</td>
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