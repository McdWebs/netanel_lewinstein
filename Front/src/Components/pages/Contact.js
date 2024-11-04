// import React, { useState } from "react";
// import styles from "../../styles/style.module.css";
// import { Box, Button, TextField, Typography } from "@mui/material";
// import { postUsers } from "../../api/user";

// const Contact = () => {
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   // const [note, setNote] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   // const clearData = () => {
//   //   setName("");
//   //   setPhone("");
//   //   // setNote("");
//   // };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!name || !phone) {
//       alert("Please fill in both name, phone and date.");
//       return;
//     }

//     // const data = {
//     //   name,
//     //   phone,
//     //   // note,
//     //   // status: "pending",
//     // };

//     const whatsappMessage = `שלום, אני ${name} ואני מעוניין ליצור קשר. מספר טלפון: ${phone}`;
//     const whatsappUrl = `https://api.whatsapp.com/send?phone=972543644512?text=${encodeURIComponent(
//       whatsappMessage
//     )}`;

//     const emailSubject = "New Contact Request";
//     const emailBody = `Name: ${name}\nPhone: ${phone}`;
//     const emailUrl = `mailto:michaelhalperin2@gmail.com?subject=${encodeURIComponent(
//       emailSubject
//     )}&body=${encodeURIComponent(emailBody)}`;


//     setSuccessMessage("הבקשה נשלחה בהצלחה.");

//     // try {
//     //   await postUsers(data);
//     //   setSuccessMessage("הבקשה נשלחה ומחכה לאישור");
//     //   clearData();
//     // } catch (error) {
//     //   console.error("Failed to submit request:", error);
//     //   setSuccessMessage("ארעה שגיאה , אנא נסי שנית מאוחר יותר");
//     // }
//   };

//   return (
//     <Box className={styles.feedbackContainer}>
//       <Typography m={2} variant="h5" className={styles.feedbackTitle}>
//         נשמח לשמוע מכם
//       </Typography>
//       <form onSubmit={handleSubmit}>
//         <Box mb={2}>
//           <TextField
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             fullWidth
//             label="שם מלא"
//             variant="outlined"
//             className={styles.feedbackInput}
//           />
//         </Box>
//         <Box mb={2}>
//           <TextField
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             fullWidth
//             label="מספר טלפון"
//             variant="outlined"
//             type="text"
//             className={styles.feedbackInput}
//           />
//         </Box>
//         {/* <Box mb={2}>
//           <TextField
//             value={note}
//             onChange={(e) => setNote(e.target.value)}
//             fullWidth
//             multiline
//             rows={4}
//             label="הערה"
//             variant="outlined"
//             className={styles.feedbackInput}
//           />
//         </Box> */}
//         <Button
//           type="submit"
//           variant="contained"
//           className={styles.feedbackButton}
//         >
//           אישור
//         </Button>
//         {successMessage && (
//           <p className={styles.successMessage}>{successMessage}</p>
//         )}
//       </form>
//     </Box>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import styles from "../../styles/style.module.css";
import { Box, Button, TextField, Typography } from "@mui/material";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const clearData = () => {
    setName("");
    setPhone("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !phone) {
      alert("Please fill in both name and phone.");
      return;
    }

    const data = {
      name,
      phone,
    };

    try {
      // Send WhatsApp message
      const whatsappResponse = await fetch('/send-whatsapp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      // Send email
      const emailResponse = await fetch('/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      // Check for success response
      if (whatsappResponse.ok && emailResponse.ok) {
        setSuccessMessage("הבקשה נשלחה והמסרים נשלחו בהצלחה.");
        clearData();
      } else {
        throw new Error('Failed to send messages');
      }
    } catch (error) {
      console.error("Failed to send messages:", error);
      setSuccessMessage("ארעה שגיאה , אנא נסי שנית מאוחר יותר");
    }
  };

  return (
    <Box className={styles.feedbackContainer}>
      <Typography m={2} variant="h5" className={styles.feedbackTitle}>
        נשמח לשמוע מכם
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box mb={2}>
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            label="שם מלא"
            variant="outlined"
            className={styles.feedbackInput}
          />
        </Box>
        <Box mb={2}>
          <TextField
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            fullWidth
            label="מספר טלפון"
            variant="outlined"
            type="text"
            className={styles.feedbackInput}
          />
        </Box>
        <Button
          type="submit"
          variant="contained"
          className={styles.feedbackButton}
        >
          אישור
        </Button>
        {successMessage && (
          <p className={styles.successMessage}>{successMessage}</p>
        )}
      </form>
    </Box>
  );
};

export default Contact;
