function usePromise() {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      num = Math.floor(Math.random() * 101);   
      if (num % 2 == 0) {
        resolve("Завершено успешно. Сгенерированное число - " + num);
      }
      else {
        reject("Завершено с ошибкой. Сгенерированное число - " + num);
      }
    }, 3000);
  });

  myPromise
    .then((result) => {
      console.log('Обрабатывается resolve', result);
    })
    .catch((error) => {
      console.log('Обрабатывается reject', error);
    })
    .finally(() => {
      console.log('Выполняется всегда');
    });
};

usePromise();