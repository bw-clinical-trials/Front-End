import React, {useState, useEffect} from 'react'
import axios from 'axios';
import '../setupProxy.js';

const ClinicalTrialData = (props) => {
    const [trialData, setTrialData] = useState([]);

    const proxy = "https://cors-anywhere.herokuapp.com/";
    const url = `https://clinicaltrials.gov/api/query/full_studies?expr=heart+attack&fmt=JSON`;
    
    useEffect(() => {
        axios.get(proxy + url)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])
    
    
    return(
        <>

        </>
    )
}

export default ClinicalTrialData
