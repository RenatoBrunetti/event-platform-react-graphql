import { ArrowRight } from 'phosphor-react';

export function Novideo() {
  return (
    <div className='flex-1'>
      <div className='bg-black'>
        <div className='min-h-screen p-6'>
          <div className='bg-green-500 px-4 py-6 flex justify-between items-center border-b-4 border-white'>
            <h1 className='text-2xl text-white font-bold'>
              Selecione a aula desejada
            </h1>
            <ArrowRight className='text-white' size={32} />
          </div>
        </div>
      </div>
    </div>
  );
}
