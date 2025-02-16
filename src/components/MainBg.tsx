import Image from "next/image";
import { memo } from "react";

const MainBackground = memo(function MainBackground() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden opacity-30">
      <Image
        src="/BG.jpeg"
        alt="bg"
        fill
        className="object-cover"
        style={{
          objectPosition: "right",
        }}
        priority
      />
    </div>
  );
});

export default MainBackground;
