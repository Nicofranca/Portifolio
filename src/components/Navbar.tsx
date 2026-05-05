import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-center py-4 bg-black/50 backdrop-blur-md">
            <div className="flex gap-28">
                <Link href="/especialização" className="text-white hover:text-purple-500 font-medium relative group py-2">
                    Especialização
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-purple-500 transition-all duration-300 ease-out -translate-x-1/2 group-hover:w-full"></span>
                </Link>

                <Link href="/especialização" className="text-white hover:text-purple-500 font-medium relative group py-2">
                    História
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-purple-500 transition-all duration-300 ease-out -translate-x-1/2 group-hover:w-full"></span>
                </Link> 

                <Link href="/especialização" className="text-white hover:text-purple-500 font-medium relative group py-2">
                    Projetos
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-purple-500 transition-all duration-300 ease-out -translate-x-1/2 group-hover:w-full"></span>
                </Link>    

                <Link href="/especialização" className="text-white hover:text-purple-500 font-medium relative group py-2">
                    Contato
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-purple-500 transition-all duration-300 ease-out -translate-x-1/2 group-hover:w-full"></span>
                </Link>
            </div>
        </nav>
    );
}