import { useParams } from "react-router-dom";

function DetailPage() {
  const params = useParams();

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="text-3xl text-primary">
        Detailed Page for {params.detail}
      </div>
    </div>
  );
}

export default DetailPage;
