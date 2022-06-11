const capitalize = (text) => {
    if (text === '') {
      return '';
    }
    // if (typeof text !== 'string') return 'Неправильный тип введённых данных!';
    const firstChar = text[0].toUpperCase();
    const restSubstring = text.slice(2);
    return `${firstChar}${restSubstring}`;
  };

  capitalize('hello');

  export default capitalize;
