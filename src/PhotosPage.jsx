import { PhotosIndex } from "./PhotosIndex";
import { PhotosNew } from "./PhotosNew";
import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";
import { PhotosShow } from "./PhotosShow";

export function PhotosPage() {
  const [photos, setPhotos] = useState([]);
  const [isPhotosShowVisible, setIsPhotosShowVisible] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState({});

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
  const handleShow = (photo) => {
    console.log("handleShow", photo);
    setIsPhotosShowVisible(true);
    setCurrentPhoto(photo);
  };

  useEffect(handleIndex, []);
  return (
    <main>
      <PhotosNew onCreate={handleCreate} />
      <PhotosIndex photos={photos} onShow={handleShow} />
      <Modal show={isPhotosShowVisible} onClose={() => setIsPhotosShowVisible(false)}>
        <PhotosShow photo={currentPhoto} />
      </Modal>
    </main>
  );
}
