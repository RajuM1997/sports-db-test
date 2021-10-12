import React, { useEffect, useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import AllTeam from "../AllTeam/AllTeam";
import "./AllTeams.css";

const AllTeams = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=Arsenal`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeams(data.teams));
  }, []);
  const handleToDetails = (e) => {
    console.log("click");
  };
  return (
    <div className="all-teams">
      <div className="container">
        <InputGroup onChange={handleToDetails} className="mb-3 w-75 mx-auto">
          <FormControl
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button className="btn btn-success" id="basic-addon2">
            Search here
          </Button>
        </InputGroup>
        <div className="row">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {teams.map((team) => (
              <AllTeam team={team} key={team.idTeam}></AllTeam>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTeams;
