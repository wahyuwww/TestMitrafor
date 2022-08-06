/* eslint-disable max-len */
import React, { Component } from 'react'
import styles from './about.module.css'
import { Col, Row,  } from "antd";

export default class About extends Component {
  render() {
    return (
    <>
      <Row justify="center">
        <Col span={24} style={{ textAlign: "center" }}>
          <div className={`${styles.about}`}>
            <div className={`${styles.container}`}>
              <div className={`${styles.box}`}>
                <h1 className={`${styles.title}`}>About</h1>
                <p className={`${styles.description}`}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
                  adipisci modi, molestiae amet qui illum quisquam corporis,
                  quia tempora ipsa pariatur aliquam assumenda aspernatur
                  incidunt reiciendis vero, tempore consectetur! Illo.
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
  }
}