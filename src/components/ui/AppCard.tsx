import {
  FaAndroid,
  FaAppStoreIos,
} from "react-icons/fa";
interface AppCardProps {
  label: string;
  icon: React.ReactNode;
  android?: string;
  ios?: string;
}
const AppCard = ({ label, icon, android, ios }: AppCardProps) => (
  <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center ">
    <div className="">
      {icon}
    </div>
    <p className="font-semibold text-blue-950 text-xl mt-2">{label}</p>
    <div className="flex flex-col items-center mt-1 justify-center ">
      {android && (
        <a
          href={android}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-green-600 hover:underline text-base font-semibold"
        >
          <FaAndroid className="mr-2 text-xl" />
          Android
        </a>
      )}
      {ios && (
        <a
          href={ios}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center mt-1 text-blue-600 hover:underline text-base font-semibold"
        >
          <FaAppStoreIos className="mr-2 text-xl" />
          iOS
        </a>
      )}
    </div>
  </div>
);
export default AppCard;