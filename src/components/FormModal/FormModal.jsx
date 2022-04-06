import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Modal, TextField, Button } from "@material-ui/core";
import { CheckCircleOutline } from "@material-ui/icons";
import "./FormModal.scss";

function FormModal({ openFormModal, closeFormModal }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formBody, setFormBody] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [sending, setSending] = useState(false);
  let body;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    try {
      emailjs
        .sendForm(
          "service_bvowysk",
          "template_3qe2all",
          e.target,
          "eB1slyC8WUI8QDO1g"
        )
        .then(
          (result) => {
            console.log(result.text);
            setFormBody(false);
            setTimeout(() => closeFormModal(), 4000);
          },
          (error) => {
            console.log(error);
          }
        );
    } catch (error) {
      setErrorMessage(`Sorry ${name}, the message was not sent.`);
      setTimeout(() => {
        setErrorMessage("");
        setSending(false);
      }, 4000);
      console.log({ error });
    }
  };

  if (formBody) {
    body = (
      <form onSubmit={(e) => handleSubmit(e)} className="form-modal">
        <h1>Hire Me</h1>
        <TextField
          required
          size="small"
          name="name"
          variant="outlined"
          label="Name"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          required
          size="small"
          name="email"
          variant="outlined"
          label="Email"
          type="email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          required
          name="message"
          variant="outlined"
          label="Message"
          multiline
          minRows={3}
          maxRows={10}
          fullWidth
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {errorMessage && <p className="form-modal-error">{errorMessage}</p>}
        <Button disabled={sending} type="submit" variant="contained" color="primary" fullWidth>
          Send Message
        </Button>
      </form>
    );
  } else {
    body = (
      <div className="form-modal form-modal-success">
        <h3>{`Thank you ${name}, the message was successfully sent!`}</h3>
        <CheckCircleOutline size="large" />
      </div>
    );
  }

  return (
    <Modal open={openFormModal} onClose={closeFormModal}>
      {body}
    </Modal>
  );
}

export default FormModal;
