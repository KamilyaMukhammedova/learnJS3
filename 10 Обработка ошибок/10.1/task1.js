function f() {
  try {
    console.log('Start');
    throw new Error("Error");
  } catch (e) {
    if("Can't fix error") {
      throw e;
    }
  } finally {
    console.log('Clean');
  }
}

f();