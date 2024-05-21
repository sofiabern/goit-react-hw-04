import Modal from "react-modal";
import { IoClose } from "react-icons/io5";

import css from "./ImageModal.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "800px",
    transform: "translate(-50%, -50%)",
    overflow: "visible",
    position: "relative"
    
  },
  overlay: {
    background:
      "linear-gradient(to bottom right, #f99e0ab0,  #fcfc59b0, #aa59fcb0, #fc59c0b0, #59fcc8b0)",
      
  },
  
};

Modal.setAppElement("#root");

function ImageModal({ images, selectedImageId, isOpen, onRequestClose }) {
  const selectedImage = images.find((image) => image.id === selectedImageId);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Selected Image"
    >
      {selectedImage && (
        <div className={css.wrapper}>
          <div className={css["info-wrapper"]}>
            <p>Author: {selectedImage.user.name}</p>
            <a
              href={selectedImage.user.portfolio_url}
              className={css.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Author's portfolio here
            </a>
            <p>Total likes: {selectedImage.likes}</p>
            <a
              href={selectedImage.user.links.html}
              className={css.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download here
            </a>
          </div>
          <img
            src={selectedImage.urls.regular}
            alt={selectedImage.alt_description}
            className={css.image}
          />

          <button onClick={onRequestClose} className={css.button}>
            <IoClose color="#ffffff" size={16} />
          </button>
        </div>
      )}
    </Modal>
  );
}

export default ImageModal;
