function Modal({ className, children }) {
  return (
    <section className="absolute top-0 left-0 flex justify-center items-center w-screen h-screen z-20 bg-black bg-opacity-40">
      <div className={className}>{children}</div>
    </section>
  );
}

export default Modal;
