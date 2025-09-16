# Platzi Store

Platzi Store es una tienda en línea desarrollada con Angular 20, que permite a los usuarios explorar productos, filtrarlos por categorías y precios, agregarlos al carrito y próximamente gestionar su perfil de usuario. El proyecto cuenta con autenticación, registro y manejo de sesiones mediante cookies.

## Tabla de Contenidos

- [Características](#características)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación](#instalación)
- [Comandos Útiles](#comandos-útiles)
- [Configuración](#configuración)
- [Desarrollo](#desarrollo)
- [Dependencias Principales](#dependencias-principales)
- [Capturas De Pantalla](#Capturas-de-pantalla)
- [Licencia](#licencia)

---

## Características

- Listado y filtrado de productos por nombre, categoría y rango de precios.
- Visualización de detalles de producto y productos relacionados.
- Carrito de compras persistente en localStorage.
- Registro y login de usuarios con manejo de sesiones vía cookies.
- Rutas protegidas para usuarios autenticados.
- Diseño responsive y moderno.

## Estructura del Proyecto

```
├── src/
│   ├── app/
│   │   ├── core/           # Servicios y guards
│   │   ├── pages/          # Vistas principales (home, search, cart, auth, etc.)
│   │   ├── shared/         # Componentes y modelos reutilizables
│   │   ├── app.routes.ts   # Definición de rutas
│   │   └── app.ts          # Componente raíz
│   ├── styles.css          # Estilos globales
│   ├── main.ts             # Entrada de la app Angular
│   ├── main.server.ts      # Entrada para SSR
│   └── server.ts           # Servidor Express para SSR
├── public/                 # Archivos públicos y favicon
│   └── assets/             # Imágenes y recursos estáticos
├── angular.json            # Configuración Angular CLI
├── package.json            # Dependencias y scripts
└── README.md               # Documentación
```

## Instalación

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/Yureli201/PruebaTecnicaFrontend
   cd PruebaTecnica
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

## Comandos Útiles

- **Iniciar servidor de desarrollo:**
  ```bash
  ng serve
  ```
  Accede a [http://localhost:4200/](http://localhost:4200/)

- **Construir para producción:**
  ```bash
  ng build
  ```


## Configuración

- **Variables de entorno:**  
  Actualmente, las URLs de la API están definidas en [`src/app/core/services/api.ts`](src/app/core/services/api.ts).
- **SSR:**  
  La configuración de rutas para se encuentra en [`src/app/app.routes.ts`](src/app/app.routes.ts).

## Desarrollo

- **Generar un nuevo componente:**
  ```bash
  ng generate component nombre-componente
  ```
  o
  ```bash
  ng g c nombre-componente
  ```

- **Agregar una nueva página:**  
  Crea un nuevo componente en `src/app/pages/` y registra la ruta en [`src/app/app.routes.ts`](src/app/app.routes.ts).


## Dependencias Principales

- **Angular** 20.x
- **ngx-cookie-service** para manejo de cookies
- **@fortawesome/angular-fontawesome** para iconos

## Capturas de Pantalla

### Bocetos

Wireframes iniciales del diseño de la aplicación.

#### Boceto Versión Movil
![Boceto Versión Movil](/public/assets/Screenshots/boceto-movil.png)
#### Boceto Versión Escritorio
![Boceto Versión Escritorio](/public/assets/Screenshots/boceto-escritorio.png)
---

### Capturas Finales

Pantallas finales de la aplicación.

#### Pantalla Principal
![Pantalla Principal](/public/assets/Screenshots/screenshot-home.png)
#### Login
![Login](/public/assets/Screenshots/screenshot-login.png)
#### Sign Up
![Sign Up](/public/assets/Screenshots/screenshot-signUp.png)
#### Buscador
![Buscador](/public/assets/Screenshots/screenshot-buscador.png)
#### Detalle de Producto
![Detalle de Producto](/public/assets/Screenshots/screenshot-detallesProducto.png)
#### Carrito de Compras
![Carrito de Compras](/public/assets/Screenshots/screenshot-carrito.png)

### Autor

Desarrollado como parte de una prueba técnica para estadía en Ordenaris como Desarrollador Frontend. Por Yureli Martinez Martinez

---