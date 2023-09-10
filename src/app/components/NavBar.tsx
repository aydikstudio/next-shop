import Link from 'next/link';

export default function NavBar() {
  return (
    <div>

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link href="/home" className='no-underline'>
            Интернет-магазин
          </Link>
          <Link href="/basket" className='no-underline'>
            Корзина
          </Link>
        </div>
      </nav>

    </div>
  )
}
