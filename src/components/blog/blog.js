import React from 'react';
import { Layout, Menu, Input, Card, Col, Row, Divider} from 'antd';
import { BookOutlined, AuditOutlined, ReadOutlined, SoundOutlined } from '@ant-design/icons';
const { Header, Content, Sider } = Layout;
const { Search } = Input;
const { Meta } = Card;

const articleData = [
  {
    title: "Cách viết CV xin việc bằng tiếng Anh mới nhất (2023)",
    description: "Cách nào để viết CV xin việc bằng tiếng Anh ấn tượng với nhà tuyển dụng? Hãy cùng STUDY4 tìm hiểu cách viết CV tiếng Anh ngay dưới đây.",
    image: "https://i.redd.it/nhk8jg3psng71.jpg"
  },
  
  {
    title: "Cách viết CV xin việc bằng tiếng Anh mới nhất (2023)",
    description: "Cách nào để viết CV xin việc bằng tiếng Anh ấn tượng với nhà tuyển dụng? Hãy cùng STUDY4 tìm hiểu cách viết CV tiếng Anh ngay dưới đây.",
    image: "https://i.redd.it/nhk8jg3psng71.jpg"
  }, 
  
  {
    title: "Cách viết CV xin việc bằng tiếng Anh mới nhất (2023)",
    description: "Cách nào để viết CV xin việc bằng tiếng Anh ấn tượng với nhà tuyển dụng? Hãy cùng STUDY4 tìm hiểu cách viết CV tiếng Anh ngay dưới đây.",
    image: "https://i.redd.it/nhk8jg3psng71.jpg"
  }, 
  
  {
    title: "Cách viết CV xin việc bằng tiếng Anh mới nhất (2023)",
    description: "Cách nào để viết CV xin việc bằng tiếng Anh ấn tượng với nhà tuyển dụng? Hãy cùng STUDY4 tìm hiểu cách viết CV tiếng Anh ngay dưới đây.",
    image: "https://i.redd.it/nhk8jg3psng71.jpg"
  }, 
  
  {
    title: "Cách viết CV xin việc bằng tiếng Anh mới nhất (2023)",
    description: "Cách nào để viết CV xin việc bằng tiếng Anh ấn tượng với nhà tuyển dụng? Hãy cùng STUDY4 tìm hiểu cách viết CV tiếng Anh ngay dưới đây.",
    image: "https://i.redd.it/nhk8jg3psng71.jpg"
  },


  
];

const App = () => (
    <Layout>
      <Sider width={200} className="site-layout-background">
        {/* Sidebar Menu */}
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1', 'sub2']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <Menu.Item key="1" icon={<BookOutlined />}>
            Tiếng Anh cơ bản
          </Menu.Item>
          <Menu.SubMenu key="sub1" icon={<SoundOutlined />} title="Luyện thi IELTS">
            <Menu.Item key="2">IELTS Listening</Menu.Item>
            <Menu.Item key="3">IELTS Reading</Menu.Item>
            <Menu.Item key="4">IELTS Speaking</Menu.Item>
            <Menu.Item key="5">IELTS Writing</Menu.Item>
            <Menu.Item key="6">IELTS Materials</Menu.Item>
            <Menu.Item key="7">Thông tin kỳ thi IELTS</Menu.Item>
            <Menu.Item key="8">Kinh nghiệm thi IELTS</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key="sub2" icon={<ReadOutlined />} title="Luyện thi TOEIC">
            <Menu.Item key="9">TOEIC Listening</Menu.Item>
            <Menu.Item key="10">TOEIC Reading</Menu.Item>
            <Menu.Item key="11">TOEIC Materials</Menu.Item>
            <Menu.Item key="12">Thông tin kỳ thi TOEIC</Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="13" icon={<AuditOutlined />}>
            Tiếng Anh cho người đi làm
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <h2 style={{ margin: '16px 0' }}>Bài Viết</h2>
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <Row gutter={16}>
            <Col span={16}>
              {/* Article Cards */}
              {articleData.map((article, index) => (
                <Card key={index} style={{ marginBottom: 16, display: 'flex', alignItems: 'center' }}>
                  <Row wrap={false}>
                    <Col flex="200px">
                      <img
                        alt="example"
                        src={article.image}
                        style={{ width: '100%', height: 'auto' }}
                      />
                    </Col>
                    <Col flex="auto" style={{ padding: '0 20px' }}>
                      <h3>{article.title}</h3>
                      <Divider style={{ margin: '10px 0' }} />
                      <p>{article.description}</p>
                    </Col>
                  </Row>
                </Card>
              ))}
            </Col>
            <Col span={8}>
              {/* Search and Additional Information */}
              <Search placeholder="input search text" style={{ marginBottom: 16 }} />
              {/* Other Components */}
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
  
  export default App;