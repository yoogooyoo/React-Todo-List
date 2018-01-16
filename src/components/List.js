import React from 'react';

const List = (props) => {
  return (
    <div>
      <ul>
        {
          props.listItems.map( (el, i) => (
            <li key={i}>
              <div className="form-inline">
                <div className="form-group">
                  <span style={
                    el.done
                    ? {textDecoration: 'line-through', fontSize: '20px'}
                    : {textDecoration: 'none', fontSize: '20px'}
                  } onClick={props.onClick.bind(null, i)}>
                    {el.item}
                  </span>
                  <button onClick={() => props.deleteListItem(i)} className="btn btn-danger pull-right">X
                  </button>
                </div>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
};

export default List;