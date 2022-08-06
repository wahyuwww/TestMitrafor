import React from "react";
import { AiFillHome } from "react-icons/ai";
import { IoMdContact } from "react-icons/io";
import { BsPeopleFill } from "react-icons/bs";
import { Layout } from "antd";
import styles from "./style.module.css";
import NavItem from "../base/NavItem";

const { Sider, Content } = Layout;

const Sidebar = ({ children }) => {

  return (
    <Layout>
      <Sider
        style={{ backgroundColor: "#002766" }}
        className={styles.sidebar}
      >
        <div style={{ minHeight: "20vh" }}></div>
        <NavItem
          link="/"
          title="Home"
          icon={<AiFillHome />}
        />
        <div style={{ minHeight: "5vh" }}></div>
        <NavItem
          link="/about"
          title="About"
          icon={<BsPeopleFill />}
        />
        <div style={{ minHeight: "5vh" }}></div>
        <NavItem
          link="/contact"
          title="Contact"
          icon={<IoMdContact />}
        />
      </Sider>
      <Layout>
        <Content className={styles.content}>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default Sidebar
