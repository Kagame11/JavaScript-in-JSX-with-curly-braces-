const person ={
  name: 'Gregorio zara',
  theme:{
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList(){
  return (
    <div style={person.theme}>
      <h1>{person.name} TODOS</h1>
      <img className="avartar"
      src="https://i.imgur.com/7vQD0fPs.jpg"
      alt="Gregorio zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}