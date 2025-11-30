import { Col, Row } from 'antd'
import GameChat from '../Components/GameChat'
import CustomChessboard from '../Components/CustomChessboard'

function Play() {

  return(
    <>
      <Row style={{ border: '1px solid black' }} align='middle' justify='center'>
        <Col span={12}>
          <CustomChessboard />
        </Col>

        {/* For spacing only */}
        <Col span={3} />

        {/* For texting with opp */}
        <Col span={6}>
          <GameChat />
        </Col>
      </Row>
    </>
  )
}

export default Play
