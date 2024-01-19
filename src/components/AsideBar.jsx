import { FaPowerOff , FaArrowRight, FaMap, FaRegUser, FaChartSimple, FaCode, FaCopy } from 'react-icons/fa6';
import logo from '../assets/logo.png';
import './css/aside-bar.css';

export default function AsideBar() {
    return (
        <div className="aside-bar">
            <div>
                <FaArrowRight />
                <img src={logo} alt="LOGO" />
                <FaMap />
                <FaRegUser />
                <FaChartSimple />
                <FaCode />
                <FaCopy />
            </div>
            <div>
                <FaPowerOff  />
            </div>
        </div>
    );
}
