import { Container } from '@/components/shared/container';
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contacts() {
    return (
        <Container className="py-10 px-5 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-6">Свяжитесь с нами</h1>
            <p className="text-lg text-gray-700 text-center mb-10">
                У вас есть вопросы по выбору шин или оформлению заказа? Мы всегда рады помочь!
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Наши контакты</h2>
                    <p className="flex items-center text-gray-800 mb-2"><Mail className="mr-2" /> Email: support@shinypro.ru</p>
                    <p className="flex items-center text-gray-800 mb-2"><Phone className="mr-2" /> Телефон: +7 (495) 123-45-67</p>
                    <p className="flex items-center text-gray-800 mb-2"><MapPin className="mr-2" /> Адрес: Москва, ул. Примерная, 10</p>
                </div>
                
                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Режим работы</h2>
                    <p className="text-gray-800">Понедельник - Пятница: 09:00 - 20:00</p>
                    <p className="text-gray-800">Суббота: 10:00 - 18:00</p>
                    <p className="text-gray-800">Воскресенье: выходной</p>
                </div>
            </div>
            
            <div className="mt-10">
                <h2 className="text-xl font-semibold text-center mb-4">Напишите нам</h2>
                <form className="bg-gray-100 p-6 rounded-lg shadow-md max-w-lg mx-auto">
                    <label className="block mb-2">Ваше имя</label>
                    <input type="text" className="w-full p-2 border rounded mb-4" placeholder="Введите ваше имя" />
                    
                    <label className="block mb-2">Ваш email</label>
                    <input type="email" className="w-full p-2 border rounded mb-4" placeholder="Введите ваш email" />
                    
                    <label className="block mb-2">Сообщение</label>
                    <textarea className="w-full p-2 border rounded mb-4" placeholder="Введите ваше сообщение"></textarea>
                    
                    <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition">
                        Отправить
                    </button>
                </form>
            </div>
        </Container>
    );
}
