import React from "react";
import { useSelector } from "react-redux";

import Styles from "./listScreen.module.css";
import plus from "../assets/plus.png";
import userIcon from "../assets/user.png";
import { Link } from "react-router-dom";

const ListScreen = () => {
  const users = useSelector((state) => state.users);
  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
        <Link to="/addNew">
          <img src={plus} className={Styles.plus} />
        </Link>
        <div className={Styles.heading}>Team Members</div>
        <div className={Styles.subHeading}>You have 3 team Members</div>
      </div>
      <div className={Styles.body}>
        {users.map((user) => (
          <div className={Styles.users} key={user.id}>
            <div className={Styles.userIcon}>
              <img src={userIcon} />
            </div>
            <div className={Styles.right}>
              <div>
                <span>{user.firstName}</span>
                <span> {user.lastName}</span>
                {user.isAdmin ? <span> (admin)</span> : null}
              </div>
              <div className={Styles.contact}>{user.contact}</div>
              <div className={Styles.contact}>{user.email}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListScreen;
