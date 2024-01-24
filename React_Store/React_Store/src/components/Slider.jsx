import ImageSlider from "./ImageSlider";
import Foto_1 from '../assets/JB_1.png'
import Foto_2 from '../assets/JB_2.png'
import Foto_3 from '../assets/JB_3.webp'

const Slider = () => {
    const slides = [
        { url: Foto_1, title: "beach" },
        { url: Foto_2, title: "boat" },
        { url: Foto_3, title: "forest" },
      ];
      const containerStyles = {
        width: "500px",
        height: "480px",
        margin: "0 auto",
      };
    return (
        <div>
            <h1>Hello monsterlessons</h1>
            <div style={containerStyles}>
                <ImageSlider slides={slides} />
            </div>
        </div>
    )
}
export default Slider