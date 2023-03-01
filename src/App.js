import "./css/App.css";

function App() {
   //1 Задание

   const array = [22, 0, -45, 1001, 8, -6, -0.1, 101, 2.5, -55555];

   const positive = array.filter((item) => {
     return item >= 0;
   });
   console.log(positive);

   //2 Задание 

   const messages = [
      {message: 'hello', error: true},  
      {message: 'javascript', error: false},  
      {message: 'expovisiov', error: true},  
      {message: 'react', error: true},  
      {message: 'angular', error: false}, 
      {message: 'es6', error: false}, 
   ];

   const messagesFilter = messages.filter((item) => {
      return item.error === false;

      console.log(messagesFilter);
   })
   
   //3 Задание

  const words = ["экспо", "js", "react", "css", "angular", "vue", "html"];

  const wordsMap = words.map((item) => {
    return item.length < 5 ? (item = "*") : item;
  });

  console.log(wordsMap);

  //4 Задание
  const sendMessage = (message) => {
    /*
     * тут какой-то большой код для отправки сообщения
     */
  };

  const half = (number) => {
    return number / 2;
  };

  const showConsole = () => {
    console.log("Экспо");
  };

  const concatWords = (first, second) => {
    return first + second;
  };

  //5 Задание
  function justText() {
    "expo";
  }

  function logging(text) {
    console.log(text);
  }

  function add(x, y) {
    const z = 3;

    return z * x * y;
  }

  function onlyPositive(number) {
    if (number < 0) {
      return false;
    }

    return true;
  }
  return (
    <div className='container'>
      <h1 className='title'>Hello Works</h1>
    </div>
  );
}

export default App;

}
