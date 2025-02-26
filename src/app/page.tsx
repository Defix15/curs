import { Container } from "@/components/shared/container";
import { Products } from "@/components/shared/products";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Баннер с фото */}
      <div
        className="w-full h-60 bg-cover bg-center flex items-center justify-center text-white text-3xl font-bold"
        style={{ backgroundImage: "url('/banner.webp')" }} // Укажи свою картинку
      >
        ЛУЧШИЕ ШИНЫ ДЛЯ ВАШЕГО АВТОМОБИЛЯ 🚗
      </div>

      <Container className="flex flex-col items-center justify-center mt-10">
        {/* Рекламные блоки */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-10">
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <h3 className="text-lg font-bold">🔥 СКИДКИ ДО 50%</h3>
            <p className="text-gray-600 mt-2">На зимние и летние шины</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <h3 className="text-lg font-bold">🚚 БЕСПЛАТНАЯ ДОСТАВКА</h3>
            <p className="text-gray-600 mt-2">При заказе от 10 000 ₽</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <h3 className="text-lg font-bold">✅ ГАРАНТИЯ КАЧЕСТВА</h3>
            <p className="text-gray-600 mt-2">Только сертифицированные шины</p>
          </div>
        </div>

        {/* Популярные категории */}
        <h2 className="text-2xl font-bold mb-6">Популярные категории</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mb-10">
          <div className="bg-white p-4 shadow-md rounded-lg text-center">🚗 Летние шины</div>
          <div className="bg-white p-4 shadow-md rounded-lg text-center">❄️ Зимние шины</div>
          <div className="bg-white p-4 shadow-md rounded-lg text-center">🌦 Всесезонные шины</div>
          <div className="bg-white p-4 shadow-md rounded-lg text-center">🚛 Грузовые шины</div>
        </div>

        {/* Список товаров */}
        <Products className="mt-10" />
      </Container>
    </div>
  );
}