import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center text-primary">
      <div className="text-8xl m-8">404</div>
      <div className="text-3xl m-4">Can't find page</div>
      <Button label="Home" onClick={() => navigate("/")} />
    </div>
  );
}

export default NotFound;
