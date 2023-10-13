import React from "react";
import "../assets/style/videotab.css";
import "../assets/style/Responsiveness.css";
import videoImg from "../assets/images/video-img.png";
import promo from "../assets/images/Neosao Promo-Compressed.mp4";
import star1 from "../assets/images/star-1.png";
import star2 from "../assets/images/star-2.png";

const VideoTab = () => {
  return (
    <div className="video">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="video-text h-100 d-flex justify-content-center align-items-center">
              <img src={videoImg} alt="Video" />
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="video-text-right">
              <h6>
                Get Your Site Optimized &amp;{" "}
                <span>Converting Right Now !</span>
              </h6>
              <a
                href="#footer"
                className="contact_btn animated fadeInUpShort go"
              >
                <i className="fa fa-phone" aria-hidden="true"></i> | Call Now!
              </a>
              <a
                href="#"
                className="contact_btn animated fadeInUpShort go"
                data-toggle="modal"
                data-target="#videoModal"
                data-theVideo={promo}
              >
                <i className="fa fa-video-camera" aria-hidden="true"></i> |
                Watch Video
              </a>
              <div
                className="modal fade"
                id="videoModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="videoModal"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-body">
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-hidden="true"
                      >
                        &times;
                      </button>
                      <div>
                        <iframe width="100%" height="350" src=""></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* STAR BURST IF APPLY */}
          <div className="star">
            <img src="" alt="Star 1" />
          </div>
          <div className="star2">
            <img src="" alt="Star 2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTab;
