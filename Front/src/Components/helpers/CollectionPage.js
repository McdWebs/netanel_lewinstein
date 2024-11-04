import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IMAGELIST } from "../../consts/SubjectsList";
import styles from "../../styles/style.module.css";
import DialogForImage from "./Dialog";
import { Button } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

const CollectionPage = () => {
  const [selectedImages, setSelectedImages] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const collection = IMAGELIST.find((item) => item.id.toString() === id);

  if (!collection) {
    return <p>Collection not found.</p>;
  }

  const duplicateImages = Array(15).fill({
    name: collection.label,
    image: collection.image,
  });

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
          style={{ border: "1px solid #0072ff"}}
          endIcon={<ArrowBack />}
          onClick={() => navigate("/works")}
        >
        </Button>
        {collection.label}
      </h1>
      <div className={styles.gallery}>
        {duplicateImages.map((image, index) => (
          <div
            key={index}
            className={styles.galleryItem}
            onClick={() => handleOpenDialog(image)}
          >
            <img
              src={image.image}
              alt={image.name}
              className={styles.galleryImage}
            />
          </div>
        ))}
      </div>
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
