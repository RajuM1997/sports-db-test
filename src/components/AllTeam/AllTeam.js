import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./AllTeam.css";

const AllTeam = (props) => {
  const { strTeamBadge, strTeam, strAlternate, strLeague, strCountry, idTeam } =
    props.team;
  return (
    <div>
      <div className="allTeam">
        <CardGroup>
          <Card>
            <Card.Img variant="top" src={strTeamBadge} />
            <Card.Body>
              <Card.Title>{strTeam}</Card.Title>
              <Card.Text>{strAlternate}</Card.Text>
              <Card.Text>{strLeague}</Card.Text>
              <Card.Text>{strCountry}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Link to={`/allteam/${idTeam}`}>
                <button className="btn btn-primary">Details</button>
              </Link>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
};

export default AllTeam;
