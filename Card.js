import React from "react";
import "./Card.css";
import moreAction from "../images/more-action.PNG";
const Card = () => {
  return (
    <div>
      <div className="card shadow-sm mb-2">
        <div className="card-body px-2">
          <div className="row">
            <div className="col-6 d-flex">
              <img
                alt="profile_pic"
                className=" p-2 profile-pic"
                src="https://images.unsplash.com/photo-1617478636464-7ea9804bbf58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80"
              />
              <div className="d-flex flex-column justify-content-center mt-2">
                <p className="fs-6 fw-bold">Title</p>
                <p className="location">description</p>
              </div>
            </div>
            <div className="col-6">
              <span>
                <img
                  className="fs-3 p-2 mt-2 float-end"
                  alt="more action"
                  src={moreAction}></img>
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <img
                style={{ borderRadius: "15px" }}
                className="img-fluid p-2"
                alt="post pic"
                src="https://media.istockphoto.com/id/486121005/photo/sun-rays-inside-coconut-palms.jpg?s=2048x2048&w=is&k=20&c=wUSKrQDsoAgLexCgjoEw8kmCtKbCJsqlFznl44BepWY="
              />
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-6 d-flex">
              <i class="ps-2 fs-4 fa-regular fa-heart"></i>
              <i class="ps-3 fs-4 fa-regular fa-comment"></i>
              <i class="ps-3 fs-4 fa-sharp fa-regular fa-paper-plane"></i>
            </div>
            <div className="col-6">
              <span className="pe-3 fs-6 fw-bold float-end">200 likes</span>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <span className="p-2 text-muted">2 hours ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
