import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';
import "./style.scss";

export default function NavLinkMenu(props) {
    const [isExpanded, setExpanded] = useState(false)

  return (
    <li className={`nav-item ${isExpanded && "expanded"}`}>
      <a href="javascript:void(0)" className="nav-link" onClick={() => {setExpanded(!isExpanded)}}>
        {props.icon}
        <span className="nav-link-title">{props.title}</span>
        <KeyboardArrowDownIcon className="down-arrow"/>
      </a>

      {isExpanded &&
        <ul className="nav-link-items">
            {props.children}
        </ul>
      }

    </li>
  );
}
