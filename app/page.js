// import Image from "next/image";

import { CardHoverEffectDemo } from "@/components/elements/hovercard";
import Internship from "@/components/elements/intern";
import { AuroraBackgroundDemo } from "@/components/elements/mainpageheading";
import Button from "@/components/elements/shinebutton";

export default function Home() {
  return (
    <>
      <div className="front">
        <AuroraBackgroundDemo />
        <CardHoverEffectDemo/>
        <Internship/>
        <Button/>
      </div>
    </>
  );
}
