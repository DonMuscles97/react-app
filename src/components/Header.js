import PropTypes from 'prop-types';
import M from 'materialize-css';
import  Button from './Button';

const Header = (props) => {

    const click = () => {
      alert('this works');
    }
    
    return (
      <div className="row">
        <div className="col m6">
            <h4>{props.title}</h4>
        </div>
        <div className="col m6">
          <Button text="button" icon="add" color="" url="#" event={click}/>
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
