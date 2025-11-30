import { Avatar, Input, List, Grid } from 'antd';

const GameChat = () => {
  const screens = Grid.useBreakpoint(); 

  const isSmall = !screens.md;          // md = 768px. Below this = small screen

  const data = [
    { title: 'Stacy' },
    { title: 'Kriller' },
    { title: 'Himmel' },
    { title: 'Ant' },
  ];

  const chatboxStyle = {
    border: '1px solid black',
    padding: isSmall ? '2px' : '8px',
    maxHeight: isSmall ? '200px' : '350px',
    overflowY: 'auto',
    fontSize: isSmall ? '12px' : '14px'
  };

  const avatarSize = isSmall ? 28 : 45;

  return (
    <>
      <List
        style={chatboxStyle}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar
                  size={avatarSize}
                  src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                />
              }
              title={
                <span style={{ fontSize: isSmall ? '13px' : '15px' }}>
                  {item.title}
                </span>
              }
              description={
                <span style={{ fontSize: isSmall ? '11px' : '13px' }}>
                  Ant Design, a design language for background applications, is refined by Ant UED Team
                </span>
              }
            />
          </List.Item>
        )}
      />

      <Input
        placeholder="Enter to send"
        style={{
          marginTop: '6px',
          fontSize: isSmall ? '12px' : '14px',
          height: isSmall ? '32px' : '40px'
        }}
      />
    </>
  );
};

export default GameChat;
