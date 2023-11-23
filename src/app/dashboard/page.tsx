import { ImportIcon } from '@/components';
import { SyncFoundsButton } from '@/components/sync-founds-button';
import { founds } from '@/services/founds';

export default function Home() {



  return (
    <main className="h-screen bg-white dark:bg-zinc-950 flex flex-col">
      

      

      <div className="flex flex-auto">
        <aside className="bg-black/10 w-64 border-r border-stroke ">
          teste
        </aside>

        <main className="flex-auto">
          <header className="border-b border-stroke flex justify-between bg-black/10">
          <div className="flex justify-end px-4 py-2 space-x-2 flex-auto">
            <button title="Importar Fundos">
              <ImportIcon className='h-5 w-5 stroke-1 stroke-primary-600' />
            </button>
          </div>
        </header>
        </main>
      </div>



    </main>
  )
}
