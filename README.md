# Conversor de números - Kata TypeScript

### Descripción

El objetivo de esta kata es implementar una función en TypeScript que convierta un número arábigo en su equivalente en números romanos. Los números romanos se representan utilizando las siguientes letras: "I", "V", "X", "L", "C", "D" y "M", que representan los valores 1, 5, 10, 50, 100, 500 y 1000 respectivamente.

La función deberá recibir un número arábigo como entrada y devolver su equivalente en números romanos. Se deben manejar los casos especiales como el 4 (IV) y el 9 (IX), donde se resta en lugar de sumar, y los números mayores a 3999, que están fuera del rango de los números romanos válidos.

La kata debe enfocarse en escribir pruebas unitarias utilizando un marco de pruebas Jest para asegurar que la función funcione correctamente en diferentes casos de entrada, incluyendo casos límite y casos de error.

### Requerimientos

- Implementar una función en TypeScript que convierta números arábigos a números romanos.
- Prueba básica: Verificar que el número arábigo 1,5,10 se convierta correctamente en "I","V","X".
- Prueba de números especiales: Verificar que los números arábigos especiales, como 4, 9, 40, 90, 400, 900, se conviertan correctamente en los símbolos romanos correspondientes ("IV", "IX", "XL", "XC", "CD", "CM").
- Prueba de números múltiples: Verificar que los números arábigos que requieren múltiples repeticiones de símbolos romanos, como 3, 6, 8, se conviertan correctamente ("III", "VI", "VIII").
- Prueba de números compuestos: Verificar que los números arábigos compuestos, como 14, 39, 57, se conviertan correctamente en la combinación adecuada de símbolos romanos ("XIV", "XXXIX", "LVII").
- Prueba de números grandes: Verificar que los números arábigos grandes, como 100, 500, 1000, se conviertan correctamente en los símbolos romanos correspondientes ("C", "D", "M").
- Prueba del número máximo: Verificar que el número arábigo 3999 (el máximo permitido en los números romanos) se convierta correctamente en "MMMCMXCIX".
- Prueba de límites: Verificar que el conversor maneje adecuadamente los límites de entrada, como números negativos, cero y números mayores a 3999, lanzando una excepción con un mensaje adecuado.
- Escribir pruebas unitarias utilizando un marco de pruebas para asegurar la corrección de la función en diferentes casos de entrada.

Esta kata te permitirá practicar la escritura de código TypeScript, la implementación de pruebas unitarias y la manipulación de strings y números para resolver un problema de conversión de números arábigos a números romanos. ¡Diviértete!


### Configuración del proyecto

1. Crea un nuevo directorio para tu proyecto de kata.
2. Inicializa un nuevo proyecto de npm en el directorio usando el siguiente comando: `npm init -y`
3. Instala Jest como una dependencia de desarrollo usando el siguiente comando: `npm install jest @types/jest ts-jest -D`
4. Crea un archivo de configuración de Jest en la raíz de tu proyecto, por ejemplo, `jest.config.js`, con el siguiente contenido:
```javascript
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: '.*\\.spec\\.ts$',
  moduleFileExtensions: ['ts', 'js'],
  collectCoverage: true,
  coverageReporters: ['html', 'text-summary'],
};
```
5. Crea un archivo TypeScript en tu proyecto, por ejemplo, `romanConverter.ts`, que contendrá la implementación de la función de conversión de números arábigos a números romanos. Aquí tienes un ejemplo de cómo podría ser la implementación:
```typescript
function arabicToRoman(num: number): string {
  // Implementa la lógica de conversión aquí
}
```

6. Crea un archivo TypeScript en tu proyecto, por ejemplo, `romanConverter.spec.ts`, que contendrá las pruebas unitarias para la función de conversión. Aquí tienes un ejemplo de cómo podrían ser algunas pruebas:
```typescript
import { arabicToRoman } from './romanConverter';

test('Convierte 1 a "I"', () => {
  expect(arabicToRoman(1)).toBe('I');
});
```
