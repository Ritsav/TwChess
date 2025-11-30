import { HomeOutlined, PlayCircleFilled } from "@ant-design/icons"
import { Menu } from "antd"
import Sider from "antd/es/layout/Sider"
import { useState } from "react"

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const CustomSidebar = () => {
    const [collapsed, setCollapsed] = useState(false)

    const siderStyle = {
        // backgroundColor: 'white'
    }

    const items = [
        getItem('Home', '1', <HomeOutlined />),
        getItem('Play', '2', <PlayCircleFilled />)
    ]

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)} width='15%' style={siderStyle}>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={items} />
        </Sider>
    )
}

export default CustomSidebar