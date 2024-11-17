import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IMAGE_LIST } from "../../consts/SubjectsList";
import styles from "../../styles/style.module.css";
import DialogForImage from "./Dialog";
import { Button } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

// function srcset(image, size, rows = 1, cols = 1) {
//   return {
//     src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
//     srcSet: `${image}?w=${size * cols}&h=${
//       size * rows
//     }&fit=crop&auto=format&dpr=2 2x`,
//   };
// }

const CollectionPage = () => {
  const [selectedImages, setSelectedImages] = useState(null);
  const { label } = useParams();
  const navigate = useNavigate();
  const collection = IMAGE_LIST.find((item) => item.label === label);

  if (!collection) {
    return <p>Collection not found.</p>;
  }

  // Filter images based on the collection label
  const filteredImages = IMAGE_LIST.filter((image) => image.label === collection.label);

  const handleOpenDialog = (image) => {
    setSelectedImages(image);
  };

  const handleCloseDialog = () => {
    setSelectedImages(null);
  };

  return (
    <div className={styles.collectionContainer}>
      <h1 className={styles.collectionTitle}>
        <Button
          style={{ border: "1px solid #0072ff" }}
          endIcon={<ArrowBack />}
          onClick={() => navigate("/works")}
        ></Button>
        {collection.label}
      </h1>
      <ImageList sx={{ width: "100%", height: "100%" }} variant="quilted" cols={3} rowHeight={121}>
        {filteredImages.map((image, index) => (
          <ImageListItem key={index} cols={collection.cols} rows={collection.rows}>
            <img
              // {...srcset(image.image, 121)}
              src={image.image}
              alt={image.name}
              className={styles.galleryImage}
              loading="lazy"
              onClick={() => handleOpenDialog(image)}
            />
          </ImageListItem>
        ))}
      </ImageList>
      {selectedImages && (
        <DialogForImage
          open={!!selectedImages}
          onClose={handleCloseDialog}
          image={selectedImages}
        />
      )}
    </div>
  );
};

export default CollectionPage;
