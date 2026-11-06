import Link from "next/link";
import Image from "next/image";

const Logo: React.FC = () => {
  return (
    <Link href="/" aria-label="NovaroX home" className="flex items-center shrink-0">
      <Image
        src="/logo-novarox.png"
        alt="NovaroX"
        width={1544}
        height={606}
        priority
        className="h-[44px] sm:h-[55px] w-auto max-w-[175px] object-contain"
      />
    </Link>
  );
};

export default Logo;
