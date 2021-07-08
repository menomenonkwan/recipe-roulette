const getAvatar = (title) => {
  const regex = /^[a-z0-9]+$/i;
  const letters = title.split('');
  return letters[0].match(regex) ? letters[0].toUpperCase() : 'X';

  // return title
  //   .split(' ')
  //   .map(word => word.split(''))
  //   .map(letter => {
  //     return letter[0].match(regex) ? letter[0] : ''})
  //   .join('')
  //   .toUpperCase();
}

export { getAvatar };