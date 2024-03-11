import { useEffect, useState } from "react";

const useImageFetch = (url) => {

    
    const [images, setImages] = useState([]);
    const [error, setError] = useState(null)

    useEffect(() => {
      const fetchImages = async () => {
        try {
          const API_KEY = 'PpDdL6yN03aDHvqoZ8Mfn5qvueRowWKIYpSCWnLWYeYCVzuUG2pXs9Bx';
          const res = await fetch(url, {
            headers: {
              Authorization: API_KEY
            }
          });
          const json = await res.json()
          const imageUrls = json.photos.map(photo => photo.src.original);
          setImages(imageUrls);
        } catch (error) {
          setError(error)
        }
      }
      fetchImages()
    }, [url])
    
    return { images, error}
}

export default useImageFetch