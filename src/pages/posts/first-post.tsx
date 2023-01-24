import Layout from "../../components/layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import React from "react";


function firstPost() {
  return (<>
      <Head>
			<title>first post title</title>
		</Head>
		<Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
		<h1 className="text-red-600 bg-green-500">First Post</h1>
      <h2>
        <Link href="/">back to home page</Link>
      </h2>
      </>
  );
}

export default firstPost;
