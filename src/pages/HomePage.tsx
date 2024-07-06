import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";
const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-slate-200 dark:bg-slate-400 rounded-lg shadow-md py-6 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl  font-bold tarcking-tight text-orange-500">
          Tuck into a takeway today
        </h1>
        <span className="text-xl">Food is just click away</span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage} alt="landingImage" />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tarcking-tighter">
            Order take away even faster
          </span>
          <span>
            Download the MalharEats App Ordering and personalised recomandations
          </span>
          <img src={appDownloadImage} alt="appDownloadImage" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
