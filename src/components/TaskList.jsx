import { items } from '../data/database';
import { FaMapLocationDot, FaXmark } from "react-icons/fa6";
import './css/task-list.css'

const TaskList = ({ request, setCenter, setZoom}) => {
    return (
        <ul className="task-list">
            {items.map(item => (
                <li
                    key={item.id}
                    style={{ 
                        display: (item.title.toLowerCase().includes(request)) 
                            ? 'block' 
                            : 'none' 
                    }}
                >
                    <p className="title">
                        <b>{item.title}</b>
                        <FaXmark />
                    </p>
                    <div className="description">
                        <div className="wrapper">
                            <p>Адрес: {item.address}</p>
                            <p>Площадь объекта: {item.area}</p>
                            <p>Дата постройки: {item.date}</p>
                        </div>
                        <button
                            className="action-btn"
                            onClick={() => {
                                setCenter(item.center);
                                setZoom(17);
                            }}
                        >
                            <FaMapLocationDot />
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
