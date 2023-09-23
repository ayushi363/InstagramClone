import React, { useState } from "react";
import "./Profile.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import horizontalMoreAction from "../images/horizontalMoreAction.PNG";

const Profile = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showPost, setShowPost] = useState(false);

  const handlePostClose = () => setShowPost(false);
  const handlePostShow = () => setShowPost(true);

  const handleFileSelect = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      console.log("Selected File:", selectedFile);
    } else {
      console.error("No file selected.");
    }
  };

  return (
    <div className="container shadow mt-3 p-4">
      <div className="row">
        <div className="col-md-6 d-flex flex-column">
          <img
            className="img-fluid p-2 profile-pic"
            alt="profile pic"
            src="https://media.istockphoto.com/id/486121005/photo/sun-rays-inside-coconut-palms.jpg?s=2048x2048&w=is&k=20&c=wUSKrQDsoAgLexCgjoEw8kmCtKbCJsqlFznl44BepWY="
          />
          <p className="fs-5 fw-bold ms-3">_ayushi_</p>
          <p className="fs-5 ms-3">Ayushi Gautam</p>
          <p className="fs-5 ms-3">FullStack Developer | follow @_ayushi_</p>
          <p className="fs-5 ms-3">
            My Portfolio on <span></span>
            <a href="https://ayushigautamportfolio.netlify.app">
              www.ayushiportfilio.com
            </a>
          </p>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-between mt-3">
          <div className="d-flex justify-content-equal mx-auto">
            <div className="count-section pe-4 pe-md-5 text-center fw-bold">
              <h4>10</h4>
              <p>Posts</p>
            </div>
            <div className="count-section px-4 px-md-5 text-center fw-bold">
              <h4>20</h4>
              <p>Followers</p>
            </div>
            <div className="ps-md-5 ps-5 text-center fw-bold">
              <h4>20</h4>
              <p>Following</p>
            </div>
          </div>
          <div className="mx-auto mt-md-0 mt-4">
            <button className="custom-btn custom-btn-white me-md-3">
              <span className="fs-6">Edit Profile</span>
            </button>
            <button
              className="custom-btn custom-btn-white me-md-3"
              onClick={handlePostShow}>
              <span className="fs-6">Upload Post</span>
            </button>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <div className="col-12">
          <hr />
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-md-4 col-sm-12">
          <div className="card" onClick={handleShow}>
            <img
              src="https://media.istockphoto.com/id/1322050865/photo/programmer-woman-coding-on-computer.jpg?s=612x612&w=0&k=20&c=2Hry0KibkKwciDozRBwkq--C3N9sR9f-OAhPrL8HLNs="
              className="card-img-top"
              alt="..."
            />
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="card">
            <img
              src="https://media.istockphoto.com/id/1343181388/photo/developing-programming-and-coding-technology-working-in-a-software-engineers-developing.jpg?s=612x612&w=0&k=20&c=jzV3w-ayT5h5F3XSl8UOFaTMzH_MLw56I5wG9FbTzTk="
              className="card-img-top"
              alt="..."
            />
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              className="card-img-top"
              alt="..."
            />
          </div>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-md-4 col-sm-12">
          <div className="card">
            <img
              src="https://media.istockphoto.com/id/1322050865/photo/programmer-woman-coding-on-computer.jpg?s=612x612&w=0&k=20&c=2Hry0KibkKwciDozRBwkq--C3N9sR9f-OAhPrL8HLNs="
              className="card-img-top"
              alt="..."
            />
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="card">
            <img
              src="https://media.istockphoto.com/id/1343181388/photo/developing-programming-and-coding-technology-working-in-a-software-engineers-developing.jpg?s=612x612&w=0&k=20&c=jzV3w-ayT5h5F3XSl8UOFaTMzH_MLw56I5wG9FbTzTk="
              className="card-img-top"
              alt="..."
            />
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              className="card-img-top"
              alt="..."
            />
          </div>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-md-4 col-sm-12">
          <div className="card">
            <img
              src="https://media.istockphoto.com/id/1322050865/photo/programmer-woman-coding-on-computer.jpg?s=612x612&w=0&k=20&c=2Hry0KibkKwciDozRBwkq--C3N9sR9f-OAhPrL8HLNs="
              className="card-img-top"
              alt="..."
            />
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="card">
            <img
              src="https://media.istockphoto.com/id/1343181388/photo/developing-programming-and-coding-technology-working-in-a-software-engineers-developing.jpg?s=612x612&w=0&k=20&c=jzV3w-ayT5h5F3XSl8UOFaTMzH_MLw56I5wG9FbTzTk="
              className="card-img-top"
              alt="..."
            />
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              className="card-img-top"
              alt="..."
            />
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-6">
              <div>
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide mt-4"
                  data-bs-ride="carousel">
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="https://media.istockphoto.com/id/1322050865/photo/programmer-woman-coding-on-computer.jpg?s=612x612&w=0&k=20&c=2Hry0KibkKwciDozRBwkq--C3N9sR9f-OAhPrL8HLNs="
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="https://plus.unsplash.com/premium_photo-1663100722417-6e36673fe0ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29kZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-body px-2">
                <div className="row">
                  <div className="col-6 d-flex">
                    <img
                      alt="profile_pic"
                      className=" p-2 profile-pic"
                      src="https://media.istockphoto.com/id/486121005/photo/sun-rays-inside-coconut-palms.jpg?s=2048x2048&w=is&k=20&c=wUSKrQDsoAgLexCgjoEw8kmCtKbCJsqlFznl44BepWY="
                    />
                    <div className="d-flex flex-column justify-content-center mt-2">
                      <p className="fs-6 fw-bold">Title</p>
                      <p className="location">description</p>
                    </div>
                    <div className="dropdown ms-5">
                      <a
                        className="btn"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown">
                        <img alt="more action" src={horizontalMoreAction} />
                      </a>

                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="fa-regular fa-pen-to-square px-2"></i>
                            Edit Post
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="fa-sharp fa-solid fa-trash px-2"></i>
                            Delete Post
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-12">
                    <span className="p-2 text-muted">2 hours ago</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 mt-3 ms-2">
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do.{" "}
                    </p>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-6 d-flex">
                    <i className="ps-2 fs-4 fa-regular fa-heart"></i>
                    <i className="ps-3 fs-4 fa-regular fa-comment"></i>
                    <i className="ps-3 fs-4 fa-sharp fa-regular fa-paper-plane"></i>
                  </div>
                  <div className="col-12 mt-3 ms-2">
                    <span className="pe-3 fs-6 fw-bold">200 likes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal show={showPost} onHide={handlePostClose} size="lg" centered>
        <Modal.Header closeButton>
          <span className="fw-bold fs-5">Upload Post</span>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-6 col-sm-12 mb-3">
              <div className="upload-box">
                <div className="dropZoneContainer">
                  <input
                    type="file"
                    id="drop_zone"
                    className="FileUpload"
                    accept=".jpg,.png,.gif"
                    onChange={handleFileSelect}
                  />
                  <div className="dropZoneOverlay">
                    <i className="fa-solid fa-cloud-arrow-up fs-1"></i>
                    <br />
                    Upload Photo From Computer
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-between">
              <div className="row">
                <div className="col-sm-12 mb-3">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Add Caption"></textarea>
                    <label>Add Caption</label>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Add Location"></input>
                    <label htmlFor="floatingInput">
                      <i className="fa-solid fa-location-dot pe-2"></i>Add
                      Location
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <button className="custom-btn custom-btn-pink float-end">
                    <span className="fs-6 fw-600">Post</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Profile;
