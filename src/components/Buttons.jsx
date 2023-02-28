
import images from '../images/refresh.png';
import Logo from './Logo';

function Buttons({counter, setCounter}){
   function plus(){
      setCounter(counter + 1)
   }

   function minus(){
   counter > 1 ? setCounter(counter - 1) : setCounter(0);
   }
   
   
   function reset() {
      setCounter(0)
   }
   console.log(0);
   return (
      <div className='main__buttons'>
      <button className='main__btn' onClick={plus}>+</button>
      <button className='main__btn' onClick={reset}><img src={images} alt="Сброс" /></button>
      <button className='main__btn' onClick={minus}>-</button>     
      </div>
   )
}
export default Buttons;

