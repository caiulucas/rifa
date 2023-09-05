'use client';
import domToImage from 'dom-to-image';
import { saveAs } from 'file-saver';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

import TicketImage from '@/assets/ticket-image.svg';
export default function Home() {
  const searchParams = useSearchParams();

  const number = searchParams.get('number');
  const name = searchParams.get('name');
  const phone = searchParams.get('phone');
  const address = searchParams.get('address');

  function downloadTicket() {
    domToImage
      .toBlob(document.getElementById('ticket') as HTMLElement)
      .then((blob) => {
        saveAs(blob, `bilhete-${number}-${name}.png`);
      });
  }

  return (
    <main className="flex flex-col items-center w-full">
      <div className="w-96 bg-white gap-4" id="ticket">
        <Image src={TicketImage} alt="ticket image" width={384} height={384} />
        <div className="flex flex-col p-4 gap-3">
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
        className="bg-orange-500 rounded-full w-96 h-12 font-medium hover:bg-orange-600 mt-4"
      >
        Baixar bilhete
      </button>
    </main>
  );
}
