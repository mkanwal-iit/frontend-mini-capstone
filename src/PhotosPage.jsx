import { PhotosIndex } from "./PhotosIndex";
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

  useEffect(handleIndex, []);
  return (
    <main>
      <PhotosIndex photos={photos} />
    </main>
  );
}
