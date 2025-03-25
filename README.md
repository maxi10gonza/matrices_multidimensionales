# 📌 Sistema de Gestión de Contactos en la Terminal

Este proyecto permite ingresar y almacenar datos de personas en la terminal mediante **JavaScript (Node.js)** o **Python**. Cada persona puede tener múltiples números telefónicos asociados.

---

## 🚀 Requisitos Previos

### Para ejecutar en **JavaScript** (Node.js):
1. **Instalar Node.js** (si no lo tienes)
   - Descárgalo desde [aquí](https://nodejs.org/) y sigue las instrucciones de instalación.
   - Verifica la instalación con:
     ```sh
     node -v
     ```
2. **Guardar el archivo**
   - Copia el código en un archivo y guárdalo como `contactos.js`.
3. **Ejecutar el script**
   - Abre una terminal y navega hasta la carpeta donde está el archivo:
     ```sh
     cd ruta/del/archivo
     ```
   - Ejecuta el script con:
     ```sh
     node contactos.js
     ```

### Para ejecutar en **Python**:
1. **Instalar Python** (si no lo tienes)
   - Descárgalo desde [aquí](https://www.python.org/) e instálalo.
   - Verifica la instalación con:
     ```sh
     python --version
     ```
2. **Guardar el archivo**
   - Copia el código en un archivo y guárdalo como `contactos.py`.
3. **Ejecutar el script**
   - Abre una terminal y navega hasta la carpeta donde está el archivo:
     ```sh
     cd ruta/del/archivo
     ```
   - Ejecuta el script con:
     ```sh
     python contactos.py
     ```

---

## 📋 Funcionamiento del Programa
1. **Solicita los datos de una persona:**
   - Nombre
   - Apellido
   - DNI
2. **Permite ingresar múltiples números de teléfono.**
3. **Pregunta si deseas agregar otra persona.**
4. **Muestra la lista completa de contactos al finalizar.**

---

## 📌 Ejemplo de Uso en la Terminal
```
Ingrese nombre: Juan
Ingrese apellido: Perez
Ingrese DNI: 26123456
Ingrese un teléfono (o presione Enter para finalizar): 3704112233
Ingrese un teléfono (o presione Enter para finalizar): 3704321456
Ingrese un teléfono (o presione Enter para finalizar):
¿Desea ingresar otra persona? (si/no): no

Lista de contactos:
[
  ['Juan', 'Perez', '26123456', ['3704112233', '3704321456']]
]
```

---

¡Listo! Ahora puedes usar el sistema para gestionar contactos en la terminal. 🚀

