import PropTypes from 'prop-types';
import M from 'materialize-css';
import  Button from './Button';

const Header = (props) => {
    
    return (
      <div>
        <div className="col m6">
            <h4 className="left-align">{props.title}</h4>
        </div>
        <div className="col m6">
          <Button text="button" icon="add" color="" url="#"/>
        </div>
      </div>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string
}
export default Header
