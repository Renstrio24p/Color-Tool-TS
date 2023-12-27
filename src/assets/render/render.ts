import Floating from "../../components/Floating";
import ColorApp from "../../pages/ColorApp"

export default function Render(){

  const TSDOM = document.querySelector('#TS') as HTMLDivElement | null
  const FloatComponent = document.querySelector('#float') as HTMLDivElement | null;
  {TSDOM && ColorApp(TSDOM)}
  {FloatComponent && Floating(FloatComponent)}

}