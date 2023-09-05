'use client';
import domToImage from 'dom-to-image';
import { saveAs } from 'file-saver';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

import TicketImage from '@/assets/ticket-image.svg';

export default function Home() {
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();

  const number = searchParams.get('number');
  const name = searchParams.get('name');
  const phone = searchParams.get('phone');
  const address = searchParams.get('address');

  async function downloadTicket() {
    setLoading(true);
    try {
      const blob = await domToImage.toBlob(
        document.getElementById('ticket') as HTMLElement
      );
      saveAs(blob, `bilhete-${number}-${name}.png`);
    } catch {
      alert('Erro ao baixar bilhete, tente novamente mais tarde');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex flex-col items-center w-full">
      <div className="w-200 bg-white gap-4" id="ticket">
        <Image src={TicketImage} alt="ticket image" width={720} height={720} />
        <div className="flex flex-col p-4 gap-3 text-2xl">
          <div className="flex gap-2">
            <span className="font-bold text-yellow-900">N°: </span>
            <p>{number}</p>
          </div>
          <div className="flex gap-2">
            <span className="font-bold text-yellow-900">Nome: </span>
            <p>{name}</p>
          </div>
          <div className="flex gap-2">
            <span className="font-bold text-yellow-900">Celular: </span>
            <p>{phone}</p>
          </div>
          <div className="flex gap-2">
            <span className="font-bold text-yellow-900">Endereço: </span>
            <p>{address}</p>
          </div>
        </div>
      </div>

      <button
        onClick={downloadTicket}
        className="bg-orange-500 rounded-full w-200 h-12 font-medium hover:bg-orange-600 mt-4"
      >
        {loading ? 'Aguarde...' : 'Baixar bilhete'}
      </button>
    </main>
  );
}
