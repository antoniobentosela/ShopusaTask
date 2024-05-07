// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-xpath';
// cypress/support/index.js

Cypress.on('uncaught:exception', (err, runnable) => {
    // Lógica para manejar la excepción no capturada
    // Por ejemplo, puedes imprimir el error en la consola o tomar alguna otra acción
    console.error('Excepción no capturada:', err.message);
    // Retornar false para evitar que la excepción no capturada falle la prueba
    return false;
  });

// Alternatively you can use CommonJS syntax:
// require('./commands')