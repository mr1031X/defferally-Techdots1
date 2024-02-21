import { roboto } from '@/app/ui/fonts';
import Image from 'next/image';

export default function DeferAllyLogo() {
  return (
    <div
      className={`${roboto.className} flex flex-row items-center leading-none text-white`}
    >
      <Image
        priority={true}
        placeholder='empty'
        src="/white-logo.png"
        alt="DeferAlly Logo"
        width={150}
        height={98}
        className="ml-6"
      />
    </div>
  );
}
