import Link from "next/link"

const Nav = () => {
    return (
        <header className="text-gray-100 bg-gray-600">
            <nav className="flex items-center justify-between w-full px-10 py-4">
                <div>My Side</div>
                <div className="flex gap-10">
                    <Link href="/">Home</Link>
                    <Link href="/CreateUser">Create User</Link>
                    <Link href="/ClientMember">Client Member</Link>
                    <Link href="/Member">Member</Link>
                    <Link href="/Public">Public</Link>
                </div>
            </nav>
        </header>
    )
}

export default Nav