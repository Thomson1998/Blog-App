import { useHistory } from "react-router-dom";
import { Base } from "./Base";

export function Categories() {
  const history = useHistory();
  return (
    <Base title={"Categories"}>
      
      
        <div className="sec">
          <button className="bn" onClick={() => history.push("/sport")}>
            Sports
          </button>
          <button className="bn" onClick={() => history.push("/technology")}>
            Technology
          </button>
          <button className="bn" onClick={() => history.push("/travel")}>
            Travel
          </button>
        </div>
      
    </Base>
  );
}
