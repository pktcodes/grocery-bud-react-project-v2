import { useState } from 'react';

const Form = ({ addItem }) => {
  const [newItemValue, setNewItemValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addItem(newItemValue);
    setNewItemValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newItemValue}
          onChange={(event) => setNewItemValue(event.target.value)}
        />
        <button type="submit" className="btn">
          add item
        </button>
      </div>
    </form>
  );
};

export default Form;
