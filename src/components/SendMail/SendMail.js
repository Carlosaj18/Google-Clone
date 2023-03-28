import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import "./SendMail.css";
import { closeSendMessage } from "../../features/mailSlice";
import { useDispatch } from "react-redux";
import { db } from "../../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

function SendMail() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    await addDoc(collection(db, "emails"), {
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: serverTimestamp(),
    });
    dispatch(closeSendMessage());
  };
  const dispatch = useDispatch();
  return (
    <div className="sendMail">
      <div className="sendMail_header">
        <h3>New Message</h3>
        <CloseIcon
          className="sendMail_close"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="To"
          name="to"
          className=""
          {...register("to", { required: true })}
        />
        {errors.to && <span className="sendMail_error">To is required</span>}

        <input
          type="text"
          placeholder="Subject"
          name="subject"
          className=""
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <span className="sendMail_error">subject is required</span>
        )}

        <input
          type="text"
          placeholder="Message..."
          name="message"
          className="sendMail_message"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <span className="sendMail_error">message is required</span>
        )}

        <div className="sendMail_options">
          <Button
            className="sendMail_send"
            variant="container"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
