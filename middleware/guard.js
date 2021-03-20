export default function ({ store, route, redirect, app }) {
  const token = app.$cookies.get('access_token');
  let location = '';
  if (app.i18n.locale === 'en') {
    location = '/en';
  }
  if (
    token &&
    (route.path.includes('/login') || route.path.includes('/registration'))
  ) {
    return redirect(`${location}`);
  }
  if (!token) {
    if (route.path === '/') {
      return redirect('/login');
    }
    if (route.path === location) {
      return redirect(`${location}/login`);
    }
  }
}
