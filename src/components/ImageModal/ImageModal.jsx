import Modal from "react-modal";


Modal.setAppElement('#root');

function ImageModal({ images, selectedImageId, isOpen, onRequestClose }) {

    const selectedImage = images.find(image => image.id === selectedImageId);
  
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Selected Image"
      >
        {selectedImage && (
          <div>
            <img src={selectedImage.urls.regular} alt={selectedImage.alt_description} />
            <button onClick={onRequestClose}>Close</button>
          </div>
        )}
      </Modal>
    );
  }

export default ImageModal;
