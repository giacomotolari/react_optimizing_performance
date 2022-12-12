import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Images() {
  const [photos, setPhotos] = useState([]);
  const { cityName } = useParams();
  const navigate = useNavigate();
  const accessKey = process.env.REACT_APP_ACCESS_KEY;
  const UNSPLASH_API = `https://api.unsplash.com/search/photos?&query=${cityName}&client_id=${accessKey}&per_page=30`;

  const loadData = async () => {
    const response = await fetch(UNSPLASH_API);
    const data = await response.json();
    data.results.length === 0 ? navigate("/") : setPhotos(data.results);
  };
  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityName]);

  console.log("🚀 ~ file: Images.jsx:33 ~ Images ~ photos", photos);

  return (
    <div id="Images">
      {photos.length > 0 &&
        photos.map((photo) => (
          <div className="image-container" key={photo.id}>
            <img src={photo.urls.small} alt={photo.links.html} />
          </div>
        ))}
    </div>
  );
}

export default Images;
