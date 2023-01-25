import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
//moment là package định dạng ngày tháng và chuyển đổi thời gian
const Covid = ()=> {
    const [dataCovid, setDataCovid] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        try{

        }catch(e){

        }
       
        
        setTimeout(3000);

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
                {loading ===false && dataCovid && dataCovid.length> 0 && dataCovid.map(item => {
                    return (
                        <tr key={item.ID}>
                            <td>{item.Date}</td>
                            <td>{item.Confirmed}</td>
                            <td>{item.Active}</td>
                            <td>{item.Deaths}</td>
                            <td>{item.Recovered}</td>
                        </tr>
                    )
                })
                }
                {
                    loading === true&&
                    <tr>
                        LOading...
                    </tr>
                } 

            </tbody>
           
           
           
           
        </table>
    </>
)
}
export default Covid;