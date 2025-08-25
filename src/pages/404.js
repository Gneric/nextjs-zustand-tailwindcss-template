import Link from 'next/link'

export default function Custom404() {
    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1>404 - Página no encontrada</h1>
            <p>Lo sentimos, la página que buscas no existe.</p>
            <Link href="/">
                <a>Volver al inicio</a>
            </Link>
        </div>
    )
}