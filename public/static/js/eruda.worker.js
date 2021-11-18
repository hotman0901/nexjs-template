function init() {
  if (window.eruda) {
    console.log('==== eruda working ====');
    eruda.init();
  } else {
    console.log('==== eruda fail ====');
  }
}
