import './Color.css'
import { NumberBoolean, ObjectNull, RGB } from './types';

export default function ColorApp(DOM: HTMLDivElement) {

    DOM.innerHTML = (`
            <div class='container'>
                <h1 class='titler'>ColorApp</h1>
                <p>Lighten / Darken</p>
                <label for="hex">Color (Hex)</label>
                <input type="text" name="hex" id="hexInput" 
                    placeholder="#000000" value="#c6d5ac"/>
                <div class="toggle">
                    <p id="lightenText" 
                        class="toggle-text">Lighten</p>
                    <div id="toggleBtn" class="toggle-btn">
                        <div class="inner-circle"></div>
                    </div>
                    <p id="darkenText" 
                        class="toggle-text unselected">Darken</p>
                </div>
                <label for="slider" id="sliderText">0%</label>
                <input type="range" min="0" max="100" value="0"
                    class="slider" id="slider" name="slider" />
                <p>Input Color</p>
                <div id="inputColor" class="box"></div>
                <p id='alteredColorText'>Altered Color</p>
                <div id="alteredColor" class="box"></div>
            </div>
        `)

    const hexInput = document.getElementById('hexInput') as HTMLInputElement | null;
    const inputColor = document.getElementById('inputColor') as HTMLDivElement | null;
    const alteredColor = document.getElementById('alteredColor') as HTMLDivElement | null;
    const alteredColorText = document.getElementById('alteredColorText') as HTMLParagraphElement | null;
    const sliderText = document.getElementById('sliderText') as HTMLLabelElement | null;
    const slider = document.getElementById('slider') as HTMLInputElement | null;
    const lightenText = document.getElementById('lightenText') as HTMLParagraphElement | null;
    const darkenText = document.getElementById('darkenText') as HTMLParagraphElement | null;
    const toggleBtn = document.getElementById('toggleBtn') as HTMLDivElement | null;

    toggleBtn?.addEventListener('click', () => {
        if(toggleBtn.classList.contains('toggled')){
            toggleBtn.classList.remove('toggled');
            lightenText!.classList.remove('unselected');
            darkenText!.classList.add('unselected');
          } else {
            toggleBtn.classList.add('toggled');
            lightenText!.classList.add('unselected');
            darkenText!.classList.remove('unselected');
          } 
          resetPercentage()
    })

    hexInput?.addEventListener('keyup', (): void => {
        const hex = hexInput.value;
        if (!hexVerifier(hex)) return;
        const strippedHex = hex.replace('#', '');

        inputColor!.style.backgroundColor = "#" + strippedHex;
        resetPercentage()
    })

    const hexVerifier = (hex: string): NumberBoolean => {
        if (!hex) {
            hexInput!.style.backgroundColor = 'red'
            return false;
        }
        hexInput!.style.backgroundColor = 'white'

        const strippedHex = hex.replace('#', '')
        return strippedHex.length === 3 || strippedHex.length === 6;
    }

    const convertHexToRGB = (hex: string): ObjectNull => {
        if (!hexVerifier(hex)) return null;

        let strippedHex = hex.replace('#', '');

        if (strippedHex.length === 3) {
            strippedHex = strippedHex[0] + strippedHex[0]
                + strippedHex[1] + strippedHex[1]
                + strippedHex[2] + strippedHex[2];
        }

        const r = parseInt(strippedHex.substring(0, 2), 16);
        const g = parseInt(strippedHex.substring(2, 4), 16);
        const b = parseInt(strippedHex.substring(4, 6), 16);

        if (isNaN(r) || isNaN(g) || isNaN(b)) {
            return null;
        }

        return { r, g, b }
    }

    const convertRGBToHex = (r: number, g: number, b: number): string => {
        const firstPair = ("0" + r.toString(16)).slice(-2);
        const secondPair = ("0" + g.toString(16)).slice(-2);
        const thirdPair = ("0" + b.toString(16)).slice(-2);

        const hex = "#" + firstPair + secondPair + thirdPair;
        return hex;
    }

    const alterColorByPercentage = (hex: string, percentage: string): string | null => {
        const { r, g, b } = convertHexToRGB(hex) as RGB;

        const amount = Math.floor((parseInt(percentage) / 100) * 255);

        const newR = increaseWithin0To255(r, amount);
        const newG = increaseWithin0To255(g, amount)
        const newB = increaseWithin0To255(b, amount)

        return convertRGBToHex(newR, newG, newB);
    };

    const resetPercentage = () =>{
        slider!.value = (0).toString();
        sliderText!.innerText=`0%`;
        alteredColor!.style.backgroundColor = hexInput!.value;
        alteredColorText!.innerText = `Altered Color ${hexInput?.value}`; 
    }

    const increaseWithin0To255 = (hex: number, amount: number): number => {
        return Math.min(255, Math.max(0, hex + amount));
    }

    slider?.addEventListener('input', (): void | null => {
        if (!hexVerifier(hexInput!.value)) return null;
        sliderText!.textContent = `${slider.value}%`;
        const valueAddition  = 
        toggleBtn?.classList.contains('toggled') ? -slider.value : slider.value;
        const alteredHex = alterColorByPercentage(hexInput!.value, valueAddition.toString());
        alteredColor!.style.backgroundColor = alteredHex!;
        alteredColorText!.innerText = `Altered Color ${alteredHex}`;
    })

}