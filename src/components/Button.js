import Header from "./Header";
import PropTypes from 'prop-types';

const Button = ({color, text, icon, url, target, event}) => {
    return (
           <div >
        <a  href={url} target={target} className={`waves-effect waves-light btn  floating ${color}`} id="plus" onClick={event}>{text}<i className="material-icons right" >{icon}</i></a>
        </div>
    )
}

Button.defautProps = {

}

Button.propTypes = {
    text: PropTypes.string.isRequired
}

export default Button
