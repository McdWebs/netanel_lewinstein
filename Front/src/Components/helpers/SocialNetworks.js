import React from "react";
import styles from "../../styles/style.module.css";
import {
  LocationOn,
  Instagram,
  LocalPhone,
  WhatsApp,
  Mail,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

const socialItems = [
  {
    icon: <LocationOn />,
    link: "https://waze.com/ul/hsv8y882hk",
    text: "Bnei Brak",
  },
  {
    icon: <Instagram />,
    link: "https://www.instagram.com/myisraeliview?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    text: "my Israeli View",
  },
  {
    icon: <LocalPhone />,
    link: "tel:054-800-5704",
    text: "054-800-5704",
  },
  {
    icon: <WhatsApp />,
    link: "https://api.whatsapp.com/send?phone=972548005704&text=אני+מעוניין+בצלם++",
    text: "054-800-5704",
  },
  {
    icon: <Mail />,
    link: "mailto:michaelhalperin2@gmail.com",
    text: "michaelhalperin2@gmail.com",
  },
];

const SocialNetworks = () => {
  return (
    <div className={styles.socialContainer}>
      <List className={styles.iconContainer}>
        {socialItems.map((item, index) => (
          <ListItem className={styles.iconItem} key={index}>
            <ListItemIcon sx={{ color: "rgb(93, 136, 186)" }}>{item.icon}</ListItemIcon>
            <ListItemText>
              <a href={item.link} className={styles.link}>
                {item.text}
              </a>
            </ListItemText>
          </ListItem>
        ))}
      </List>
      <Link className={styles.policyLink} to={"/PolicySupport"}>
        Policy Support
      </Link>
      <Link to="/" className={styles.link}>
        <button className={styles.button}>
          <p className={styles.footerText}>
            All Rights reserved © 2024 Showroom By Netanel Photography -
            <strong>Created by McdWebs</strong>
          </p>
        </button>
      </Link>
    </div>
  );
};

export default SocialNetworks;
