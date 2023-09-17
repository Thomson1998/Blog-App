import { Base } from "./Base";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";

export function Sports({sport,setSport}) {

  const deleteUser=(idx)=>{
    const alterList=sport.filter((per)=>per.id !== idx);
    setSport(alterList)
  }
  const history=useHistory();

  return (
    <Base title={"Sports"}>
     
     
      <div className="mastercrd">
        {sport.map((per,idx)=>(
          <div className="card" key={idx} idx={idx}><br></br>
        <Card style={{ width: "18rem" }} key={idx}>
          <Card.Img variant="top" className="img" src={per.image} />
          <Card.Body>
            <Card.Title>{per.name}</Card.Title>
            <Card.Text>
             {per.sport}
            </Card.Text>
           
            <Button variant="primary" onClick={()=>history.push(`/sportview/${idx}`)}>
              View
            </Button>{" "}
            <Button variant="success" onClick={()=>history.push(`/sportedit/${per.id}`)}>
              Edit
            </Button>{" "}
            <Button variant="danger" onClick={()=>deleteUser(per.id)}>
             Delete
            </Button>
          </Card.Body>
        </Card>
        </div>
        ))}
          </div>
          <br></br> <Button variant="dark" className="add" onClick={() => history.push("/sportadd")}>
        Add
      </Button>{" "}
      <Button variant="dark" className="add" onClick={() => history.push("/categories")}>
        Back
      </Button><br></br><br></br><br></br>
    </Base>
  );
}


