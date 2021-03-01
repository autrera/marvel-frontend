import '../styles/globals.css'
import { Provider } from 'react-redux';
import store from '../src/store';
import { Head } from 'next/document'

function MyApp({ Component, pageProps }) {
  return (
  	<Provider store={store}>
      <Head>
        <meta 
          name='viewport' 
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' 
         />
      </Head>
	  	<Component {...pageProps} />
  	</Provider>
	)
}

export default MyApp
