import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import { PhotosShow } from "./PhotosShow";

export function PhotosShowPage() {
  const currentRecipe = useLoaderData();
  const navigate = useNavigate();
  const handleUpdate = (photo, params) => {
    console.log("handleUpdate", photo);
    axios.patch("http://localhost:3000/products/" + photo.id + ".json", params).then((response) => {
      console.log(response);
      navigate("/photos");
    });
  };
  const handleDestroy = (photo) => {
    console.log("handleDestroy", photo);
    axios.delete("http://localhost:3000/products/" + photo.id + ".json").then((response) => {
      console.log(response);
      navigate("/photos");
    });
  };
  const handleAddToCart = (params) => {
    axios.post("/carted_products.json", params).then((response) => {
      console.log(response);
      navigate("/carted_photos");
    });
  };
  return (
    <main className="container">
      <PhotosShow
        photo={currentRecipe}
        onUpdate={handleUpdate}
        onDestroy={handleDestroy}
        onAddToCart={handleAddToCart}
      />
    </main>
  );
}
