import React from 'react';
import { Row, Col, Checkbox, Button} from 'antd';

const ListItem = ({taskId, complete, task, deleteTask, toggleComplete}) => {
  return (
    <li className="list-group-item">
      <Row>
        <Col span={16}>
          <Checkbox checked={complete} onChange={() => toggleComplete(taskId)}/>
          <span style={{textDecoration: complete ? 'line-through' : 'none'}} >
            {task}
          </span>
        </Col>
        <Col span={8}>
          <Button type="danger" className="pull-right" onClick={deleteTask}>X</Button>
        </Col>
      </Row>
    </li>
  )
}

export default ListItem;