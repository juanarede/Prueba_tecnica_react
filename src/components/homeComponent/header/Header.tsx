 import HeaderCarousel from './HeaderCarousel';

export default function Header() {
  return (
  <header className="bg-no-repeat bg-center bg-cover relative">
  <div className="block sm:hidden">
  <HeaderCarousel /> 
  </div>
  <div className="hidden sm:block">
    <img
      style={{ maxHeight: "37rem", width: "100%", objectFit: "cover" }}
      src="https://agora2030.org/wp-content/uploads/2024/01/Banner-sitio-web-1-jpg.webp"
      alt="Header Banner"
    />
  </div>
</header>

  );
}
