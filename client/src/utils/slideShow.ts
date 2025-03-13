
export function Slider(element: any, item: any[]){
    const moveSlider = (direction: "next" | "prev") => {
        if (direction === "next") {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        } else {
          setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
          );
        }
      };
}
    const [currentIndex, setCurrentIndex] = useState(0);
  
    