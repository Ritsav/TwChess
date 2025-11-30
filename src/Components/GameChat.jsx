import { Avatar, Input, List, Grid } from 'antd';
import { useEffect, useState } from 'react';

const { Search } = Input;

const GameChat = () => {
  // For chat
  const [inputValue, setInputValue] = useState('')
  const [messages, setMessages] = useState([])

  // TODO: Remove later just for test rn
  const [turn, setTurn] = useState(0)

  const screens = Grid.useBreakpoint()
  const isSmall = !screens.md          // md = 768px. Below this = small screen

  // TODO: Pull userName from session later
  const users = ['Ritsav', 'Buddha']

  function sendMessage(value)
  {
    if(!value.trim()) 
      return

    const message = {
      title: users[turn],
      description: inputValue
    }

    if(turn == 0)
      setTurn(1)
    else 
      setTurn(0)

    setMessages([...messages, message])
    setInputValue('')
  }

  useEffect(() => {
    console.log("User input: ", messages[messages.length - 1]);
  }, [messages])

  const chatboxStyle = {
    border: '1px solid black',
    padding: isSmall ? '2px' : '8px',
    maxHeight: isSmall ? '200px' : '350px',
    overflowY: 'auto',
    fontSize: isSmall ? '12px' : '14px'
  };

  function renderChatMessage()
  {
    let avatarNumber = turn
    return(
      <List.Item>
        <List.Item.Meta
          avatar={
            <Avatar
              size={avatarSize}
              src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${avatarNumber}`}
            />
          }
          title={
            <span style={{ fontSize: isSmall ? '8px' : '15px' }}>
              {messages[messages.length - 1].title}
            </span>
          }
          description={
            <span style={{ fontSize: isSmall ? '6px' : '13px' }}>
              {messages[messages.length - 1].description}
            </span>
          }
        />
      </List.Item>
    )
  }

  const avatarSize = isSmall ? 28 : 45;

  return (
    <>
      <List
        style={chatboxStyle}
        itemLayout="horizontal"
        dataSource={messages}
        renderItem={renderChatMessage}
      />

      <Search 
        placeholder='Enter to send'
        enterButton='>>'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onSearch={sendMessage}
        style={{
          marginTop: '6px',
          // fontSize: isSmall ? '12px' : '14px',
          // height: isSmall ? '32px' : '40px'
        }}
        size='large' />
    </>
  );
};

export default GameChat;
