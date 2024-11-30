import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SerchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handelSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handelSubmit}>
      <input
        className="w-28 rounded-full
        bg-yellow-100 px-4 py-2 
        text-sm transition-all duration-300
        placeholder:text-stone-400 focus:outline-none
        
        focus:ring-2 focus:ring-yellow-500 
        focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
        placeholder="Serch of order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SerchOrder;
