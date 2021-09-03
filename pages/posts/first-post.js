import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function FirstPost() {
	return (
	<Layout>
	<Head>
	<title> My Profile </title>
	</Head>
	<h1>About Me </h1>
	<h2>
	<Link href="/">
		<a>Back to home</a>
	</Link>
	</h2>
	<p>Hello My Name is Tia Nadya, I am from Bojonegoro Indonesia. I like learning new thing about website development.module
	i try to write about website and build Progressive Web Application. And I want to understand Accesibility and i want to contribute to Localization of Website Technology.
	</p>
	</Layout>

	)
}