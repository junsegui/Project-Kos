export const addItemCart = (bag, product) => {
  const exist = bag.find((item) => item.id === product.id);
  if (exist) {
    return bag.map((item) =>
      item.id === exist.id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    );
  }
  return [...bag, { ...product, quantity: 1 }];
};

export const deleteItemCart = (bag, id) => {
  const exist = bag.find((item) => item.id === id);
  if (exist && exist.quantity > 1) {
    return bag.map((item) =>
      item.id === exist.id
        ? {
            ...item,
            quantity: item.quantity - 1,
          }
        : item
    );
  }
  return bag.filter((i) => id !== i.id);
};

export const addItemCartB = (bag, product,counter) => {
  const exist = bag.find((item) => item.id === product.id);
  if (exist) {
    
    return bag.map((item) =>
      item.id === exist.id
        ? {
            ...item,
            quantity: item.quantity = counter
          }
        : item
        
    );
  }
  
  console.log({counter,bag,product})
  return [...bag, { ...product, quantity: counter }];
};