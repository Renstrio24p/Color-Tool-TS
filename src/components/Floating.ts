import './Floating.css'
import { TSImg } from './Images';

export default function Floating(DOM: HTMLDivElement) {

  DOM.innerHTML = (`
    <div class='float'>
       <h2>Color Hex Tool</h2>
       <div class='logo'>
            <img src=${TSImg.image} alt=${TSImg.alt} >
       </div>
    </div>
  `);

}