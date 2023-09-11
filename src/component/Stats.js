import React from 'react';
export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className='stats'>
        <em>Start adding some item to your pack list</em>
      </p>
    );

  const numitems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.random((numPacked / numitems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100 ? "You have everything to go" :
          `you have ${numitems} item on your list, and you already pack ${numPacked}(${percentage}%)`}
      </em>
    </footer>

  );
}
