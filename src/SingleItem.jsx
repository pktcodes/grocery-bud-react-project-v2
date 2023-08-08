import { useState } from 'react';

const SingleItem = ({ item }) => {
  const [isChecked, setIsChecked] = useState(item.completed);

  return (
    <div className="single-item">
      <input
        type="checkbox"
        value={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <p
        style={{
          textDecoration: isChecked && 'line-through',
          textTransform: 'capitalize',
        }}
      >
        {item.name}
      </p>
      <button className="btn remove-btn">delete</button>
    </div>
  );
};

export default SingleItem;
