import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import male from "../../images/male.png";
import female from "../../images/female.png";
import MenuBar from "../MenuBar/MenuBar";

const Details = () => {
  let { teamID } = useParams();
  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamID}`
    )
      .then((res) => res.json())
      .then((data) => setDetails(data?.teams[0]));
  }, []);
  return (
    <div className="container">
      <MenuBar />
      <h1>Details id {teamID}</h1>
      <div className="details">
        <div className="male-female-img p-5">
          {details.strGender == "Male" ? (
            <img className="w-50" src={male} alt="" />
          ) : (
            <img className="w-50" src={female} alt="" />
          )}
        </div>
      </div>
      <div className="row d-flex details-teams align-items-center justify-content-center">
        <div className="col-md-6">
          <div className="team-img">
            <img className="w-50" src={details.strTeamBadge} alt="" />
          </div>
          <h3>{details?.strTeam}</h3>
          <p>{details?.strAlternate}</p>
          <p>{details?.strLeague}</p>
        </div>
        <div className="col-md-6">
          <div className="description-team">
            <p>{details.strDescriptionEN}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
