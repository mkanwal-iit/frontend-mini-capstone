import { useLoaderData, useNavigate } from "react-router-dom";
import { PhotosIndex } from "./PhotosIndex";

export function PhotosIndexPage() {
  const photos = useLoaderData();
  const navigate = useNavigate();
  const handleShow = (photo) => {
    console.log("handleShow", photo);
    navigate(`/photos/${photo.id}`);
  };
  return (
    <main className="container">
      <PhotosIndex photos={photos} onShow={handleShow} />
    </main>
  );
}
