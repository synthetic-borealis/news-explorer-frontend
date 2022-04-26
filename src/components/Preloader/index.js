import "./Preloader.css";

function Preloader() {
  const preloaderClassName = "Preloader";
  const circleClassName = "Preloader__circle";

  return (
    <section className={preloaderClassName}>
      <div className={circleClassName} />
    </section>
  );
}

export default Preloader;
