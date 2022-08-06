/* eslint-disable max-len */
import React from "react"
import { Button, Row,Col } from "antd";
import { FaLinkedin,FaGithub } from "react-icons/fa";
import styles from './contact.module.css'

const Contact = () => {
  return (
    <>
      <Row justify="center">
        <Col span={24} style={{ textAlign: "center" }}>
          <div className={`${styles.contact}`}>
            <div className={`${styles.container}`}>
              <div className={`${styles.box}`}>
                <h3 className={`${styles.titleContact}`}>Contact</h3>
                <img
                  src="https://avatars.githubusercontent.com/u/60133853?v=4"
                  alt=""
                  style={{
                    borderRadius: "50%",
                    width: "200px",
                    height: "200px",
                    marginLeft: "300px",
                    border: "2px solid white",
                  }}
                />
                <h4 className={`${styles.fullname}`}>Wahyu Dwi Purwanto</h4>
                <div
                  className="icon"
                  style={{ marginTop: "30px", marginLeft: "300px" }}
                >
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/wahyu-dwi-purwanto/"
                    rel="noreferrer"
                  >
                    <Button type="primary">
                      <FaLinkedin />{" "}
                    </Button>
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/wahyuwww"
                    rel="noreferrer"
                  >
                    <Button type="light">
                      <FaGithub />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Contact;
