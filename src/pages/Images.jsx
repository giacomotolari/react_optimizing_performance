import { useEffect, useState } from "react";

function Images() {
  const [photos, setPhotos] = useState([]);
  const accessKey = process.env.REACT_APP_ACCESS_KEY;
  const UNSPLASH_API = `https://api.unsplash.com/search/photos?query=hamburg&client_id=${accessKey}`;

  const loadData = async () => {
    const response = await fetch(UNSPLASH_API);
    const data = await response.json();
    console.log("🚀 ~ file: Images.jsx:13 ~ loadData ~ data", data.results);
    setPhotos(data.results);
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      {photos.length > 0 &&
        photos.map((photo) => (
          <div key={photo.id}>
            <img src={photo.urls.regular} alt={photo.links.html} />
          </div>
        ))}
    </div>
  );
}

export default Images;
