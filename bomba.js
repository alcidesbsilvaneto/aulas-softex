async function conta() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      throw new Error();
    }, 2000);
  });
}

async function bomba() {
  for (let i = 10; i > 0; i--) {
    await conta();
    console.log(`${i} segundos`);
  }
}

bomba();
