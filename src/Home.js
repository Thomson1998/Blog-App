import { Base } from "./Base";
import Carousel from 'react-bootstrap/Carousel';

export function Home(){
    return(
        <Base title={"Dashboard"}>


        <div className="home">
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://th.bing.com/th/id/R.5dfdf7d98721d4d81274caf6d3e2f738?rik=MS%2fIT7kjpozQhg&riu=http%3a%2f%2fwww.wallpaperstop.com%2fwallpapers%2fsports-wallpapers%2ffootball-wallpaper-2560x1600-1007172.jpg&ehk=IJmpWuxMixnhrjkEEqiivfzpxeJ%2bklCT8TyzPNXKJFM%3d&risl=&pid=ImgRaw&r=0"
          alt="First slide"
        />
        <Carousel.Caption>
          <p>Sport pertains to any form of physical activity or game</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://th.bing.com/th/id/R.17b33d455795f7955f374703ec5db7ec?rik=NxSsDRRowb8cGw&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fngPEfyE.jpg&ehk=H8cSGsfjlgPQaG1%2f3Ozt2CphyeUbP7kRRn7Dc8mef9s%3d&risl=&pid=ImgRaw&r=0"
          alt="Second slide"
        />

        <Carousel.Caption>
          <p>the application of this knowledge for practical ends.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://external-preview.redd.it/H2iZHbsTP-d94eb6r6gdnf550cL5MDmfr0HkCNtpyQ8.jpg?auto=webp&s=117e124004546aa47c15e02999f9c685f4a35c3d"
          alt="Third slide"
        />
             <Carousel.Caption>
          <p>
          Life is short, travel often.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


        </div>

        </Base>
    )
}