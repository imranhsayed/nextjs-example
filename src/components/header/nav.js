import Link from 'next/link';

function Nav() {
  return (
    <nav
      className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <Link href="/about">
        <a className="mr-5 hover:text-gray-900">About</a>
      </Link>
      <Link href="/events">
        <a className="mr-5 hover:text-gray-900">Events</a>
      </Link>
      <Link href="/contact-us">
        <a className="mr-5 hover:text-gray-900">Contact Us</a>
      </Link>
    </nav>
  )
}

export default Nav;
