import PropTypes from 'prop-types';

const Header = ({ title }) => {
  return (
    <div className="flex justify-center items-center">
      <h1 className="text-3xl font-bold">{title}</h1>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
