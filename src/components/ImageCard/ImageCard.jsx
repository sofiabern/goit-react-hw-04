import css from "./ImageCard.module.css";

function ImageCard({image}) {
  return (
    <div>
          <img src={image.urls.small} alt={image.alt_description} width="300px" height="250px" className={css.image} loading="lazy"/>
    </div>
  );
}

export default ImageCard;
