export default function swDev() {
  const url = `${process.env.PUBLIC_URL}/sw.js`;
  navigator.serviceWorker
    .register(url)
    .then((result) => {
      console.log(result, "response");
    })
    .catch((err) => {
      console.log(err.message);
    });
}
