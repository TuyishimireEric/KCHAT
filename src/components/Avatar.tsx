import Image from "next/image";

interface AvatarProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
}

export const Avatar = ({ src, alt, size = "md" }: AvatarProps) => {
  return (
    <div
      className={`relative ${
        size == "md" ? "w-20 h-20" : "w-10 h-10"
      } rounded-full bg-gray-400 overflow-hidden mb-2`}
    >
      <Image src={src} alt={alt} className="w-full h-full object-cover" fill />
    </div>
  );
};
