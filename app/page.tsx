import Image from 'next/image';

export default function Home() {
  const navigationItems: { href: string; title: string }[] = [
    {
      href: '/about',
      title: 'About',
    },
    {
      href: '/work',
      title: 'Work',
    },
    {
      href: '/contact',
      title: 'Contact',
    },
  ];
  return (
    <main className=''>
      {/* --------------- Navbar --------------- */}
      <header className='sticky border-b'>
        <div className='flex container mx-auto my-5 justify-between'>
          <p>{'Mehran Mahmoudkhani'}</p>
          <nav role='navigation' className='flex gap-5'>
            <ul className='flex gap-6'>
              {navigationItems.map(({ href, title }) => {
                return (
                  <li key={href}>
                    <a href={href}>{title}</a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>

    </main>
  );
}
