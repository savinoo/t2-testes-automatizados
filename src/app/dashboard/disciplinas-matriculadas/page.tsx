import { disciplinas } from '@/app/lib/placeholder-data';
import {Table} from '@/app/ui/disciplinas-matriculadas/table';
import { lusitana } from '@/app/ui/fonts';
export {disciplinas} from '@/app/lib/placeholder-data';
 

export default async function Page() {

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Disciplinas Matriculadas</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        
      </div>
     
        <Table disciplinas={disciplinas} status="Aprovado"/>
     
      <div className="mt-5 flex w-full justify-center">
        
      </div>
    </div>
  );
} 