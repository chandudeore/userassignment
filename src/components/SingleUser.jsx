import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { singleUserData, userError, userLoading } from "../Redux/action";
import { useNavigate } from "react-router-dom";
import "./SingleUser.css";

export default function SingleUser() {
  const { singleUser } = useSelector((state) => state.user);
  const { id } = useParams();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const getSingleUserData = () => {
    dispatch(userLoading);
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => res.json())
      .then((res) => dispatch(singleUserData(res.data)))
      .catch((err) => dispatch(userError()));
  };
  useEffect(() => {
    getSingleUserData();
  }, []);
  return (
    <>
      <div className="card">
        {singleUser.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.avatar} alt="Profile" />
              <div>
                {item.first_name} {item.last_name}
              </div>
              <div>{item.email}</div>
            </div>
          );
        })}
      </div>
      <button onClick={() => navigate("/")} className="back">
        Back
      </button>
    </>
  );
}
