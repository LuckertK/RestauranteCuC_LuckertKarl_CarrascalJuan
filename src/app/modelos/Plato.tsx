export class Plato {
  public codPlato: number;
  public nombrePlato: string;
  public precioPlato: string;
  public regionPlato: string;
  public imagenPLato: string;
  public imagenPlatoBase64: string;

  constructor(codp: number, nomb: string, prec: string, regi: string, imag: string, base: string) {
    (this.codPlato = codp),
      (this.nombrePlato = nomb),
      (this.precioPlato = prec),
      (this.regionPlato = regi),
      (this.imagenPLato = imag),
      (this.imagenPlatoBase64 = base);
  }
}
