import React from 'react';
import ListItem from './ListItem'

const List = (props) => {
  return (
    <div>
      <ul className="list-group">
        {
          props.data.map( (el,i) =>
            <ListItem
              key={i}
              taskId={el.id}
              complete={el.complete}
              task={el.task}
              deleteTask={() => props.deleteListItem(i)}
              toggleComplete={props.toggleTodo}
            />
          )
        }
      </ul>
    </div>
  )
};

export default List;