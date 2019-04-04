import {
    Layout, Menu, Breadcrumb, Icon, Dropdown, message, Button
  } from 'antd';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';

  const {
    Header, Content, Footer, Sider,
  } = Layout;
  const SubMenu = Menu.SubMenu;

  class SiderDemo extends React.Component {
    state = {
      collapsed: false,
    };
  
    onCollapse = (collapsed) => {
      console.log(collapsed);
      this.setState({ collapsed });
    }
  
    handleButtonClick = (e) => {
      message.info('Click on left button.');
      console.log('click left button', e);
    }
    
    handleMenuClick = (e) => {
      message.info('Click on menu item.');
      console.log('click', e);
    }

    render() {
      const rootMenu = (
        <Menu onClick={this.handleMenuClick}>
          <Menu.Item key="1"><Icon type="user" />新增分类</Menu.Item>
        </Menu>
      );

      const folderMenu = (
        <Menu onClick={this.handleMenuClick}>
          <Menu.Item key="1"><Icon type="user" />删除分类</Menu.Item>
          <Menu.Item key="2"><Icon type="user" />新增文章</Menu.Item>
        </Menu>
      );

      const fileMenu = (
        <Menu onClick={this.handleMenuClick}>
          <Menu.Item key="1"><Icon type="user" />删除文章</Menu.Item>
          <Menu.Item key="2"><Icon type="user" />编辑文章</Menu.Item>
        </Menu>
      );

      return (
        <Layout style={{ minHeight: '100vh' }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
            width={296}
          >
            <div className="logo" />
            <Menu defaultSelectedKeys={['1']} mode="inline">
              <SubMenu
                key="sub1"
                title={<span><Icon type="folder" /><span>知识库</span>
                <span>
                  <Dropdown overlay={rootMenu}>
                      <Button style={{ marginLeft: 140, borderStyle: 'none'}} >
                          <Icon type="ellipsis" />
                      </Button>
                  </Dropdown></span></span>}
              >
                <Menu.Item key="3">{<span><Icon type="file-text" /><span>User</span></span>}</Menu.Item>
                <Menu.Item key="4">{<span><Icon type="file-text" /><span>hrhr</span></span>}</Menu.Item>
                <Menu.Item key="5">{<span><Icon type="file-text" /><span>hrhr1</span></span>}</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              
            </Header>
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                Bill is a cat.
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      );
    }
  }
  
ReactDOM.render(<SiderDemo />, document.getElementById('root'));

