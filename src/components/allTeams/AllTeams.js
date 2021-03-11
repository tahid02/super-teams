



import { useEffect, useState } from 'react';
import TeamsList from '../teamsList/TeamsList';
import './allTeams.css'

const AllTeams = () => {

    const [teamsList,setTeamsList] = useState([])

    useEffect( () =>{
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then( res => res.json() )
        .then( data => setTeamsList(data.teams) )
    },[])

    return (
        <>
        <div className="background">
            <p>Super Teams</p>
        </div>

        <div className = "row g-4 mx-2">
           
            {
                teamsList.map( team => <TeamsList team = {team} key={team.idTeam} />)
            }
            
        </div>

        </>
    );
};

export default AllTeams;