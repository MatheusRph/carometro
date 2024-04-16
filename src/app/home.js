// pages/index.js

import Head from 'next/head';
import Link from 'next/link';

export default function HomePage() {
    return (
        <div>
            <Head>
                <title>Minha Página Inicial</title>
            </Head>

            <h1>Bem-vindo à Minha Página Inicial</h1>
            <p>Esta é uma página inicial básica criada com Next.js.</p>

            <Link href="/outra-pagina">
                <a>Acesse outra página</a>
            </Link>
        </div>
    );
}