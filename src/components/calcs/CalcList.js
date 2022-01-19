import React, { useState, useEffect, useContext } from "react";
import Nav from "./../Nav";
import DataTable from 'react-data-table-component';
import axios from 'axios';
import Button from "../../components/Button";
import { AccountContext } from "../Account";



let calcApi = "https://hoacby9p54.execute-api.eu-west-2.amazonaws.com/dev/";

const CalcList = () => { 

    const [calcs, setCalcs] = useState('');
    const [pending, setPending] = useState(true);
    const { getSession } = useContext(AccountContext);


    // called on first page load to get the data
    useEffect(() => {
        fetchCalcs();
    //eslint-disable-next-line react-hooks/exhaustive-deps  
    }, []); // empty array means only run once

    const fetchCalcs = async () => {
        console.log("fetchCalcs");

        let sessionId = await getSession();
        let jwtToken = sessionId.idToken.jwtToken
        console.log("jwtToken: ", jwtToken);


        axios.get(calcApi, {
            headers: {
                'Authorization': jwtToken
                }
        }).then(response => {
            console.log("axios get data");
            console.log(response.data);   
            setCalcs(response.data);

            setPending(false);
            console.log(calcs);
        })
        .catch(err => {
            // what now?
            console.log(err);
        })
      };
    
    
    const columns = [
            {
                name: 'ID',
                selector: row => row.id,
            },
            {
                name: 'Date',
                selector: row => row.date, 
            },
            {
                name: 'Height',
                selector: row => row.height,
            },
            {
                name: 'Weight',
                selector: row => row.weight,
            },
        ];
  
        return (
            <div className="App">

                <Nav/>  
                <h2>Calc List</h2>
                <DataTable
                    columns={columns}
                    data={calcs}
                    progressPending={pending}
                />
                <Button label="Refresh Data" onClick={fetchCalcs} />
        </div>
        );
  };


export default CalcList;