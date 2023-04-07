import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return (<>
      {characters.map(e =>
         <Card
            name={e.name}
            species={e.species}
            gender={e.gender}
            image={e.image}
            id={e.id}
            onClose={props.onClose}
         />)}
   </>
   );
}
