import axios from 'axios';
import React,{useEffect, useState} from 'react'
import List from './List';

const Lists = () => {
    const [datas, setData] = useState();

    useEffect( ()=>{
        axios.get('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json')
        .then((res) => {
            console.log('res', res.data);
            setData(res.data)
        }).catch((err) => {
            console.log("Error", err)
        });
    },[])

  return (
    <div>
        <div>
            {datas.map((data) => {
                return(
                    <List 
                    data={data}
                    key={data.id}
                />
                )
            })}
        </div>
    </div>
  )
}

export default Lists