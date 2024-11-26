import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, ImageList, ImageListItem } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

import { IMAGE_LIST } from "../../consts/SubjectsList";
import DialogForImage from "./Dialog";
import styles from "../../styles/style.module.css";

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
  const filteredImages = IMAGE_LIST.filter(
    (image) => image.label === collection.label
  );

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

      {/* Gallery for the images */}
      <ImageList variant="masonry" cols={2} gap={5}>
        {filteredImages.map((image, index) => (
          <ImageListItem key={index} onClick={() => handleOpenDialog(image)}>
            <img
              src={`${image.image}?w=248&fit=crop&auto=format`}
              srcSet={`${image.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={image.label}
              loading="lazy"
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
