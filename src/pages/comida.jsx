import { useParams } from "react-router-dom";
import useGet from "../hooks/useGet";

function PanelComida() {
  const { id } = useParams();
  const { values } = useGet(`menu/comida/${id}`);
  console.log(values);
  return <div>as</div>;
}

export default PanelComida;
