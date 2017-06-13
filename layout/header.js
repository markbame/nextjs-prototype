import React, { Component } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import  testdiv from '../style/style'
export default class Header extends Component {
  static async getInitialProps () {

    return {}
  }

  render () {
    return (
      <div>
        <style jsx>{testdiv}</style>
        <ul>
          <li className="navLink"><Link href="/index"><a>Home</a></Link></li>
          <li className="navLink"><Link href="/items"><a>Items</a></Link></li>
          <li className="navLink"><Link href="/cart"><a>Cart</a></Link></li>
          <li className="navLink"><Link href="/tracking"><a>Tracking</a></Link></li>
          <li className="navLink"><Link href="/about"><a>About</a></Link></li>
        </ul>
      </div>
    )
  }
}
