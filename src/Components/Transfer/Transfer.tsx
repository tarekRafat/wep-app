import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { DiApple } from "react-icons/di";
import { SiWindows } from "react-icons/si";
import Modal from "react-bootstrap/Modal";
import "./Transfer.css";

//import Types
import { Person } from "../../Data/profileInfo";
import { Header } from "../Header/Header";

interface Props {
  person: Person;
}
type Inputs = {
  email: string;
};

export const Transfer: React.FC<Props> = ({ person }) => {
  const [show, setShow] = useState(false);
  const [congratesPopup, setCongratesPopup] = useState(false);
  const [notificationEmail, setNotificationEmail] = useState([{ email: "" }]);
  const [email, setEmail] = useState("");
  //Email Validation
  let { register, handleSubmit, errors } = useForm<Inputs>({
    mode: "onTouched",
  });

  const { discordID, license, mail } = person;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmit = (data: Inputs) => {
    setNotificationEmail([...notificationEmail, { email: data.email }]);
    handleClose();
    setEmail(data.email);
    setCongratesPopup(true);
  };

  console.log(notificationEmail);
  return (
    <React.Fragment>
      {/* licence  */}
      <Header person={person} notificationEmail={notificationEmail} />
      <section className="col-12 licence">
        <span className="licence_txt">Licence Key</span>
        <h5>{license}</h5>
        <div className="renew">
          <button className="renew-btn">
            <span>Renew Now </span>
            <span className="stripe">Stripe</span>
          </button>
          <button className="deactive-btn">Deactive</button>
        </div>
        <span className="next_txt">Next Renewal on 22 Mar 2021</span>
      </section>

      {/* DiscordID  */}
      <section className="col-12 disord">
        <div className="discord_info">
          <div className="discord_id">
            <span>icon</span>
            <span>Discord ID</span>
          </div>
          <div className="dicord_txt">{discordID}</div>
        </div>
        <button className="deactive-btn">Unbind</button>
      </section>

      {/* Transfer  */}
      <section className="col-12 transfer">
        <div className="discord_info">
          <div className="discord_id">
            <span>icon</span>
            <span>Discord ID</span>
          </div>
          <div className="dicord_txt">{discordID}</div>
        </div>
        <button className="deactive-btn transfer-btn" onClick={handleShow}>
          Transfer to &gt;{" "}
        </button>
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton className="custom_modal">
            <Modal.Title className="custom_modal">Transfer</Modal.Title>
          </Modal.Header>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Modal.Body className="custom_modal">
              <span>Transfer to</span>
              <br />
              <input
                type="text"
                name="email"
                id="emailInput"
                placeholder="Enter the email address"
                ref={register({
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && errors.email.type === "required" && (
                <p className="error">Please Enter Your Email Adress</p>
              )}
              {errors.email && errors.email.type === "pattern" && (
                <p className="error">Please Enter Invalied Email</p>
              )}{" "}
            </Modal.Body>
            <Modal.Footer className="custom_footer">
              <button className="cancel-btn" onClick={handleClose}>
                Cancel
              </button>
              <button className="send-btn" type="submit">
                Send
              </button>
            </Modal.Footer>
          </form>
        </Modal>
      </section>
      <Modal
        show={congratesPopup}
        onHide={() => setCongratesPopup(false)}
        centered
      >
        <Modal.Header closeButton className="congrates_header">
          <img src="./svgs/congrates.svg" alt="congrates_pic" />
        </Modal.Header>
        <Modal.Body className="congrates_modal">
          <h5>Confirmation Email Sent</h5>
          <span>
            we sent a link to <a href="#">{email}</a>.Check the email to confirm
            the transfer.
          </span>
          <div className="send_again">
            <p>Didn't get a confirmation email?</p>
            <span>Check your spam or Send Again</span>
          </div>
        </Modal.Body>
      </Modal>
      {/* Laptop Section      */}
      <section className="laptop">
        <img src="./svgs/Laptop.svg" alt="dispktop app" />
        <div className="andriod_os">
          <button className="mac-btn">
            {" "}
            <DiApple />
            Download For MacOS
          </button>
          <button className="win-btn">
            <SiWindows />
            Download For Windows
          </button>
        </div>
      </section>
    </React.Fragment>
  );
};
