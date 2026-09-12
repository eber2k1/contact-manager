# Contact Manager

## Description
Un simple gestionador de contactos en React + Vite

## Características
- [x] Header se renderiza correctamente
- [x] ContactCard recibe y muestra props
- [x] Lista de contactos se renderiza con .map()
- [x] Prop `key` presente en cada elemento del .map()
- [x] Estilos condicionales funcionan según isFavorite
- [x] Botón de eliminar contacto funciona correctamente
## Reflexión

- La UI tiene ventaja en separarlos en componentes para que sea más fácil mantener y escalar.

- Los props pueden fluir de Padre a hijo porque el flujo de datos es unidireccional .

- Si olvido la prop key en el .map(), React no lo va a renderizar y me va a dar un warning.