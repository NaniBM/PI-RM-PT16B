import Card from './Card';

export default function Cards({ characters, onClose }) {

   return (
      <div>
        
         {
            characters.map((el)=>(
               <Card
                  key={el.id}
                  id={el.id}
                  name={el.name}
                  status={el.status}
                  species={el.species}
                  gender={el.gender}
                  origin={el.origin.name}
                  image={el.image}
                  onClose={onClose}
               />
            ))
         }
      </div>
   )
}
