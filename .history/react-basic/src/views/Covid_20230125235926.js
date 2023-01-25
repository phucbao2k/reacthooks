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
            setTimeout(async () => {
                let res = await axios.get('https://api.covid19api.com/country/vietnam?from=2021-10-01T00%3A00%3A00Z&to=2021-10-20T00%3A00%3A00Z');
                console.log('data covid: ', res)
                let data = res && res.data ? res.data : [];

                if (data && data.length > 0) {
                    data.map(item => {
                        item.Date = moment(item.Date).format('DD/MM/YYYY');
                        return item;
                    })
                }

                setDataCovid(data);
                setLoading(false);
              
            })
        }catch(e){
setIsError(true);
setLoading(false);
        }
       
        
        setTimeout(3000);

    }, []);
    console.log('check error', isError);
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
                {isError ===false && loading ===false && dataCovid && dataCovid.length> 0 && dataCovid.map(item => {
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
                    isError === true &&
                    <tr>
                        Something wrong...
                    </tr>
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