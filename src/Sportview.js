import { Card } from "react-bootstrap";
import { Base } from "./Base";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useHistory } from "react-router-dom";

export function Sportview({sport, setSport}) {
  const { id } = useParams();
  const per = sport[id];

  const history = useHistory();
  return (
    <Base title={"Sports"}>
      <div className="cardview">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" className="img" src={per.image} />
          <Card.Body>
            <Card.Title><h4>{per.name}</h4></Card.Title>
            <Card.Text><b>{per.sport}</b></Card.Text>
            <Card.Text className="con">{per.content}</Card.Text>
            <Card.Text className="con"><b>{per.year}</b></Card.Text>
          </Card.Body>
        </Card><br></br>
        <button
          variant="dark"
          className="back"
          onClick={() => history.push("/sport")}
        >
          Back
        </button><br></br>
      </div>
    </Base>
  );
}
