import React from "react";
import "./Notification.css";

//import types
import { EmailProp } from "../Header/Header";

interface Props {
  notificationEmail: EmailProp[];
}

const calcTime = () => {
  let count = 0;
  let justNow: any;
  return setTimeout(() => {
    // justNow = "just now";
    justNow = `${count++} min ago`;
    // return justNow;
  }, 100);
  // justNow;
};

export const Notification: React.FC<Props> = ({ notificationEmail }) => {
  console.log(notificationEmail);
  let filterNotification = notificationEmail.filter(
    note => note.email.length > 1
  );
  console.log(filterNotification);
  return (
    <React.Fragment>
      <div className="noti_popup">
        <h5>Notifications</h5>
        {filterNotification.map((note, index) => {
          return (
            <div key={index} className="noti_msg">
              <img src="./svgs/transfer.svg" alt="" />
              <div className="confim_msg">
                <p className="pl-2">Transfer link confimed by {note.email}</p>
              </div>
            </div>
          );
        })}
        {filterNotification.length < 1 && <p>Your Notification Is Empty</p>}
      </div>
    </React.Fragment>
  );
};
