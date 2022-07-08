export const Header = () => {
  return (
    <div className="h-16 bg-blue-600">
      <div className="w-[80%] h-full mx-auto flex items-center justify-center gap-24">
        <div className="font-bold text-xl">Flipkart</div>
        <input
          type="text"
          placeholder="Search for products, brands and more"
          className="flex-grow h-8 p-1"
        />
        <button className="font-semibold">Login</button>
        <button className="font-semibold">Cart</button>
      </div>
    </div>
  );
};
