import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Base } from "./Base";

export function Technology({tech, setTech}) {
  const deleteUser=(idx)=>{
    const alterList=tech.filter((per)=>per.id !== idx);
    setTech(alterList)
  }
  const history=useHistory();

  return (
    <Base title={"Technology"}>
       {" "}
      
      <div className="mastercrd">

    {tech.map((per,idx)=>(
          <div className="card" key={idx}><br></br>
        <Card style={{ width: "18rem" }} key={idx}>
          <Card.Img variant="top" className="img" src={per.image} />
          <Card.Body>
            <Card.Title>{per.name}</Card.Title>
            <Card.Text>
             {per.founder}
            </Card.Text>
           
            <Button variant="primary" onClick={()=>history.push(`/techview/${idx}`)}>
              View
            </Button>{" "}
            <Button variant="success" onClick={()=>history.push(`/techedit/${per.id}`)}>
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
        <br></br><Button variant="dark" className="add" onClick={() => history.push("/techadd")}>
        Add
      </Button>{" "}
      <Button variant="dark" className="add" onClick={() => history.push("/categories")}>
        Back
      </Button>
      <br></br>
      <br></br>
      <br></br>
    </Base>
  );
}
