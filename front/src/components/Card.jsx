export default function Card(props) {
   console.log(props)
   return (
      <div>
         <button onClick={() => props.onClose(props.id)}>X</button>
         <h2>{props.name}</h2>
         <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin}</h2>
         <img src={props.image} alt='' />
      </div>
   );
}

// export default function Card(
//    { onClose, name, status, species, gender, origin, image}
// ) {
//    return (
//       <div>
//          <button onClick={onClose}>X</button>
//          <h2>{name}</h2>
//          <h2>{status}</h2>
//          <h2>{species}</h2>
//          <h2>{gender}</h2>
//          <h2>{origin.name}</h2>
//          <img src={image} alt='' />
//       </div>
//    );
// }