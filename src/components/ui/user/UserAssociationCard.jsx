import associationLogo from "assets/images/sx5khpno.png";
import { Card } from "react-bootstrap";

const UserAssociationCard = () => (
  <Card
    className="text-center p-3 rounded-3 mx-auto"
    style={{ maxWidth: "370px" }}
  >
    <h6>In Association With</h6>
    <img className="mt-2" src={associationLogo} alt="Association Logo" />
  </Card>
);

export default UserAssociationCard;
