import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Base } from "./Base";

export function Travel({travel, setTravel}) {
  const deleteUser = (idx) => {
    const alterList = travel.filter((per) => per.id !== idx);
    setTravel(alterList);
  };
  const history = useHistory();

  return (
    <Base title={"Travel"}>
      {" "}
      
      <div className="mastercrd">
        {travel.map((per, idx) => (
          <div className="card" key={idx}><br></br>
            <Card style={{ width: "18rem" }} key={idx}>
              <Card.Img variant="top" className="img" src={per.image} />
              <Card.Body>
                <Card.Title>{per.name}</Card.Title>
                <Card.Text>{per.place}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => history.push(`/travelview/${idx}`)}
                >
                  View
                </Button>{" "}
                <Button
                  variant="success"
                  onClick={() => history.push(`/traveledit/${per.id}`)}
                >
                  Edit
                </Button>{" "}
                <Button variant="danger" onClick={() => deleteUser(per.id)}>
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div><br></br>
      <Button
        variant="dark"
        className="add"
        onClick={() => history.push("/traveladd")}
      >
        Add
      </Button>{" "}
      <Button variant="dark" className="add" onClick={() => history.push("/categories")}>
        Back
      <br></br>
      </Button><br></br><br></br>
    </Base>
  );
}
