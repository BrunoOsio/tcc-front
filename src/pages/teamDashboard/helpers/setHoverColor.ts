export const setHoverColor = (index: number, isMediumScreen: boolean) => {
  const position = index + 1;

  const formula = isMediumScreen ? position % 4 : position % 6;


  if (isMediumScreen) {
    switch(formula) {
      case 1:
        return "rgb(19, 117, 232)";
      case 2:
        return "rgb(23, 97, 217)"
      case 3:
        return "rgb(25, 75, 201)";
      default:
        return "rgb(19, 117, 232)";
    }
  } else {
    switch(formula) {
      case 1:
        return "rgb(19, 117, 232)";
      case 2:
        return "rgb(21, 106, 224)";
      case 3:
        return "rgb(23, 97, 217)";
      case 4:
        return "rgb(25, 85, 209)";
      case 5:
        return "rgb(25, 75, 201)";
      default: 
        return "rgb(19, 117, 232)";
    }
  }
}