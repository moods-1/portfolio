import React, { useState } from "react";
import { Avatar } from "../../assets/Images";
import "./Home.scss";
import { Button } from "@material-ui/core";
import { CloudDownloadOutlined } from "@material-ui/icons";
import { FormModal } from "../../components";
function Home() {
  const [openFormModal, setOpenFormModal] = useState(false);
  const closeFormModal = () => setOpenFormModal(!openFormModal);

  return (
    <div className="home-main" id="homeComp">
      <div>
        <div className="home-details">
          <h4>I see you're looking for a</h4>
          <h1>WEB DEVELOPER!</h1>
          <h4>Well, it just so happens ...</h4>
        </div>
        <div>
          <Button
            onClick={() => setOpenFormModal(!openFormModal)}
            variant="contained"
            color="primary"
          >
            Hire me
          </Button>
          <a
            href="https://drive.google.com/file/d/1ZEpnVhGdp1tAxD5iZ9WGMx32QddEeeFK/view?usp=sharing"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button variant="contained" color="primary">
              CV / Resume&nbsp;
              <CloudDownloadOutlined />
            </Button>
          </a>
        </div>
      </div>
      <div>
        <img src={Avatar} alt="carl" />
      </div>
      {openFormModal && (
        <FormModal
          openFormModal={openFormModal}
          closeFormModal={closeFormModal}
        />
      )}
    </div>
  );
}

export default Home;
