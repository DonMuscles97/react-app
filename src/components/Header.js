import PropTypes from 'prop-types';
import M from 'materialize-css';

const Header = (props) => {
    
    return (
      <div>
        <h4 className="left-align">{props.title}</h4>
      </div>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string,
    name: PropTypes.string
}
export default Header
