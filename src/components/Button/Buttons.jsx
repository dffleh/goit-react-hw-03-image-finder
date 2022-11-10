import { LoadMoreBtn } from './Buttons.stuled';
import PropTypes from 'prop-types';

function Button({ onClick }) {
  return (
    <LoadMoreBtn type="button" onClick={onClick}>
      Load more
    </LoadMoreBtn>
  );
}

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
