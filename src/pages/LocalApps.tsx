import yassir from "../assets/images/local_apps/yassir.png";
import kool from "../assets/images/local_apps/kool.png";
import menutium from "../assets/images/local_apps/menutium.png";
import inDrive from "../assets/images/local_apps/indrive.png";
import monoprix from "../assets/images/local_apps/monoprix.png";
import mg from "../assets/images/local_apps/mg.png";
import dabchy from "../assets/images/local_apps/dabchy.png";
import AppCard from "@/components/ui/AppCard";
import Navbar from "@/components/ui/Navbar";
const LocalApps = () => {
  const apps = [
    {
      label: "Yassir",
      icon: (
        <img src={yassir} alt="Yassir" className="w-[90px] rounded-full object-contain" />
      ),
      android:
        "https://play.google.com/store/apps/details?id=com.yatechnologies.yassir_rider",
      ios: "https://apps.apple.com/tn/app/yassir/id1239926325",
    },
    {
      label: "Kool",
      icon: <img src={kool} alt="Kool" className="w-[90px] rounded-full object-contain" />,
      android:
        "https://play.google.com/store/apps/details?id=com.mohamedhadiji.kool",
      ios: "https://apps.apple.com/us/app/kool-delivery/id1545409489",
    },
    {
      label: "Menutium",
      icon: (
        <img
          src={menutium}
          alt="Menutium"
          className="w-[90px] rounded-full object-contain"
        />
      ),
      android:
        "https://play.google.com/store/apps/details?id=project.iobird.menutium",
      ios: "https://apps.apple.com/us/app/menutium/id1170811326",
    },

    {
      label: "inDrive",
      icon: (
        <img src={inDrive} alt="inDrive" className="w-[90px] rounded-full object-contain" />
      ),
      android:
        "https://play.google.com/store/apps/details?id=sinet.startup.inDriver",
      ios: "https://apps.apple.com/us/app/indrive-save-on-city-rides/id780125801",
    },
    {
      label: "Monoprix",
      icon: (
        <img
          src={monoprix}
          alt="Monoprix"
          className="w-[90px] rounded-full object-contain"
        />
      ),
      android:
        "https://play.google.com/store/apps/details?id=com.apeiron.monoprix",
      ios: "https://apps.apple.com/us/app/m-monoprix/id480953369",
    },
    {
      label: "MG",
      icon: <img src={mg} alt="MG" className="w-[90px] rounded-full object-contain" />,
      android:
        "https://play.google.com/store/apps/details?id=com.magasingeneral.mymg",
      ios: "https://apps.apple.com/us/app/mymg-tn/id1611983617",
    },
    {
      label: "Dabchy",
      icon: (
        <img src={dabchy} alt="Dabchy" className="w-[90px] rounded-full object-contain" />
      ),
      android:
        "https://play.google.com/store/apps/details?id=com.dabchy.mobile.dabchyapp",
      ios: "https://apps.apple.com/us/app/dabchy/id1207403847",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="mx-6 mt-8 flex flex-col ">
        <h1 className=" underline text-black font-poppins font-semibold text-[22px]">
          Local Apps
        </h1>

        {/* apps */}
        <div className="mt-6 w-full  grid grid-cols-2 gap-5">
          {apps.map((app, idx) => (
            <AppCard key={idx} {...app} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocalApps;
