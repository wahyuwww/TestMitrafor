/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-unstable-nested-components */
import React, { useState, useRef, useEffect } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Table } from "antd";
import { Col, Row, Form, Input, Button } from "antd";
import { Link } from "react-router-dom";

import product from "../database/product.json";

const Home = () => {
  const [products, setProductData] = useState(product);
  const searchInput = useRef(null);
  const [search, setSearch] = useState(localStorage.getItem("search"));

  useEffect(() => {
    if (localStorage.getItem("search")) {
      searchProduct(localStorage.getItem("search"));
    }
  }, []);

  const onSubmit = () => {
    localStorage.setItem("search", search);

    searchProduct(search);
  };

  const searchProduct = (search) => {
    const productDataFiltered = product.filter((product) => {
      return product.title
        .trim()
        .toLowerCase()
        .includes(search.trim().toLowerCase());
    });

    setProductData(productDataFiltered);
  };

  const columns = [
    {
      title: "No",
      key: "index",
      render: (text, record, index) => index + 1,
      width: "4%",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      width: "20%",
      sorter: (a, b) => a.title.length - b.title.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Photo",
      dataIndex: "thumbnail",
      width: "30%",
      render: (imgs, record) => (
        <div>
          <img
            src={record.thumbnail}
            alt="product"
            style={{
              width: "150px",
              height: "120px",
              objectFit: "cover",
              borderRadius: "5px",
            }}
          />
        </div>
      ),
    },
    {
      title: "Brand",
      dataIndex: "brand",
      width: "15%",
      filterMode: "tree",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      sorter: (a, b) => a.price - b.price,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Action",
      dataIndex: "id",
      render: (text, record, index) => (
        <div key={index}>
          <Link to={`/product/${record.id}`} style={{ color: "black" }}>
            <Button
              type="primary"
              style={{
                objectFit: "cover",
                borderRadius: "5px",
              }}
            >
              Detail
            </Button>
          </Link>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Row justify="center">
        <Col span={22}>
          <h1 style={{fontSize:"40px",marginLeft:'400px'}}>Home</h1>
          <Form
            wrapperCol={{ span: 24 }}
            onFinish={onSubmit}
            autoComplete="off"
          >
            <Form.Item name="search" style={{ marginBottom: "15px" }}>
              <Row justify="center">
                <Col span={16}>
                  <Input
                    ref={searchInput}
                    style={{
                      marginBottom: 8,
                      display: "block",
                    }}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </Col>
                <Col span={2} style={{ backgroundColor: "primary" }}>
                  <Button
                    style={{ width: "100%" }}
                    type="primary"
                    htmlType="submit"
                    icon={<SearchOutlined />}
                  ></Button>
                </Col>
              </Row>
            </Form.Item>
          </Form>
          <Table columns={columns} dataSource={products} rowKey="id" />
        </Col>
      </Row>
    </div>
  );
}

export default Home