function getSeason() {
  month = document.forms.date.month.value.toLowerCase();
  season = 'unknown';
  switch(month) {
      case 'dec':
      case 'december':
      case '12':
      case 'jan':
      case 'january':
      case '1':
      case 'feb':
      case 'february':
      case '2':
          season = 'winter';
      break;
      case 'mar':
      case 'march':
      case '3':
      case 'apr':
      case 'april':
      case '4':
      case 'may':
      case '5':
          season = 'spring';
      break;
      case 'jun':
      case 'june':
      case '6':
      case 'jul':
      case 'july':
      case '7':
      case 'aug':
      case 'august':
      case '8':
          season = 'summer';
      break;
      case 'sep':
      case 'september':
      case '9':
      case 'oct':
      case 'october':
      case '10':
      case 'nov':
      case 'november':
      case '11':
          season = 'autumn';
      break;
  }
}

