class Szemely {
  #szuletesiNev;
  constructor(nev, szulDat, szuloElem) {
    this.nev = nev;
    this.szulDat = szulDat;
    this.setSzuletesiNev(nev);

    szuloElem.append(`
      <div class = "szemely">
        <h3>${this.#szuletesiNev}</h3>
        <p>${this.kor()}</p>
      </div>
    `);
    this.szemelyElem = $(".szemely:last-child");
    console.log(this.szemelyElem);
    this.szemelyElem.on("click", function () {
      console.log(this.nev); //html elem megjelenítése lesz function esetén
    });
    this.szemelyElem.on("click", () => {
      console.log(this.nev); //objektum elem megjelenítése lesz "=>" esetén
    });
  }

  getSzuletesiNev() {
    return this.#szuletesiNev;
  }
  setSzuletesiNev(ujNev) {
    this.#szuletesiNev = ujNev;
  }

  kor() {
    const d = new Date();
    let year = d.getFullYear();
    let aktualisKor = year - this.szulDat;
    return aktualisKor;
  }
}

export default Szemely;
