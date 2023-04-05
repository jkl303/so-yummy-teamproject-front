const baseTheme = {
    colors: {
        backgroundSec: 'ECECEC', //Фон підложка
        formBackground: '#2A2C36', //Registration, Sign In background
        accentColor: '8BAA36', //Green - logo, btn,  
        white: '#FAFAFA', // Білий
        darkGrey: '#23262A', // Text, 
        lightGrey: 'D9D9D9', // CancelBtn
        bleackGeryTxt: '#787878', // (змніюється % pass through)  404, search, випадаючі списки,
        wightGeryTxt: '#FAFAFA', // (змніюється % pass through) registration form, signIn form, Categories
        },
  };

const lightTheme = {
    ...baseTheme,
    colors: {
      background: '#FAFAFA', //Білий фон
      footerBgd: '#22252A', //Темно-сірий footer, 
      ingredientBcg: '#EBF3D4', //Світло-зелений ingridients background, menu background (tablet, mobile)

      greyToGreen: '#22252A', //Cірий в зелений
      greenToGrey: '#8BAA36', //Зелений в сірий
      greenToWhite: '#8BAA36', //Зелений в білий 
      whiteToGreen: '#FAFAFA', //Білий в зелений
      whiteToGrey: '#FAFAFA', //Білий в сірий

      textColorGrey: '#23262A', // Основний темно-сірий фон тексту
      headers: '#001833',
      copyrightTxt: 'rgba (34, 37, 42, 0,5)', //copyright ©, 404 messege, search messege
      },
  };
  
  const darkTheme  = {
    ...baseTheme,
    colors: {
      background: '#2A2C36', //Темно-сірий фон
      footerBgd: '#8BAA36', //Зелений footer, 
      ingredientBcg: '#2A2C36', //Темно-сіоий ingridients background, menu background (tablet, mobile)

      greyToGreen: '#8BAA36', //Cірий в зелений
      greenToGrey: '#22252A', //Зелений в сірий
      whiteToGreen: '#8BAA36', //Білий в зелений
      whiteToGrey: '#22252A', //Білий в сірий
      greenToWhite: '#FAFAFA', //Зелений в білий 

      textColorGrey: '#FAFAFA', //Основний білий фон тексту
      headers: '#FAFAFA',
      copyrightTxt: 'rgba (250, 250, 250, 0,5)', //copyright ©, 404 messege, search messege
    },
  };


    

