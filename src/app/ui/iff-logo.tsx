import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';

export default function IffLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-col items-center leading-none text-white justify-center`}
    >
      <Image 
      src="/logo-iff.jpg"
      width={140}
      height={760}
      alt="logo do IFF" 
        />

    </div>
  );
}
