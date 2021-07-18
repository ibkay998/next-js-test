import { Box } from "@chakra-ui/react"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from "@chakra-ui/react"

import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'
// import Script from 'next/script'

const name = 'Ibukunoluwa Oyeniyi'
export const siteTitle = 'Next.js Sample Website'

export default function Navbar({ children, home }) {
  return (
    <div >
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://sdk.minepi.com/pi-sdk.js">
        
                {Pi.init({ version: "2.0" })}

        </script>
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header >
        
      </header>
        <body>{children}</body>
      {!home && (
        <div >
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}