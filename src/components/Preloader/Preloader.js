function Preloader({ isLoading }) {
  const whenLoading = isLoading ? "preloader__visible" : "preloader__hidden";
  return (
    <span className="preloader">
      <i className={whenLoading}></i>
    </span>
  );
}
export default Preloader;
