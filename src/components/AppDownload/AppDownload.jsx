import { assets } from "../../assets/frontend_assets/assets"

const AppDownload = () => {
  return (
    <div id="mobile-app" className="app-download mx-auto my-auto mt-[80px] mb-[50px] text-3xl items-center font-bold">
        <p className="text-center">For Better Experience Download <br /> Tomato App</p>
        <div className="app-download-platforms flex justify-center gap-10 mt-[30px]">
            <img className="w-[120px] max-w-[180px] transition duration-200 pointer hover:transform hover:scale-110" src={assets.play_store} alt="" />
            <img className="w-[120px] max-w-[180px] transition duration-200 pointer hover:transform hover:scale-110" src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default AppDownload  