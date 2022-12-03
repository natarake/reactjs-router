import React from "react";

const Footer = () => {
  return (
    <footer className="bg-secondary mt-3">
      <div className="container-fluid bg dark pt-3 border-top border-1 border-warning">
        <ul className="d-flex justify-content-center list-unstyled">
          <li>
            <a href="/">
              <i className="fa fa-linkedin text-warning px-2 fw-bold"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fa fa-twitter text-warning px-2 fw-bold"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fa fa-facebook text-warning px-2 fw-bold"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fa fa-instagram text-warning px-2 fw-bold"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="text-warning text-center border-top border-2 p-2">
        This project will not be possible without the help of Ms. Michelle of
        KodeGo <br />
        &copy; 2022 Glenn Ladrido - WD20P Student <br />
        All Rights Reserve
      </div>
    </footer>
  );
};

export default Footer;
