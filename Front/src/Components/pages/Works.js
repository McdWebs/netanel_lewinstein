// import React, { useState } from "react";
// import { IMAGELIST } from "../../consts/SubjectsList";
// import DialogForImage from "../helpers/Dialog";
// import styles from "../../styles/style.module.css";

// const Works = () => {
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   const handleOpenDialog = (product) => {
//     setSelectedProduct(product);
//   };

//   const handleCloseDialog = () => {
//     setSelectedProduct(null);
//   };

//   return (
//     <div style={{ marginBottom: "25px" }}>
//       <p className={styles.title}>✨ העבודות שלי</p>
//       <div className={styles.shopContainer}>
//         <div className={styles.cardContainer}>
//           {IMAGELIST.map((product) => (
//             <div
//               key={product.id}
//               className={styles.card}
//               onClick={() => handleOpenDialog(product)}
//             >
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className={styles.image}
//               />
//               <ul className={styles.list}>
//                 <li className={styles.listItem}>{product.name}</li>
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>

//       {selectedProduct && (
//         <DialogForImage
//           open={!!selectedProduct}
//           onClose={handleCloseDialog}
//           product={selectedProduct}
//         />
//       )}
//     </div>
//   );
// };

// export default Works;


import React from "react";
import { useParams } from "react-router-dom";
import styles from "../../styles/style.module.css";
import { IMAGELIST } from "../../consts/SubjectsList";

const Works = () => {
  const { theme } = useParams();
  const collectionImages =
    IMAGELIST.find((item) => item.label === theme)?.image || [];

  return (
    <div className={styles.collectionContainer}>
      <h2>{theme} Collection</h2>
      <div className={styles.imageGrid}>
        {collectionImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${theme} ${index}`}
            className={styles.collectionImage}
          />
        ))}
      </div>
    </div>
  );
};

export default Works;
