const select = document.getElementById('maanden');
const resultaat = document.getElementById('oudenederlandse-namen');
const orden = [
  'eerste',
  'tweede',
  'derde',
  'vierde',
  'vijfde',
  'zesde',
  'zevende',
  'achtste',
  'negende',
  'tiende',
  'elfde',
  'twaalfde',
];
const oudeNamen = [
  'louwmaand',
  'sprokkelmaand',
  'lentemaand',
  'grasmaand',
  'bloeimaand',
  'zomermaand',
  'hooimaand',
  'oogstmaand',
  'herfstmaand',
  'winmaand',
  'slachtmaand',
  'wintermaand',
];

const huidigeNamen = [
  'januari',
  'februari',
  'maart',
  'april',
  'mei',
  'juni',
  'juli',
  'augustus',
  'september',
  'oktober',
  'november',
  'december',
];
function maandenVertalen() {
  let gekozenMaand = select.value,
    orde,
    oude,
    huidige;
  switch (gekozenMaand) {
    case '1':
      orde = orden[0];
      oude = oudeNamen[0];
      huidige = huidigeNamen[0];
      break;
    case '2':
      orde = orden[1];
      oude = oudeNamen[1];
      huidige = huidigeNamen[1];
      break;
    case '3':
      orde = orden[2];
      oude = oudeNamen[2];
      huidige = huidigeNamen[2];
      break;
    case '4':
      orde = orden[3];
      oude = oudeNamen[3];
      huidige = huidigeNamen[3];
      break;
    case '5':
      orde = orden[4];
      oude = oudeNamen[4];
      huidige = huidigeNamen[4];
      break;
    case '6':
      orde = orden[5];
      oude = oudeNamen[5];
      huidige = huidigeNamen[5];
      break;
    case '7':
      orde = orden[6];
      oude = oudeNamen[6];
      huidige = huidigeNamen[6];
      break;
    case '8':
      orde = orden[7];
      oude = oudeNamen[7];
      huidige = huidigeNamen[7];
      break;
    case '9':
      orde = orden[8];
      oude = oudeNamen[8];
      huidige = huidigeNamen[8];
      break;
    case '10':
      orde = orden[9];
      oude = oudeNamen[9];
      huidige = huidigeNamen[9];
      break;
    case '11':
      orde = orden[10];
      oude = oudeNamen[10];
      huidige = huidigeNamen[10];
      break;
    case '12':
      orde = orden[11];
      oude = oudeNamen[11];
      huidige = huidigeNamen[11];
      break;
  }
  resultaat.classList.remove('hidden');
  resultaat.innerHTML =
    'De ' +
    orde +
    ' maand van het jaar, oftwel ' +
    huidige +
    ' noemde men vroeger ook wel de ' +
    oude +
    '.';
}
