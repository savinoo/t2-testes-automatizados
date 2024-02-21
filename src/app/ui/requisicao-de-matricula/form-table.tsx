
import { Button } from '../button';


export async function FormTable() {
  const disciplinas = [{
    id: 1,
    name: 'Matemática',
    teacher: 'João da Silva',
    email: 'gggg@gmail.com',
    periodo: 4,
  },
  {
    id: 2,
    name: 'Física',
    teacher: 'Maria da Silva',
    email: 'gsfgfed@gmail.com',
    periodo: 4,
  }
  ]

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <form action="">
          <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
            <table className="hidden min-w-full text-gray-900 md:table">
              <thead className="rounded-lg text-left text-sm font-normal">
                <tr>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    Disciplina
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Professor
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Email
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Período
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium text-right">
                    Status
                  </th>
                  <th scope="col" className="relative py-3 pl-6 pr-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {disciplinas?.map((disciplina) => (
                  <tr
                    key={disciplina.id}
                    className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                  >
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                      <div className="flex items-center gap-3">
                        <p>{disciplina.name}</p>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      {disciplina.teacher}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      {(disciplina.email)}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      {(disciplina.periodo)}
                    </td>
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                      <div className="flex justify-end align-center gap-3">
                        <input type="checkbox" />
          
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
          </div>
            <div className='flex justify-center m-10'>
              <Button type="submit">Salvar</Button>
            </div>
        </form>
      </div>
    </div>
  );
}
