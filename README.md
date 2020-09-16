# PruebaCursor

IMPORTANTE:

Setear API Endpoint en:
environments/environment.ts

```
export const environment = {
  production: false,
  APIEndpoint: 'https://private-anon-00c6b9c012-testphonebook.apiary-mock.com' //ACTUALIZAR
};
```

Instalar dependencias (node_modules):

```
npm install
```

## Funcionamiento

El ejemplo implementado tiene dos buscadores:

1. Un input donde hará una búsqueda reactiva en todos los campos (utilizando la librería ng2-search-filter)
2. Un select que filtrará a través de la región del usuario

A su vez cada usuario tiene una opción de Detalle, donde se abre un modal que muestra toda
la información de la persona.

Versión de Angular: 10.0.7.

Para iniciar, usar `ng serve`
