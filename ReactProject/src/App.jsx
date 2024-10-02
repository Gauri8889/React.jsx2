import Carousel from 'react-bootstrap/Carousel';



import img from "./imagess/img.jpg";
import img1 from "./imagess/img1.jpg";
import img2 from "./imagess/img2.jpg";

const App=()=>{
  return(
    <>
   
    <Carousel>
      <Carousel.Item>

      <img src={img} width={"100%"}/>

        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img1} width={"100%"}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img2} width={"100%"}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    </>
  )
}
export default App;