import { getCookie } from 'cookies-next';

const darkTheme = getCookie("theme") == "dark" ? true : false;

export default darkTheme;