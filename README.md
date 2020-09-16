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
-Un input donde hará una búsqueda reactiva en todos los campos (utilizando la librería ng2-search-filter)
-Un select que filtrará a través de la región del usuario

A su vez cada usuario tiene una opción de Detalle, donde se abre un modal que muestra toda
la información de la persona.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
