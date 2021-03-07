import React from "react";
import { Props } from "../Header/Header";
import "./Transfer.css";
import { DiApple } from "react-icons/di";
import { SiWindows } from "react-icons/si";

export const Transfer: React.FC<Props> = ({ person }) => {
  const { firstName, lastName, mail, discordID, license } = person;
  return (
    <React.Fragment>
      {/* licence  */}
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
        <button className="deactive-btn transfer-btn">Transfer to &gt; </button>
      </section>

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
