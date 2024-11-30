// import landingImage from ''
function Landing() {
  return (
    <div className="relative before:absolute before:left-0 before:-top-10 before:w-full before:h-full before:bg-[#ececec] before:origin-top-left before:-skew-y-6 before:-z-[1] before-opacity-50">
      <div className="min-h-[calc(100vh-72px)] flex items-center pb-32">
        <div className="flex-grow ">
          <h1>Welcome, To Elzero World</h1>
          <p>
            Here Iam gonna share everything about my life. Books Iam reading,
            Games Iam Playing, Stories and Events
          </p>
        </div>
        <div className="image">
          <img src="/imgs/landing-image.png" alt="" />
        </div>
      </div>
      <a href="#articles" className="go-down">
        <i className="fas fa-angle-double-down fa-2x"></i>
      </a>
    </div>
  );
}

export default Landing;
