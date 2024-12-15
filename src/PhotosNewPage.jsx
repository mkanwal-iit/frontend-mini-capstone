import axios from "axios";
import { useNavigate } from "react-router-dom";
import { PhotosNew } from "./PhotosNew";

export function PhotosNewPage() {
  const navigate = useNavigate();

  const handleCreate = (params) => {
    console.log("handleCreate");
    axios.post("http://localhost:3000/products.json", params).then((response) => {
      console.log(response);
      navigate("/photos"); // Redirect to /photos after creation
    });
  };

  return (
    <main className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white">
              <h3 className="card-title text-center m-0">Create New Product</h3>
            </div>
            <div className="card-body">
              <PhotosNew onCreate={handleCreate} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
