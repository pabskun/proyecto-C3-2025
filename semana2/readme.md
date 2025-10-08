# 🚀 IMC y Cálculo de área de figuras

Proyecto que permite calcular el imc de una persona según su peso y estatura, así como conocer su clasificación 
Ejemplo: *Cálculo del IMC.*

---

## 🧩 Tabla de Contenidos
1. [Descripción](#descripción)
2. [Características](#características)
3. [Tecnologías Utilizadas](#tecnologías-utilizadas)
4. [Instalación](#instalación)
5. [Uso](#uso)
6. [Capturas de Pantalla](#capturas-de-pantalla)
7. [Estructura del Proyecto](#estructura-del-proyecto)
8. [Contribución](#contribución)
9. [Autores](#autores)
10. [Licencia](#licencia)

---

## 🧮 Descripción del código

Este script en **JavaScript** realiza dos funciones principales dentro de una página web:

1. **Cálculo del Índice de Masa Corporal (IMC):**  
   - Toma los valores ingresados de **peso** y **estatura** desde los campos del formulario.  
   - Valida que ambos campos estén completos; en caso contrario, muestra una alerta utilizando **SweetAlert** y resalta los campos vacíos.  
   - Si los datos son válidos, calcula el IMC aplicando la fórmula:  
     \[
     IMC = \frac{peso}{(estatura)^2}
     \]
   - Muestra el resultado con dos decimales y asigna una **clasificación** según el valor obtenido:
     - Menor a 18.5 → *Bajo de peso*  
     - Entre 18.5 y 24.9 → *Normal*  
     - Entre 25.0 y 29.9 → *Sobrepeso*  
     - Mayor o igual a 30.0 → *Obesidad*

2. **Cálculo del área de figuras geométricas:**  
   - El usuario selecciona una figura (Cuadrado, Rectángulo o Círculo) desde un menú desplegable.  
   - Dependiendo de la opción elegida, el programa solicita los valores necesarios y calcula el área correspondiente mediante una estructura **`switch-case`**:
     - **Cuadrado:** lado × lado  
     - **Rectángulo:** base × altura  
     - **Círculo:** π × radio² (`Math.PI` y `Math.pow`)  
   - Finalmente, el resultado del área se muestra en el campo de texto correspondiente.

El código hace uso de **manipulación del DOM**, **validación de formularios**, **event listeners** y **estructuras condicionales**, siendo ideal para prácticas de fundamentos de JavaScript.

---

## ✨ Características

- 🔐 Cálculo del imc 
- 📍 Clasificación del imc
- 💬 Cálculo del área de figuras geométricas 


---

## 🛠 Tecnologías Utilizadas

- **Frontend:** HTML5, CSS3, JavaScript  
- **Backend:** NodeJS, MongoDB  
- **Control de versiones:** Git & GitHub  
- **Herramientas adicionales:** Postman, Figma

---

## ⚙️ Instalación

1. Clona este repositorio  
   ```bash
   git clone https://github.com/pabskun/proyecto-C3-2025.git

### 📘 Ejemplo de uso

1. Ingresar peso y estatura en los campos del formulario.  
2. Presionar el botón **"Calcular IMC"** → se mostrará el resultado y la clasificación.  
3. Seleccionar una figura geométrica, ingresar los valores solicitados y presionar **"Calcular Área"** para ver el resultado.


## 📁 Estructura del Proyecto

```bash
📦 semana2
│
├── 📁 css/                   # Carpeta para las hojas de estilo (CSS)
│   └── estilos.css           # Archivo principal de estilos
│
├── 📁 js/                    # Carpeta para scripts JavaScript
│   └── index.js              # Archivo con la lógica principal del proyecto
│
├── index.html                # Página principal de la aplicación web
│
└── readme.md                 # Documentación del proyecto
