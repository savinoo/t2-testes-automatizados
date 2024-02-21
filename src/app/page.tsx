import IffLogo from '@/app/ui/iff-logo';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts'; 
import Image from 'next/image'

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-center rounded-lg bg-blue-500 p-4 md:h-52">
        { <IffLogo /> }
        <div className='flex flex-col justify-end w-full'>
          <p className={`${lusitana.className} text-xl text-white md:text-7xl md:leading-normal text-center`}>
            <strong>Sistema Acadêmico.</strong> 
          </p>
        </div>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <div
  className="{h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent}"
/>
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Bem-vindo ao Sistema Acadêmico.</strong> Este é o seu portal para gerenciar todas as suas necessidades acadêmicas.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Entrar como Aluno</span> 
          </Link>
          <Link
            href="/login-professor"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Entrar como Professor</span> 
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
        </div>
      </div>
    </main>
  )
}