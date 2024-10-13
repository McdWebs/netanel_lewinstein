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

const SocialNetworks = () => {
  return (
    <div className={styles.socialContainer}>
      <div className={styles.iconContainer}>
        <div className={styles.iconItem}>
          <LocationOn />
          <a href="https://waze.com/ul/hsv8y882hk" className={styles.link}>
            Bnei Brak
          </a>
        </div>
        <div className={styles.iconItem}>
          <Instagram />
          <a
            href="https://www.instagram.com/daniela_clinic?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            className={styles.link}
          >
            daniela_clinic
          </a>
        </div>

        <div className={styles.iconItem}>
          <LocalPhone />
          <a href="tel:054-345-0977" className={styles.link}>
            054-345-0977
          </a>
        </div>

        <div className={styles.iconItem}>
          <WhatsApp />
          <a
            href="https://api.whatsapp.com/send?phone=972543450977&text=אני+מעונינת+בפרטים+על+שמלה+"
            className={styles.link}
          >
            054-345-0977
          </a>
        </div>

        <div className={styles.iconItem}>
          <Mail />
          <a href="mailto:michaelhalperin2@gmail.com" className={styles.link}>
            michaelhalperin2@gmail.com
          </a>
        </div>
      </div>
      <Link className={styles.policyLink} to={"/PolicySupport"}>
        Policy Support
      </Link>
      <Link to="/" className={styles.link}>
        <button className={styles.button}>
          <p className={styles.footerText}>
            All Rights reserved © 2024 Showroom By daniela clinic
          </p>
        </button>
      </Link>
    </div>
  );
};

export default SocialNetworks;