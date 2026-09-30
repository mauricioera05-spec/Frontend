import './App.css' //Importe de estilo para App.jsx
import { useState } from 'react' //Importe de useState para manejar el estado del componente
import { useEffect } from 'react' //Importe de useEffect para manejar efectos secundarios en el componente
import TitleCard from './TitleCard' //Importe del componente TitleCard para mostrar tarjetas de título
import './TitleCard.css' //Importe de estilo para TitleCard.jsx
function App() {
  //Declaraciones
  let mensaje1 = "Hola,";
  let mensaje2 = " mundo.";
  let num1;
  let num2;
  let num3;
  const colores = ["rojo", "azul", "amarillo"];
  const [count, setCount] = useState(0);
  //Asignaciones fundamentales de variables
  num1 = 10;
  num2 = 20;

  //Operaciones aritméticas básicas ded variables
  num3 = num1 + num2;

  //La función useEffect se ejecuta después de que el componente se renderiza o variables cambian, y
    //puede ser utilizada para realizar efectos secundarios, como alertas o llamadas a APIs.
  useEffect(() => {
    alert("Uso de la función useEffect sin dependencias: " + mensaje1 + " " + mensaje2);
  }, []);//El segundo parámetro es un arreglo de dependencias, que indica que el
            // efecto solo se ejecutará una vez, al montar el componente.
            //Un arreglo vacío significa que el efecto se ejecuta una sola vez al montar el componente.
            

  useEffect(() => {
    alert("Uso de la función useEffect con dependencias: " +"El contador cambió a:" + count);
  }, [count]);

  //Se imprimen los valores de las variables en la consola del navegador
  console.log(mensaje1 + " " + mensaje2);
  console.log(num3);
  
  //Comparación de valores y tipos de datos
    //(== compara valores, === compara valores y tipos de datos)
  if(num1 == 10){
    console.log("num1 es igual a 10");
  }
  if(num1 === "10"  ){
    console.log("num1 es igual a '10' (string)");
  }else{
    console.log("num1 no es igual a '10' (string)");
  }

  //Condicion ternaria
  //
  let resultado = (num1 > num2) ? "num1 es mayor que num2" : "num1 es menor o igual que num2";
  console.log(resultado);

  //Métodos para manipular cadenas de texto
  console.log("La longitud del mensaje 1 es: " + mensaje1.length);
  console.log("Mensaje 1 en mayúsculas: " + mensaje1.toUpperCase());
  console.log("Mensaje 1 en minúsculas: " + mensaje1.toLowerCase());
  console.log("¿El mensaje 1 contiene un saludo?: " + (mensaje1.includes("Hola") ? "Sí" : "No"));
  console.log("El mensaje 1 contiene " + mensaje1.split("").length + " caracteres");
  let mensaje = mensaje1 + 
  mensaje2;
  console.log("El método trim() elimina los espacios al inicio y al final de la cadena: " + mensaje.trim());
  
  
  
  return(
    <div>
      
    

      <TitleCard
        image="public/234.jpg"
        alt="Imagen de gato"
        title="Título"
        subtitle="Subtítulo"
        date="2026-09-29"
        />

      {/*En JSX, el return solo puede devolver un elemento padre, 
      por lo que se debe encerrar todo en un div*/} 
      {/*Expresiones en JSX son encerradas entre llaves "{}"*/}

      <h1> {mensaje1} </h1>
      
      <p>{num3}</p> 

      <BotonContador count = {count} setCount ={setCount} /> {/*Llamada componente botonContador.*/}

      <ListaColores colores = {colores} /> {/*Llama al componente listaColores.*/}

      <BotonAlerta /> {/*Se llama al componente BotonAlerta, que es un botón que muestra una alerta al hacer clic*/}
        
      <p><ImagenGato/></p>
      

    </div> 



  )
  
}


function ImagenGato(){
  return (<img 
    src="public/234.jpg" 
    alt="Imagen de gato" 
    width="105" height="100" 
    />
    );
}

function BotonAlerta(){
  return <button onClick={() => alert("¡Hola! Soy una alerta desde un componente separado.")}> Mostrar Alerta </button>;
}

function ListaColores({colores}){
/*Se crea una lista desordenada con los colores */
  return(
      <ul>
        {colores.map((color, index) => (
          <li type="disc" key={index}> {color} </li>
          ))}
      </ul>
  )
}

function BotonContador({count, setCount}){
  
  return <button onClick = {() => setCount(count => count + 1)} > {count} </button>;
}

export default App //Hace que el componente App pueda ser importado en otros archivos, como index.jsx
