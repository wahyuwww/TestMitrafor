import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Typography } from "antd";

const { Title } = Typography;

const NavItem = ({ link, title, icon}) => {
 return (
   <Link to={link}>
     <Row>
       <Col span={6} className="mt-5">
         <Title level={3} style={{ color: "white" }}>
           {icon}
         </Title>
       </Col>
       <Col span={18}>
         <Title level={4} style={{ color: "white" }}>
           {title}
         </Title>
       </Col>
     </Row>
   </Link>
 );
}

export default NavItem