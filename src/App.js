import { ProductListing } from "./pages/ProductListing/ProductListing";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div className="flex flex-col bg-slate-200 ">
      <Header />
      <ProductListing />
    </div>
  );
}

export default App;
