import { PhotosIndex } from "./PhotosIndex";
import { PhotosNew } from "./PhotosNew";
import axios from "axios";
import { useState, useEffect } from "react";

export function PhotosPage() {
  const [photos, setPhotos] = useState([]);

  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("/products.json").then((response) => {
      console.log(response.data);
      setPhotos(response.data);
    });
  };
  const handleCreate = (params, successCallback) => {
    console.log("handleCreate");
    axios.post("/products.json", params).then((response) => {
      setPhotos([...photos, response.data]);
      successCallback();
    });
  };

  useEffect(handleIndex, []);
  return (
    <main>
      <PhotosNew onCreate={handleCreate} />
      <PhotosIndex photos={photos} />
    </main>
  );
}
