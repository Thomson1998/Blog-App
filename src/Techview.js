import { Card } from "react-bootstrap";
import { Base } from "./Base";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom";



export function Techview({tech}) {
  const history=useHistory();
    const { id } = useParams();
    const per = tech[id];
  return (
    <Base title={"Technology"}>
    
      <div className="cardview">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" className="img" src={per.image} />
          <Card.Body>
            <Card.Title><h4>{per.name}</h4></Card.Title>
            <Card.Text><b>{per.founder}</b></Card.Text>
            <Card.Text className="con">{per.content}</Card.Text>
            <Card.Text className="con"><b>{per.year}</b></Card.Text>

          </Card.Body>
        </Card><br></br>
        <button
          variant="dark"
          className="back"
          onClick={() => history.push("/technology")}
        >
          Back
        </button><br></br>
      </div>
    </Base>
 
  );
}
