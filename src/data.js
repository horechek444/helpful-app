let categories = new Map();
categories.set('Свитшоты', ['С совой', 'АГ голубой', 'АГ зеленый']);
categories.set('Джинсы', ['Теплые', 'Легкие uniqlo', 'Легкие обычные', 'Черные']);
categories.set('Юбки', ['Джинсовая', 'Плиссе', 'С самолётиком',]);

let categoriesKeys = Array.from(categories.keys());
let categoriesValues = Array.from(categories.values());

export {categoriesKeys, categoriesValues};
