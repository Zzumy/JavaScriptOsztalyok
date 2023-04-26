import Szemely from "./Szemely.js";
$(function () {
  const szuloElem = $(".tarolo");
  const szemely1 = new Szemely("Béla", 1969, szuloElem);
  const szemely2 = new Szemely("Mucika", 1931, szuloElem);
  szemely2.nev = "Jolán";
  
});
