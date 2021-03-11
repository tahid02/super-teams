import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'




const TeamsList = (props) => {
    const { strTeamBadge, strTeam, strSport, idTeam } = props.team
    return (

        <div className="col col-lg-3 col-md-4 col-sm-6 col-12 " >
            <div className="card h-100" style={{ backgroundColor: '#efefef' }}>

                {/* team logo */}
                <div className="d-flex justify-content-center align-items-center mt-2">
                    <img src={strTeamBadge} className="card-img-top" alt="..." style={{ width: '60%' }} />
                </div>

                {/* team name and type */}
                <div className="card-body text-center">
                    <h5 className="card-title">{strTeam}</h5>
                    <p className="card-text">sport type: {strSport}</p>
                </div>

                {/* dynamic path */}
                <div className="card-footer d-flex justify-content-center align-items-center" style={{ border: 'none' }}>
                    <Link to={`/team/${idTeam}`}>
                        <button className="btn btn-outline-dark">
                            Explore <FontAwesomeIcon icon={faArrowRight} className='ms-1' />
                        </button>
                    </Link>
                </div>


            </div>
        </div>

    );
};

export default TeamsList;