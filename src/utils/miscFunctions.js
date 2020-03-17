function compareByAsk( a, b ) {
  if ( a.text < b.text ){
    return -1;
  }
  if ( a.text > b.text ){
    return 1;
  }
  return 0;
}
	
function compareByDesc( a, b ) {
  if ( a.text < b.text ){
    return 1;
  }
  if ( a.text > b.text ){
    return -1;
  }
  return 0;
}

export {
	compareByDesc,
	compareByAsk
}