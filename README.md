# Descripción
Aplicación web interactiva diseñada para la gestión de perfiles de usuario de forma local. El proyecto permite crear, visualizar y eliminar tarjetas de usuario, persistiendo la información directamente en el navegador. Además, incluye una experiencia de navegación fluida mediante un carrusel personalizado.

# Tecnologías Utilizadas
**HTML5:** Estrucutra semántica para la accesibilidad. 
**CSS:** Diseño responsivo mediante Media Queries y maquetación con Flexbox/Grid.
**JavaScript (ES6+):**
  - LocalStorage: Para la persistencia de datos del lado del cliente sin base de datos externa.
  - Manipulación del DOM: Renderizado dinámico de perfiles y manejo de eventos.

# Desafíos Técnicos y Aprendizajes
Uno de los mayores retos fue la creación de un Slider/Carrusel manual sin librerías externas.
Para lograrlo, profundicé en las propiedades de medición del DOM:
  - **offsetWidth:** Para determinar el ancho visible del contenedor.
  - **scrollWidth:** Para calcular el ancho total del contenido, incluyendo lo que desborda el área visible.
  - **Resultado:** Esta implementación me permitió comprender cómo el navegador gestiona el renderizado de elementos off-screen y cómo manipular el scroll de forma programática para mejorar la experiencia de usuario (UX).

# Funcionalidades Clave
  - **CRUD Local:** Los usuarios pueden agregar y eliminar perfiles, los datos se mantienen incluso al resfrescar la página gracias a localStorage.
  - **Diseño Responsive:** La interfaz se adapta automáticamente a dispositivos móviles y escritotio (breackpoint de 600px).
  - **Navegación Intuitiva:** Slider interactivo que responde de forma dinámica al contenido disponible.

# Cómo ejecutar el proyecto
1. Clona el repositorio.
2. Abre el archivo index.html en tu navegador.

# Mejoras futuras
  - Añadir la opción de editar perfiles existentes.
