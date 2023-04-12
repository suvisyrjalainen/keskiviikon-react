//import logo from './logo192.png';

function Element(props) {
return(
  <div class="element">
      <h2>{props.elementName}</h2>
      <img src={props.image} alt={props.imageAlt}/>
      <p>{props.description}</p>
      <a href={props.link} class="btn btn-dark">Linkki projektiin</a>
  </div>);
}

export default Element;
