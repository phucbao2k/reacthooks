import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const Covid = ()=> {
    const [dataCovid, setDataCovid] = useState([]);
    useEffect(() => {
        async function fetchData() {
            let res = await axios.get('https://api.covid19api.com/country/vietnam?from=2021-10-01T00%3A00%3A00Z&to=2021-10-20T00%3A00%3A00Z');
            console.log('data covid: ',res )
            let data = res && res.data ? res.data : [];
           
            if (data && data.length > 0) {
                data.map(item => {
                    item.Date = moment(item.Date).format('DD/MM/YYYY');
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
                        <tr key={item.ID}>
                            <td>{item.Date}</td>
                            <td>{item.Confirmed}</td>
                            <td>{item.Active}</td>
                            <td>{item.Deaths}</td>
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