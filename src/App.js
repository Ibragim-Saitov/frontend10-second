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

}
