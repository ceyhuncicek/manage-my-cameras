export default function getAuthKey() {
  return window.btoa(`${process.env.VUE_APP_API_KEY}:${process.env.VUE_APP_SECRET}`);
}
