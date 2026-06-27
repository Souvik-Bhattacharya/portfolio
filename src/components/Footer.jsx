function Footer() {
  return (
    <div>
      <div className="text-gray-600 pl-20 small:pl-10 web">&lt;footer&gt;</div>
      <div className="flex flex-col text-lg pl-32 small:pl-14 py-1 gap-1">
        <p>
          Designed & Developed by{" "}
          <span className="text-cyan inline-block at">Souvik Bhattacharya</span>
        </p>
        <div className="flex whitespace-nowrap">
          Thanks for visiting<span className="dot">...</span>
        </div>
      </div>
      <div className="text-gray-600 pl-20 small:pl-10 web">&lt;/footer&gt;</div>
      <div className="text-gray-600 pl-10 small:pl-5 web">&lt;/body&gt;</div>
      <div className="text-gray-600 web">&lt;/html&gt;</div>
    </div>
  );
}

export default Footer;
