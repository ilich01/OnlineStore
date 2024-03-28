import Link from "next/link";
import Header from "../components/Header/Headr";
const Index = () => {
  return (
    <div>
      <Header />
      <h1>Главная страница</h1>
      <Link href="/catalog">Products</Link>
    </div>
  );
};
export default Index;
