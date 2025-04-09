import { Image } from "antd";
import error from "../../../assets/error.png";
const NotFoundPage: React.FC = () => {
  return (
    <>
      <Image width={500} src={error} />
    </>
  );
};
export default NotFoundPage;
