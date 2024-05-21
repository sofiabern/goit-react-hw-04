import { useState, useEffect } from "react";

import "./App.css";

import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";

import { getPhotos } from "../../images-api";


function App() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [total, setTotal] = useState(0);
  const [selectedImageId, setSelectedImageId] = useState(null);

// Modal
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
// 


  useEffect(() => {
    if (!searchQuery.trim()) {
      return;
    }

    async function showPhotos() {
      try {
        setIsLoading(true);
        setIsError(false);

        const data = await getPhotos(searchQuery, page);
        const results = await data.results;

        setPhotos((prevState) => [...prevState, ...results]);
        setTotal(data.total_pages);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    showPhotos();
  }, [page, searchQuery]);

  const handleSearch = async (value) => {
    setSearchQuery(value);
    setPage(1);
    setPhotos([]);
  };

  const handleLoadMore = async () => {
    setPage(page + 1);
  };

  const getImageId = (imageId) => {
    setSelectedImageId(imageId);
    openModal()
    console.log(imageId);
    console.log(modalIsOpen)
  };



  const isPhotos = page === total;
  return (
    <>
      <SearchBar onSearch={handleSearch} />

      {isError && <ErrorMessage />}

      {photos.length > 0 && (
        <ImageGallery images={photos} onImageClicked={getImageId} />
      )}

      {isLoading && <Loader />}

      {photos.length > 0 && !isLoading && !isPhotos && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}

      {modalIsOpen && (
        <ImageModal
          images={photos}
          selectedImageId={selectedImageId}
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
        />
      )}
    </>
  );
}

export default App;