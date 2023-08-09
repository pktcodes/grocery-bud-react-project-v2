import { useState } from 'react';
import { nanoid } from 'nanoid';

import Form from './Form';
import Items from './Items';

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    list = JSON.parse(localStorage.getItem('list'));
    // list = JSON.parse(list);
  } else {
    list = [];
  }
  return list;
};

const App = () => {
  // One Liner
  const defaultList = JSON.parse(localStorage.getItem('list') || '[]');
  // const defaultList = JSON.parse(localStorage.getItem('list')) || [];

  const [items, setItems] = useState(defaultList);
  // const [items, setItems] = useState(getLocalStorage);

  const setLocalStorage = (items) => {
    return localStorage.setItem('list', JSON.stringify(items));
  };

  const addItem = (itemName) => {
    const newItem = { name: itemName, completed: false, id: nanoid() };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
  };

  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    console.log(newItems);
    setItems(newItems);
    setLocalStorage(newItems);
  };

  return (
    <section className="section-center">
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} />
    </section>
  );
};

export default App;
