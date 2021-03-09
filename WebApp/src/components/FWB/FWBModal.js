import React from "react";
import Dialog from "@material-ui/core/Dialog";

import {MdClose} from "react-icons/md";

import "./style.scss";
import FWBBody from "./FWBBody";

const FWBModal = () => {
  const [open, setOpen] = React.useState(false);
  const [opened, setOpenened] = React.useState(false);

  let mouseY = 0;

  document.addEventListener("mousemove", function(e) {
    mouseY = e.clientY;
  });

  document.addEventListener("mouseleave", function(e) {
    if (mouseY < 100) {
      if (window.location.pathname !== "/jobseeker/friendswithbenefits") {
        setOpen(true);
      }
    }
  });

  function handleClose() {
    setOpen(false);
    setOpenened(true);
  }

  return (
    <div className="fwb-modal">
      <Dialog
        open={open && !opened}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        className="fwb-modal__dialog">
        <MdClose onClick={handleClose} className="modal-close" />
        <FWBBody modal onMove={handleClose} />
      </Dialog>
    </div>
  );
};

export default FWBModal;
