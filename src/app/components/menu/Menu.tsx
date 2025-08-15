import Link from "next/link";

export const Menu = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <hr/>
                <li>
                    <Link href="/about">about</Link>
                </li>
                <hr/>
                <li>
                    <Link href="/contacts">contacts</Link>
                </li>
                <hr/>
                <li>
                    <Link href="/users">users</Link>
                </li>
            </ul>
        </div>
    );
};