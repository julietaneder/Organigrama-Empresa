import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://www.linkedin.com/in/julieta-neder/'>
                <img src="/img/linkedin.png" alt='linkedin' />
            </a>
            <a href='https://github.com/julietaneder'>
                <img src="/img/github.png" alt='github' />
            </a>
        </div>
        <img src='/img/org.png' alt='org' />
        <strong>Desarrollado por Julieta Neder</strong>
    </footer>
}

export default Footer