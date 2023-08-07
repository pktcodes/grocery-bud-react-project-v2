import { useState } from 'react';

const Form = () => {
  const [newItem, setNewItem] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newItem);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newItem}
          onChange={(event) => setNewItem(event.target.value)}
        />
        <button type="submit" className="btn">
          add item
        </button>
      </div>
    </form>
  );
};

export default Form;
