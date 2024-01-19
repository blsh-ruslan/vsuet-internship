import { items } from '../database';
import { FaMapLocationDot, FaXmark } from "react-icons/fa6";
import './css/task-list.css'

export default function TaskList({ request }) {
    return (
        <ul className="task-list">
            {items.map(item => (
                <li
                    key={item.id}
                    style={{ display: (item.title.toLowerCase().includes(request)) ? 'block' : 'none' }}
                >
                    <p className="title">
                        <span>{item.title}</span>
                        <FaXmark />
                    </p>
                    <div className="description">
                        <div className="wrapper">
                            <p>Тип задачи: {item.type}</p>
                            <p>Автор задачи: {item.author}</p>
                            <p>Дата начала: {item.date}</p>
                        </div>
                        <button className="action-btn">
                            <FaMapLocationDot />
                        </button>
                    </div>
                    <progress value={item.progress} max="100" />
                </li>
            ))}
        </ul>
    );
}
