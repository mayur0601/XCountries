

export default function DisplayCountry(props) {
  let { countryData } = props;

  let {name,flags} = countryData;

  return (
    <div className="img-container">
    <img src={flags.png} alt={flags.alt}/>
    <p style={{display:'flex',justifyContent:'center'}}>{name.common}</p>
    </div>
  ) 
}