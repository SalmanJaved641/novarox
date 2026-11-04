import Link from "next/link";
import Image from "next/image";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      {/* <Image
        src="/logo.jpeg"
        alt="novarox logo"
        width={40}
        height={40}
        className="rounded-lg"
      /> */}
      <span className="text-2xl font-bold text-midnight_text dark:text-white">
        Nova<span className="text-primary">rox</span>
      </span>
    </Link>
  );
};

export default Logo;
