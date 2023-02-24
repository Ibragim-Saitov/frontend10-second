
import images from '../images/refresh.png';
import Logo from './Logo';

const buttons = [
   {
      sign: '+',
      id: 1
   },
   {
      sign: <img src={images} alt="Сброс" />,
      id: 2
   },
   {
      sign: '-',
      id: 3
   },
]

function Buttons(){
   return (
      <div className='main__buttons'>
      {
         buttons.map((buttons) => {
         return(
            <button className='main__btn' key={buttons.id}>
               <span>{buttons.sign}</span>
            </button>
         )
      })
   }
   </div>
   )
}

export default Buttons;