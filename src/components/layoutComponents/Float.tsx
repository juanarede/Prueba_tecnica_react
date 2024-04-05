import "../../styles/Float.scss";
import Disability from '../../assets/img/disabled.png'

export default function Float() {
  return (
    <>
      <div className="quick-actions-wrapper" style={{ zIndex: '10000' }}>
        <input type="checkbox" name="quick-actions-toggle" className="quick-actions-toggle" />
        <a className="quick-actions-button" href="#!">
        <img style={{width:"2rem"}} src={Disability}/>
        </a>
        <ul className="quick-actions-list">
          <li><a href="#"><i className="fa-solid fa-magnifying-glass-plus mr-3"></i>Aumentar texto</a></li>
          <li><a href="#"><i className="fa-solid fa-magnifying-glass-minus mr-3"></i>Disminuir texto</a></li>
          <li><a href="#"><i className="fa-regular fa-sun mr-3"></i>Escala de grises</a></li>
          <li><a href="#"><i className="fa-solid fa-circle-half-stroke mr-3"></i>Alto contraste</a></li>
          <li><a href="#"><i className="fa-regular fa-eye mr-3"></i>Contraste negativo</a></li>
          <li><a href="#"><i className="fa-solid fa-lightbulb mr-3"></i>Fondo claro</a></li>
          <li><a href="#"><i className="fa-solid fa-underline mr-3"></i>Subrayar enlaces</a></li>
          <li><a href="#"><i className="fa-solid fa-rotate-right mr-3"></i>Restablecer</a></li>
        </ul>
      </div>
    </>
  );
}
