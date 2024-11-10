

import Link from "next/link";
import Image from "next/image";

  export default function Home() {
    return (
      <div className="homeContainer">
        <div className="imageContainer">
          <Image
            src="/portfolio1.jpg"
            alt="Zakia Baig"
            width={500}
            height={500}
            className="object-center"
          />
        </div>
        <div className="textContainer">
          <h1 className="heading">Hi, I'm Zakia Baig</h1>
          <h2 className="subheading">Frontend Developer</h2>
          <p className="paragraph">
            Passionate about building beautiful and functional websites. I
            specialize in crafting responsive, user-friendly interfaces with the
            latest frontend technologies. Let's create something amazing together!
          </p>
        </div>
      </div>
    );
  }
  