function eById(id) {
  if (typeof id === 'string') {
    return document.getElementById(id);
  }
  return null;
}
