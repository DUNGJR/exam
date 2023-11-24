import React from "react";
import { Layout, Menu, Input, Card, Col, Row, Divider } from "antd";
import { useSelector } from "react-redux";
import {
  BookOutlined,
  AuditOutlined,
  ReadOutlined,
  SoundOutlined,
} from "@ant-design/icons";
const { Header, Content, Sider } = Layout;
const { Search } = Input;
const { Meta } = Card;

const AdminPage = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);

  return (
    <div>
      <Layout>
        <Sider width={200} className="site-layout-background">
          {/* Sidebar Menu */}
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1", "sub2"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <Menu.Item key="1" icon={<BookOutlined />}>
              Quản lý bài nghe
            </Menu.Item>
            <Menu.Item key="2" icon={<SoundOutlined />}>
              {" "}
              Quản lý bài đọc
            </Menu.Item>

            <Menu.Item key="3" icon={<ReadOutlined />}>
              Quản lý tài khoản
            </Menu.Item>

            <Menu.Item key="4" icon={<AuditOutlined />}>
              Thông tin cá nhân
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <h2 style={{ margin: "16px 0" }}>Trang quản lý</h2>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Row gutter={16}></Row>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};
export default AdminPage;
