import { Outlet } from "react-router"
import CustomSidebar from "../Components/CustomSidebar"
import { Breadcrumb, Layout, Row } from "antd"
import { Content, Footer } from "antd/es/layout/layout"

const Dashboard = () => {
    const contentStyle = {
        border: '3px solid black',
        textAlign: 'center',
        display: 'flex',
        direction: 'column',
        justifyContent: 'center'
    }

    const footerStyle = {
        marginTop: '15px',
        border: '3px solid black',
        width: '100%',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        padding: '3px',
    }

  return (
        <Layout style={{ minHeight: '100vh' }}>
            <CustomSidebar />

            <Layout> 
                <Content style={contentStyle}>
                    <Outlet />
                </Content>

                 <Footer style={footerStyle}>
                    <h3>TwChess © {new Date().getFullYear()}</h3>
                    <h5>Created by Ritsav</h5>
                </Footer>
             </Layout> 
        </Layout>
  )
}

export default Dashboard