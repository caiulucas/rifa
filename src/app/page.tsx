'use client';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';

export default function Home() {
  const router = useRouter();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    router.push(
      `/ticket/?number=${formData.get('number')}&name=${formData.get(
        'name'
      )}&phone=${formData.get('phone')}&address=${formData.get('address')}`
    );
  }

  return (
    <main className="mx-auto my-8">
      <form className="flex flex-col items-center gap-2" onSubmit={onSubmit}>
        <label className="w-80">
          N°:
          <input
            type="number"
            name="number"
            id="number"
            placeholder="Digite o número da rifa"
            className="h-12 w-full placeholder:text-slate-500 rounded-md mt-1 p-2"
          />
        </label>
        <label className="w-80">
          Nome:
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Digite o nome do(a) comprador(a)"
            className="h-12 w-full placeholder:text-slate-500 rounded-md mt-1 p-2"
          />
        </label>
        <label className="w-80">
          Celular:
          <input
            type="number"
            name="phone"
            id="phone"
            placeholder="Digite o número de celular do(a) comprador(a)"
            className="h-12 w-full placeholder:text-slate-500 rounded-md mt-1 p-2"
          />
        </label>
        <label className="w-80">
          Endereço:
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Digite o endereço do(a) comprador(a)"
            className="h-12 w-full placeholder:text-slate-500 rounded-md mt-1 p-2"
          />
        </label>

        <button
          type="submit"
          className="bg-orange-500 rounded-full w-80 h-12 font-medium hover:bg-orange-600"
        >
          Gerar bilhete
        </button>
      </form>
    </main>
  );
}
