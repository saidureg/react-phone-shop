import PropTypes from "prop-types";
import Rating from "react-rating";
import { Link } from "react-router-dom";
const PhoneCart = ({ phone }) => {
  const { id, image, phone_name, brand_name, price, rating } = phone || {};
  return (
    <div className="mt-5">
      <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img src={image} className="h-full w-full object-cover" />
        </div>
        <div className="p-6 space-y-2">
          <p className="block font-sans text-base font-medium leading-relaxed rounded-md bg-green-300 text-blue-900 antialiased">
            {brand_name}
          </p>
          <div className="mb-2 flex items-center justify-between">
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-900 antialiased">
              {phone_name}
            </p>
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-900 antialiased">
              ${price}
            </p>
          </div>
          <Rating initialRating={rating} readonly />
        </div>
        <div className="p-6 pt-0">
          <Link to={`/phones/${id}`}>
            <button
              className="block w-full select-none rounded-lg bg-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              See Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
PhoneCart.propTypes = {
  phone: PropTypes.object,
};

export default PhoneCart;
