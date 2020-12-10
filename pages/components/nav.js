import Link from 'next/link'


export default function Nav() {
  return (
    <nav>

      <ul >
        <div style={{ display: "inline" }}>
          <li className="brand">Brand</li>
        </div>
        <div style={{ display: "inline" }}>
          <li className="link">
            <Link href="/"  >Home</Link>
          </li>
          <li className="link">
            <Link href="/about" >About</Link>
          </li>
        </div>
      </ul>
    </nav >
  )
}
