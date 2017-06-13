import Link from 'next/link'

export default ({ children }) =>
  <div>
    <nav>
      <Link href="/">Home</Link> &middot;
      <Link href="/about" prefetch>About</Link>
    </nav>

    <main>
      {children}
    </main>

    <footer>
      &copy; 2017
    </footer>
  </div>
