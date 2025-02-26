import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { Container } from './container';

interface Props {
    className?: string;
} 

export const Footer: React.FC<Props> = ({ className }) => {
    return (
        <footer className={cn('bg-gray-900 text-white py-10 mt-28', className)}>
            <Container>
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Логотип и контакты */}
                    <div>
                        <Link href="/">
                            <Image src="/logo.png" alt="logo" width={100} height={100} className="mb-4" />
                        </Link>
                        <p className="text-gray-400">Интернет-магазин автомобильных шин</p>
                    </div>
                    
                    {/* Навигация */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Навигация</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li><Link href="/">Главная</Link></li>
                            <li><Link href="/about">О нас</Link></li>
                            <li><Link href="/products">Товары</Link></li>
                            <li><Link href="/contact">Контакты</Link></li>
                        </ul>
                    </div>
                    
                    {/* Контакты */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Контакты</h3>
                        <p className="text-gray-300">Телефон: <a href="tel:+71234567890" className="text-blue-400 hover:underline">+7 123 456 78 90</a></p>
                        <p className="text-gray-300">Email: <a href="mailto:example@email.com" className="text-blue-400 hover:underline">example@email.com</a></p>
                        <p className="text-gray-300">Адрес: г. Москва, ул. Примерная, 10</p>
                    </div>
                </div>
                
                <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
                    <p>© 2025 Магазин шин. Все права защищены.</p>
                </div>
            </Container>
        </footer>
    );
};
