import { useEffect, useState } from "react";
import FavoritesCard from "./FavoritesCard";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [noFound, setNoFound] = useState("");
  const [isShow, setIsShow] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const favoritesItem = JSON.parse(localStorage.getItem("favorites"));
    if (favoritesItem) {
      setFavorites(favoritesItem);
      const total = favoritesItem.reduce(
        (previousValue, currentValue) => previousValue + currentValue.price,
        0
      );
      setTotalPrice(total);
    } else {
      setNoFound("No Data Found");
    }
  }, []);

  const handleRemoveFavorites = () => {
    localStorage.clear();
    setFavorites([]);
    setNoFound("No Data Found");
  };

  return (
    <div>
      {noFound ? (
        <p className="flex justify-center items-center h-[90vh] text-2xl font-semibold">
          {noFound}{" "}
        </p>
      ) : (
        <div>
          {favorites.length > 0 && (
            <div>
              <button
                onClick={handleRemoveFavorites}
                className="bg-blue-200 py-2 px-3 rounded-lg text-center block mx-auto mt-7"
              >
                Delete All Favorites
              </button>
              <h3 className="text-2xl font-semibold text-center mt-4">
                Total Price:${totalPrice}{" "}
              </h3>
            </div>
          )}
          <div className="grid lg:grid-cols-2 gap-5 mt-24">
            {isShow
              ? favorites?.map((phone, idx) => (
                  <FavoritesCard key={idx} phone={phone}></FavoritesCard>
                ))
              : favorites
                  ?.slice(0, 2)
                  .map((phone, idx) => (
                    <FavoritesCard key={idx} phone={phone}></FavoritesCard>
                  ))}
          </div>
          {favorites.length > 2 && (
            <button
              onClick={() => setIsShow(!isShow)}
              className="bg-blue-200 py-2 px-3 rounded-lg text-center block mx-auto mt-4"
            >
              {isShow ? "See less" : "See More"}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Favorites;
