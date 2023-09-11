import React from 'react';

export default function Item({ item, onDelete, onToggleitem }) {

  return (
    <li>
      <input type="checkbox" value={item.package} onChange={() => onToggleitem(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>  {item.quantity} {item.description}  </span>
      <button onClick={() => onDelete(item.id)}>X</button>
    </li>
  );
}
