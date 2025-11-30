import { Col, Row } from "antd"
import { Chessboard } from "react-chessboard"
import CustomChessboard from "../Components/CustomChessboard"

const Home = () => {

  const homeStyle = {
    width: '100%',
    backgroundColor: '#1c2755',
  }

  const chessBoardOptions = {

  }

  return (
    <div style={homeStyle}>
      <Row style={{ height: '20vh' }}>

      </Row>
      <Row>
        <Col span={3} />
        <Col span={5}>
          <div>
            <CustomChessboard options={chessBoardOptions}/>
          </div>
        </Col>
        <Col span={2} />
        <Col span={5}>
          <div>
            <CustomChessboard options={chessBoardOptions}/>
          </div>
        </Col>
        <Col span={2} />
        <Col span={5}>
          <div>
            <CustomChessboard options={chessBoardOptions}/>
          </div>
        </Col>
        <Col span={2} />
      </Row>
    </div>
  )
}

export default Home