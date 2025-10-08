# Proyecto-C3-2025
## Subtítulo
### Subtítulo de segundo nivel
Repositorio para los ejercicios del curso de **proyecto integrador** del tercer cuatrimestre del 2025

*Cursiva*
**Negrita**
~~Tachado~~

- item 1
- item 2
- item 3

1. Paso 1
2. Paso 2
3. Paso 3

> Cita textual
> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

La función `Math.pow()` permite elevar un valor a una potencia

#### Bloque de código

```javascript
function calcularImc(){
    let peso = document.getElementById("txtPeso").value;
    let estatura = document.getElementById("txtEstatura").value;

    imc = peso / Math.pow(estatura,2);
    

    document.getElementById("txtImc").value = imc.toFixed(2);

    let clasificacion = clasificarImc();

    document.getElementById("txtClasificacion").value = clasificacion;

}
```

#### Tablas 🚀

|Variable|Descripción|Valor inicial|
|--------|-----------|-------------|
| peso | Peso de la persona | 0 |
| estatura | Estatura de la persona | 0 |

[Google](https://www.google.com)
![Imagen](https://exoticfruitbox.com/wp-content/uploads/2015/10/mango.jpg)