import categories from "../data/categories";
import Directory from "../components/Directory";

function Home() {
  return <Directory categories={categories} />;
}

export default Home;
