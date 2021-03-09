import React from "react";
import Button from "@material-ui/core/Button";
import {FaDownload} from "react-icons/fa";
import style from "./DownloadIcon.module.scss";

export const DownloadIcon = props => {
  return (
    <Button
      {...props}
      color="primary"
      variant="contained"
      className={style.downloadIcon}>
      <FaDownload />
    </Button>
  );
};
