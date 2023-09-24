import PhoneCart from "./PhoneCart";
import PropTypes from "prop-types";

const Phones = ({ phones }) => {
  return (
    <div>
      <h3 className="text-2xl font-bold text-center my-10">
        Our Phones Collections
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {phones?.map((phone, idx) => (
          <PhoneCart key={idx} phone={phone}></PhoneCart>
        ))}
      </div>
    </div>
  );
};
Phones.propTypes = {
  phones: PropTypes.array.isRequired,
};

export default Phones;
