import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faFlag, faFutbol, faMapMarkerAlt, faMars } from '@fortawesome/free-solid-svg-icons'

import femaleImage from '../../images/female.png'
import maleImage from '../../images/male.png'
import './teamDetail.css'


const TeamDetail = () => {

    const { id } = useParams()

    const [detail, setDetail] = useState([])

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`)
            .then(res => res.json())
            .then(data => setDetail(data.teams[0]))
    }, [id])


    const { strTeamBanner, strTeam, strDescriptionEN, strGender, strCountry, strSport, strFacebook, strTwitter, strYoutube,intFormedYear } = detail


    return (
        <div className='mx-md-5 mx-sm-2  text-light' >

            {/* team banner image */}
            <div className='row' >

                {/* <div className="col background d-flex justify-content-center align-items-center" > */}
                {/* <img src={strTeamBadge} alt="" className='badgeSize' /> */}
                {/* </div> */}
                
                <div className="col p-0 ">
                    <img src={strTeamBanner} alt="" className='w-100' />
                </div>
            </div>



            {/* team information and group image */}
            <div className='row mt-4 mx-1  py-2 bg-light text-dark center_item rounded-3 '>

                {/* team information */}
                <div className='col col-md-6 col-sm-12 col-12  ps-3 center_item justify-content-md-start  '>
                    <div className='ms-3 fontSize'>
                        <h4 > {strTeam} </h4>
                        <p>
                            <FontAwesomeIcon icon={faMapMarkerAlt} className='me-2' />Founded:{intFormedYear}
                        </p>

                        <p>
                            <FontAwesomeIcon icon={faFlag} className='me-2' />Country: {strCountry}
                        </p>

                        <p>
                            <FontAwesomeIcon icon={faFutbol} className='me-2' />Sport Type: {strSport}
                        </p>

                        <p>
                            <FontAwesomeIcon icon={faMars} className='me-2' /> Gender: {strGender}
                        </p>
                    </div>

                </div>

                {/* team image */}
                <div className='col col-md-6 col-sm-12 col-12'>
                    <div className='center_item'>
                        {
                            strGender === 'Male' ? <img src={maleImage} alt="" className='playerImage ' /> : <img src={femaleImage} alt="" className='playerImage ' />
                        }
                    </div>
                </div>

            </div>



            {/* team Description */}
            <div>
                <p className=' m-3 fontSize mx-1'>
                    <strong>Description: </strong>  {strDescriptionEN}
                </p>
            </div>
            


            {/* social icons and links */}
            <div className='mb-3 mx-1 center_item fs-4'>
                <a href={`//${strFacebook}`} target='_blank' >
                    <FontAwesomeIcon icon={faFacebook} style={{ color: '#3b5998' }} />
                </a>

                <a href={`//${strTwitter}`}  target='_blank' className='mx-3'>
                    <FontAwesomeIcon icon={faTwitter} style={{ color: '#1DA1F2' }} />
                </a>

                <a href={`//${strYoutube}`}   target='_blank'>
                    <FontAwesomeIcon icon={faYoutube} style={{ color: '#c4302b' }} />
                </a>
            </div>

        </div>
    );
};

export default TeamDetail;