import React, { useState } from "react";
import "./Header.css";
import { IoIosNotifications } from "react-icons/io";
import { Notification } from "../Notification/Notification";

//import Types
import { Person } from "../../Data/profileInfo";

export interface Props {
  person: Person;
  notificationEmail: EmailProp[];
}
export interface EmailProp {
  email: string;
}

export const Header: React.FC<Props> = ({ person, notificationEmail }) => {
  const { firstName, lastName, mail, imgUrl } = person;
  const [notificationShow, setNotificationShow] = useState(false);
  const log = () => {
    setNotificationShow(!notificationShow);
  };
  return (
    <header className="container-fluid">
      <div className="profile_header">
        <div className="notifacation" onClick={log}>
          <IoIosNotifications className="notifacation_icon" />
          <div className="notifacation_circle"></div>
        </div>
        {notificationShow && (
          <Notification notificationEmail={notificationEmail} />
        )}
        <div className="contact-info">
          <img src={imgUrl} alt="personal_picture" />
          <div className="">
            <h5 className="name">{`${firstName}${lastName}`}</h5>
            <span className="mail">{mail}</span>
          </div>
        </div>
      </div>
    </header>
  );
};
