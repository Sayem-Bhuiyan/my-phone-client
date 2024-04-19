import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Link style={{
                marginRight: '20px'
            }} to="/">Home</Link>
            <Link to="/phones">Phones</Link>
        </div>
    );
};

export default Header;