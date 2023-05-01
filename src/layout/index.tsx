import { ROUTES } from "@/routes";
import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

interface ILayout {
    children : ReactElement;
}

export const Layout = ({children}: ILayout) =>{
    return(
        <>
        <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />
        <header className="h-12  bg-slate-50 shadow flex p-2">
            <nav>
                <ul className="flex gap-3  items-center">
                    <li>
                        <Link className="hover:text-blue-500" to={ROUTES.TODOS}>Todos</Link>
                    </li>
                    <li>
                        <Link className="hover:text-blue-500" to={ROUTES.ADD_TODO}>Add new todos</Link>
                    </li>
                    <li>
                        <Link className="hover:text-blue-500" to={ROUTES.ABOUT}>About</Link>
                    </li>
                </ul>
            </nav>
        </header>
        <main className="min-h-screen px-3">{children}</main>
        <footer className="bg-slate-800 text-white text-center py-3">
            copyright allright reserved
        </footer>
        </>
    )
}