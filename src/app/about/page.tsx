import { Container } from '@/components/shared/container';
import React from 'react';

export default function About() {
    return (
        <Container className="block p-6 bg-gray-100 text-gray-800">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">О нас</h1>
                <p className="text-lg mb-4">
                    Добро пожаловать в наш интернет-магазин автомобильных шин! Мы — команда энтузиастов,
                    которая делает все возможное, чтобы ваш автомобиль всегда оставался в безопасности,
                    а поездки были комфортными и надежными. 
                </p>
                <p className="text-lg mb-4">
                    Наш магазин предлагает широкий ассортимент шин от ведущих мировых производителей.
                    Мы работаем только с проверенными брендами, чтобы гарантировать качество, долговечность
                    и высокий уровень сцепления с дорогой. Независимо от сезона и типа автомобиля,
                    у нас найдутся шины, которые подойдут именно вам.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                <div className="p-6 bg-white shadow-lg rounded-xl">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">Почему выбирают нас?</h2>
                    <p className="text-gray-700">
                        ✓ Большой ассортимент
                        <br/>✓ Только проверенные бренды
                        <br/>✓ Гарантия качества
                        <br/>✓ Консультации от экспертов
                    </p>
                </div>
                <div className="p-6 bg-white shadow-lg rounded-xl">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">Наши преимущества</h2>
                    <p className="text-gray-700">
                        ✓ Доставка по всей стране
                        <br/>✓ Гибкая система скидок
                        <br/>✓ Оперативная обработка заказов
                        <br/>✓ Удобные способы оплаты
                    </p>
                </div>
                <div className="p-6 bg-white shadow-lg rounded-xl">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">Наша миссия</h2>
                    <p className="text-gray-700">
                        Мы стремимся сделать покупку шин максимально удобной и доступной.
                        Мы заботимся о вашей безопасности на дорогах и хотим, чтобы каждая поездка
                        приносила вам только удовольствие!
                    </p>
                </div>
            </div>

            <div className="mt-12 text-center">
                <h2 className="text-3xl font-bold text-gray-900">Свяжитесь с нами</h2>
                <p className="text-lg text-gray-700 mt-2">
                    У вас остались вопросы? Наши специалисты всегда готовы помочь!
                </p>
                <a href="/contact" className="mt-4 inline-block bg-blue-600 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all">
                    Связаться с нами
                </a>
            </div>
        </Container>
    );
}
