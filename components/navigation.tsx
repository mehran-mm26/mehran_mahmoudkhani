import Link from 'next/link';
import { navigationItems } from '@/constants';

export default function Navigation() {
  return (
    <header className='sticky border-b inset-0 bg-white z-[500]'>
      <div className='flex container py-5 justify-between'>
        <p>{'Mehran Mahmoudkhani'}</p>
        <nav role='navigation' className='hidden sm:flex sm:gap-5'>
          <ul className='flex gap-6'>
            {navigationItems.map(({ href, title }) => {
              return (
                <li key={href}>
                  <Link href={`#${href}`}>{title}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
