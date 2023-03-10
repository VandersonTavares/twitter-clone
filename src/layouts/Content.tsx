import { Outlet} from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';

import "./Content.css";

export function Content() {
    return (
        <div className="layout">
            <Sidebar />
            <div className="content">
                <Outlet />
            </div>
        </div>
    )
}

export default Content
