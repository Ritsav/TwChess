import { HomeOutlined, PlayCircleFilled } from "@ant-design/icons"
import { Menu } from "antd"
import Sider from "antd/es/layout/Sider"
import { useState } from "react"
import { Link, useLocation } from "react-router";

function getItem(label, key, icon, path, children) {
  return {
    label,
    key,
    icon,
    path,
    children,
  };
}

const CustomSidebar = () => {
    const [collapsed, setCollapsed] = useState(false)
    const route = useLocation()

    const menuItems = [
        getItem(<Link to="/">Home</Link>, "1", <HomeOutlined />, "/"),
        getItem(<Link to="/play">Play</Link>, "2", <PlayCircleFilled />, "/play"),
    ]

    // auto-detect selected menu item based on pathname
    const selectedKey =
        menuItems.find((item) => item.path === location.pathname)?.key || "1";

    const siderStyle = {
    }

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)} width='15%' style={siderStyle}>
            <Menu
                theme="dark"
                mode="inline"
                selectedKeys={[selectedKey]}
                items={menuItems} />
        </Sider>
    )
}

export default CustomSidebar