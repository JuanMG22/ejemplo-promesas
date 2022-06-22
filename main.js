//Datos que se requieren obtener
const productos = [
  {
    "precio": 27030,
    "id": 1,
    "titulo": "Procesador AMD Ryzen 5 2600",
    "categoria": "ProcesadoresAMD",
    "descripcion": "Procesador AMD 6 Núcleos 12 Hilos",
    "imagen": "https://juanmg22.github.io/High-Gaming/img/cpus/cpu-1.jpg"
  },
  {
    "precio": 28930,
    "id": 2,
    "titulo": "Procesador AMD Ryzen 5 3500X ",
    "categoria": "ProcesadoresAMD",
    "descripcion": "Procesador AMD 6 Núcleos 6 Hilos",
    "imagen": "https://juanmg22.github.io/High-Gaming/img/cpus/cpu-2.jpg"
  }
]

const getDatos = () => {
  return new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve(productos)
    }, 2000)
  })
}

getDatos()
	.then(res => console.log(res))
