import Layout from '../components/Layout'
import { AnimatePresence } from 'framer-motion'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <AnimatePresence exitBeforeEnter>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </AnimatePresence>
    )
}

export default MyApp
