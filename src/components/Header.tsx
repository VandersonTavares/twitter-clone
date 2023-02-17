import { HiOutlineSparkles } from "react-icons/hi";

import "./Header.css";

interface HeaderProps{
    title: string
}

export function Header({ title }: HeaderProps){
    return(
        <div className="timeline-header">
        {title}
            <HiOutlineSparkles/>
      </div>
    )
}