const getHighlights = (input = '', searchDataItem = '') => {
  const splittedInput = input.trim().split(' ');
  const highlights = [];

  for (const item of splittedInput) {
    const matches = searchDataItem.matchAll(new RegExp(item, 'gi'));

    for (const match of matches) {
      highlights.push({
        [item]: match.index,
        itemLength: item.length,
      });
    }
  }

  return highlights;
};

export default getHighlights;
