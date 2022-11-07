import { useLocation } from "react-router-dom";
import ViewDetailBerthMain from "../components/ViewDetailBerth/ViewDetailBerthMain";

export default function ViewDetailBerth() {
  const location = useLocation();

  // console.dir(location.state);

  return (
    <>
      <ViewDetailBerthMain state={location.state}/>
    </>
  );
}
