import { Checkbox, IconButton } from "@mui/material";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./EmailRow.css";
import { useDispatch } from "react-redux";
import { selectMail } from "../../features/mailSlice";

function EmailRow({ id, title, subject, description, time }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleOpenMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        time,
      })
    );
    navigate("/mail");
  };
  return (
    <div onClick={handleOpenMail} className="emailRow">
      <div className="emailRow_options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>
      <div className="emailRow_title">{title}</div>
      <div className="emailRow_message">
        <h4>
          {subject}
          {" - "}
          <span className="emailRow_description">{description}</span>
        </h4>
      </div>
      <p className="emailRow_time">{time}</p>
    </div>
  );
}

export default EmailRow;
