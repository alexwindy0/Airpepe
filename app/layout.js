

import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../components/Nav';
import Footer from '@components/Footer';
import '@styles/globals.css';


export const metadata ={
  title: "AIR PEPE",
  description: "MEME COIN"
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <main>
          <Nav />
          { children }
          <Footer />
        </main>
      </body>
    </html>
  )
}

export default RootLayout;