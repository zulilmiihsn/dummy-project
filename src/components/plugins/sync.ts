import { getCookie } from 'cookies-next';

export const darkTheme = getCookie("theme") == "dark" ? true : false;