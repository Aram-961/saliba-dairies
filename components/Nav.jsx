import Link from "next/link"

const Nav = () => {
    return (
        <nav className=" flex justify-evenly bg-black">
            <Link href="/">
                <h1 className="text-white">Logo</h1>
            </Link>
            <div className="flex">
                <div className="">
                    <Link
                        href="#"
                        className="text-white"
                    >
                        Farm
                    </Link>
                    <Link
                        href="#"
                        className="text-white"
                    >
                        Products
                    </Link>
                    <Link
                        href="#"
                        className="text-white"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav