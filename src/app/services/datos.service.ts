import { Injectable } from '@angular/core';
import { validate } from 'rut.js';


@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor() { }

  //Corrige el charset del dato a UTF-8
  corregirDatos(utf8String: string) {

    if (typeof utf8String != 'string') throw new TypeError('parameter ‘utf8String’ is not a string');
    // note: decode 3-byte chars first as decoded 2-byte strings could appear to be 3-byte char!
    const unicodeString = utf8String.replace(
      /[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g,  // 3-byte chars
      function (c) {  // (note parentheses for precedence)
        var cc = ((c.charCodeAt(0) & 0x0f) << 12) | ((c.charCodeAt(1) & 0x3f) << 6) | (c.charCodeAt(2) & 0x3f);
        return String.fromCharCode(cc);
      }
    ).replace(
      /[\u00c0-\u00df][\u0080-\u00bf]/g,                 // 2-byte chars
      function (c) {  // (note parentheses for precedence)
        var cc = (c.charCodeAt(0) & 0x1f) << 6 | c.charCodeAt(1) & 0x3f;
        return String.fromCharCode(cc);
      }
    );
    return unicodeString;

  }

  //Valida si un RUT es válido
  validarRut(rut: string): boolean {
    return validate(rut);
  }



}
