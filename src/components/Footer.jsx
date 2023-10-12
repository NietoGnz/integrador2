import './Footer.scss'

const Footer = () => {

  const year = new Date().getFullYear();  

  return (
    <div className="footer">&copy; {year} ByteBazaar. Todos los derechos reservados.</div>
  )
}

export default Footer