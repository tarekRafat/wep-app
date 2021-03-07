import React from "react";
import "./Header.css";
import { FaBeer } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";

interface Person {
  discordID: string;
  firstName: string;
  lastName: string;
  mail: string;
  imgUrl: string;
  license: string;
}

export interface Props {
  person: Person;
}

export const Header: React.FC<Props> = ({ person }) => {
  const { firstName, lastName, mail, imgUrl } = person;
  return (
    <header className="container-fluid">
      <div className="profile_header">
        <div className="notifacation">
          <IoIosNotifications className="notifacation_icon" />
          <div className="notifacation_circle"></div>
        </div>
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
