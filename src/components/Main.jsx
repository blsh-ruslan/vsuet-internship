import { useState } from 'react';
import TaskList from './TaskList';
import MapViewer from './MapViewer';
import { FaClipboardCheck } from "react-icons/fa6";
import './css/main.css';

export default function Main() {
    const [searchText, setSearchText] = useState('');

    return (
        <main className="main">
            <section className="current-events">
                <div className="search-input">
                    <label htmlFor="task-search">
                        <span>Задания </span>
                        <FaClipboardCheck />
                    </label>
                    <input
                        type="search"
                        placeholder="Начните вводить текст..."
                        id="task-search"
                        value={searchText}
                        onChange={e => setSearchText(e.target.value.toLowerCase())}
                    />
                    <button className="cancel-btn">Отменить выделение</button>
                    <select defaultValue="opt1">
                        <option value="opt1">Отобразить все</option>
                        <option value="opt2">Опция 2</option>
                        <option value="opt3">Опция 3</option>
                        <option value="opt4">Опция 4</option>
                        <option value="opt5">Опция 5</option>
                    </select>
                </div>
                <TaskList request={searchText} />
            </section>
            <MapViewer />
        </main>
    );
}
