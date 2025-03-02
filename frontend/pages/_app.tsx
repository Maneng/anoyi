import moment from 'moment';
import type { AppProps } from 'next/app'
import '../styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-200 min-h-screen w-full ">
      <div className='max-w-screen-2xl min-h-screen mx-auto flex'>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default App