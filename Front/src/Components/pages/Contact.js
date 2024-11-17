import React, { useState } from "react";
import styles from "../../styles/style.module.css";
import {
  Box,
  Button,
  TextField,
  Typography,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import { useLocation } from "react-router-dom";

import { socialItems } from "../helpers/SocialNetworks";

const Contact = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

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
      const whatsappResponse = await fetch(
        "http://localhost:3005/send-whatsapp",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      // Send email
      // const emailResponse = await fetch('/send-email', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // });

      // Check for success response
      if (whatsappResponse.ok) {
        setSuccessMessage("הבקשה נשלחה.");
        clearData();
      } else {
        throw new Error("Failed to send messages");
      }
    } catch (error) {
      console.error("Failed to send messages:", error);
      setSuccessMessage("ארעה שגיאה , אנא נסה שנית מאוחר יותר");
    }
  };

  return (
    <Box className={styles.feedbackContainer}>
      <Box>
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
            שליחה
          </Button>
          {successMessage && (
            <p className={styles.successMessage}>{successMessage}</p>
          )}
        </form>
      </Box>
      {!isHomePage && (
        <>
          <Box marginBottom={15} />
          <Box display="flex" flexDirection="row">
            {socialItems.map((item, index) => (
              <ListItem className={styles.iconItem} key={index}>
                <a href={item.link}>
                  <ListItemIcon sx={{ color: "rgb(93, 136, 186)" }}>
                    {item.icon}
                  </ListItemIcon>
                </a>
              </ListItem>
            ))}
          </Box>
        </>
      )}
    </Box>
  );
};

export default Contact;
