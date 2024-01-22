import { Link, NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <div className='bg-slate-300'>
        <header className='container flex justify-between items-center'>
            <Link className='text-2xl font-semibold py-4' to='/'> LogoShop</Link>
            <nav>
                <NavLink className={'px-4 py-2 hover:bg-slate-500 hover:text-white'} to={'/'}>Home</NavLink>
                <NavLink className={'px-4 py-2 hover:bg-slate-500 hover:text-white'} to={'/shop'}>Shop</NavLink>
                <NavLink className={'px-4 py-2 hover:bg-slate-500 hover:text-white'} to={'/login'}>Login</NavLink>
                <NavLink className={'px-4 py-2 hover:bg-slate-500 hover:text-white'} to={'/register'}>Register</NavLink>
            </nav>
        </header>
        </div>
    );
}
