import { } from './GoScrollTop.style';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'

export default function GoScrollTop() {

    const routePath = useLocation();
    const onTop = () => {
        window.scrollTo(0, 0);
    }
    useEffect(() => {
        onTop();
    }, [routePath]);

    return null;
}