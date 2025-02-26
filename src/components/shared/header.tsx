'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { Container } from './container';
import { usePathname } from 'next/navigation';
import { ModalAutch } from './modalAutch';
import { signOut, useSession } from 'next-auth/react';
import { ImExit } from 'react-icons/im';
import { GrBasket } from 'react-icons/gr';
import { RiUserSettingsFill } from 'react-icons/ri';
import { Loader } from './loader';
import { SiBurgerking } from 'react-icons/si';

interface Props {
    className?: string;
} 

const nav = [
    { title: 'Главная', href: '/' },
    { title: 'О нас', href: '/about' },
    { title: 'Товары', href: '/products' },
    { title: 'Контакты', href: '/contact' },
];

export const Header: React.FC<Props> = ({ className }) => {
    const session = useSession();
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [burger, setBurger] = useState(false);

    const handleExit = () => {
        if (window.confirm('Вы действительно хотите выйти?')) {
            signOut({ callbackUrl: '/' });
        }
    };

    const handleClickBurger = () => {
        setBurger(!burger);
        document.body.style.overflow = burger ? 'auto' : 'hidden';
    };

    if (session.status === 'loading') return <Loader />;

    return (
        <header className={cn('py-4 px-5 border-b-2 bg-white shadow-md', className)}>
            <Container className='flex justify-between items-center'>
                <Link href='/'>
                    <Image src='/logo.png' alt='logo' width={140} height={140} className='transition-transform duration-500 ease-in-out hover:rotate-6' />
                </Link>

                <nav className='hidden md:flex gap-8'>
                    {nav.map((item) => (
                        <Link
                            key={item.title}
                            href={item.href}
                            className={cn('text-lg font-medium transition-colors duration-300 hover:text-blue-600', pathname === item.href && 'text-blue-600')}
                        >
                            {item.title}
                        </Link>
                    ))}
                </nav>

                <div className='flex items-center gap-4'>
                    {!session.data ? (
                        <Button className='bg-blue-600 hover:bg-blue-500' onClick={() => setOpen(true)}>
                            Вход
                        </Button>
                    ) : (
                        <div className='flex items-center gap-3'>
                            {session.data.user.role === 'admin' && (
                                <Link href='/admin' className='bg-yellow-500 p-2 rounded hover:bg-yellow-400'>
                                    <RiUserSettingsFill size={22} className='text-black' />
                                </Link>
                            )}
                            <Link href='/basket' className='bg-gray-200 p-2 rounded hover:bg-gray-300'>
                                <GrBasket size={22} />
                            </Link>
                            <Button className='bg-red-600 hover:bg-red-500' onClick={handleExit}>
                                <ImExit />
                            </Button>
                        </div>
                    )}

                    <Button onClick={handleClickBurger} className='md:hidden p-2 bg-gray-100 rounded hover:bg-gray-200'>
                        <SiBurgerking size={22} />
                    </Button>
                </div>
            </Container>

            {burger && (
                <div className='fixed inset-0 bg-white z-50 flex flex-col items-center justify-center gap-6 shadow-lg'>
                    <nav>
                        {nav.map((item) => (
                            <Link
                                key={item.title}
                                href={item.href}
                                className='text-xl font-medium text-black transition-colors duration-300 hover:text-blue-600'
                                onClick={() => setBurger(false)}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}

            <ModalAutch open={open} onClose={() => setOpen(false)} setOpen={setOpen} />
        </header>
    );
};
