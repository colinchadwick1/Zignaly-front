import logo from '../images/logo2.png';
import { Link } from 'react-router-dom';

function Head() {
  return <>
  <Link to={`/`}>
            <div className="head"><img className="logo" src={logo} alt="logo"/> <h1 className="title"> Zignaly's Phones</h1>  </div>   
        </Link>

  </>;
}

export default Head;
