import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Portifolio from './pages/Portifolio/Portifolio';
import Manage from './pages/Manage/Manage';
import BookMark from './pages/BookMark/BookMark';
import Insure from './pages/Insure/Insure';
import Fylo from './pages/Fylo/Fylo';
import Contact from './pages/Contact/Contact';

export default function MainRoutes() {

    return (
        <Routes>
            <Route path='/'>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
            </Route>
            <Route path='/portifolio' element={<Portifolio />} />
            <Route path='/manage' element={<Manage />} />
            <Route path='/bookmark' element={<BookMark />} />
            <Route path='/insure' element={<Insure />} />
            <Route path='/fylo' element={<Fylo />} />
            <Route path='/contact' element={<Contact />} />
            {/* <Route path='*' element={<NotFound />} /> */}
        </Routes>
    )
}
