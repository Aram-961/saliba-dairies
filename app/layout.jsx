import '@styles/global.css'
import Nav from '@components/Nav'

export const metadata = {
    title: 'Saliba Dairies',
    description: 'No Description yet'
}

const RootLayout = ({ children }) => {
    return (
        <html lang='eng'>
            <body>
                <div>
                    <Nav />
                    {children}
                </div>
            </body>
        </html>
    )
}

export default RootLayout