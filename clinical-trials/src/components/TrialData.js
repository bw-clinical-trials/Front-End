import React, {useState, useEffect} from 'react'
import axios from 'axios';

import TrialCard from './TrialCard.js';

const ClinicalTrialData = (props) => {
    const [trialData, setTrialData] = useState([]);

    const searchParam = props.userDetails.disease.replace(' ', '+');
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const url = `https://clinicaltrials.gov/api/query/full_studies?expr=${searchParam}&min_rnk=1&max_rnk=100&fmt=JSON`;
    
    useEffect(() => {
    // axios.get(proxy + url)
    //     .then((res) => {
    //         setTrialData(res.data.FullStudiesResponse.FullStudies)
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     })
        const fetchData = async () => {
            const result = await axios.get(
                proxy + url
            )
            setTrialData(result.data.FullStudiesResponse.FullStudies)
        }

        fetchData()
    }, [url])

    console.log(trialData);
    return(
        <>
            <div>
                <h1>Trial Data Search</h1>
                {(trialData.length === 0 || trialData === undefined) ? "Loading..." : trialData.map((trial) => {
                    return <TrialCard details={trial} />
                })}
            </div>
        </>
    )
}

export default ClinicalTrialData;
