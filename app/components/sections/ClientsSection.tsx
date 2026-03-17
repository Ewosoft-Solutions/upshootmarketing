import Image from 'next/image';
import { cn } from '@/lib/utils';

const clientLogos = [
  {
    id: 'chiropracticplus',
    name: 'ChiropracticPlus',
    src: '/assets/logos/clients/chiropracticplus.logo.svg',
  },
  { id: 'eems', name: 'EEMS', src: '/assets/logos/clients/eems.logo.svg' },
  {
    id: 'expressfunded',
    name: 'ExpressFunded',
    src: '/assets/logos/clients/expressfunded.logo.svg',
  },
  {
    id: 'hivebly',
    name: 'Hivebly',
    src: '/assets/logos/clients/hivebly.logo.svg',
  },
  {
    id: 'onemart',
    name: 'OneMart',
    src: '/assets/logos/clients/onemart.logo.svg',
  },
  {
    id: 'sandersonyatching',
    name: 'Sanderson Yatching',
    src: '/assets/logos/clients/sandersonyatching.logo.svg',
  },
];

const SEPARATOR_SRC = '/assets/logos/clients/separator.logo.svg';

/**
 * Build a flat array of ticker items: [logo, sep, logo, sep, ..., logo, sep]
 * Trailing separator ensures seamless spacing when the strip is duplicated.
 */
const tickerItems = clientLogos.flatMap((client) => [
  { type: 'logo' as const, id: client.id, name: client.name, src: client.src },
  {
    type: 'separator' as const,
    id: `${client.id}-sep`,
    name: '',
    src: SEPARATOR_SRC,
  },
]);

function TickerStrip({ copyIndex }: Readonly<{ copyIndex: number }>) {
  return (
    <>
      {tickerItems.map((item) =>
        item.type === 'logo' ? (
          <Image
            key={`${copyIndex}-${item.id}`}
            src={item.src}
            alt={item.name}
            width={0}
            height={72}
            className={cn('h-12 w-auto shrink-0 mr-6 md:mr-12 md:h-[72px]')}
            style={{ width: 'auto' }}
          />
        ) : (
          <Image
            key={`${copyIndex}-${item.id}`}
            src={item.src}
            alt=''
            width={36}
            height={36}
            className={cn('h-6 w-6 shrink-0 mr-6 md:mr-12 md:h-9 md:w-9')}
          />
        ),
      )}
    </>
  );
}

export function ClientsSection() {
  return (
    <section id='clients' className={cn('relative py-8 md:py-10 mt-10 md:mt-16 overflow-hidden')}>
      <div className={cn('relative')}>
        {/* Fade edges */}
        <div className={cn('pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-linear-to-r from-background to-transparent')} />
        <div className={cn('pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-linear-to-l from-background to-transparent')} />

        <div
          className={cn('flex w-max items-center')}
          style={{ animation: 'marquee 30s linear infinite' }}
        >
          <TickerStrip copyIndex={0} />
          <TickerStrip copyIndex={1} />
        </div>
      </div>
    </section>
  );
}

export default ClientsSection;
