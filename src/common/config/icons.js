import { AiFillEyeInvisible, AiFillEye, AiOutlineSave } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { TfiUser } from 'react-icons/tfi';
import { BiArea } from 'react-icons/bi';
import { GiDesk, GiBlockHouse } from 'react-icons/gi';
import {
  FaHome,
  FaImage,
  FaWarehouse,
  FaParking,
  FaStoreAlt,
  FaBed,
  FaBath,
  FaTrash,
  FaSignal,
  FaInfoCircle,
  FaShareAlt,
  FaChair,
  FaHeart,
  FaPaperPlane,
  FaBuilding,
  FaShieldAlt,
  FaFileInvoiceDollar,
  FaCloudUploadAlt,
  FaSms,
  FaViber,
  FaWhatsapp,
  FaListAlt,
} from 'react-icons/fa';
import { RiImageEditFill, RiBuilding2Line } from 'react-icons/ri';
import { BsFillGridFill } from 'react-icons/bs';
import {
  MdMenu,
  MdOutlineAddBusiness,
  MdBedroomParent,
  MdLocationOn,
  MdEdit,
  MdEmail,
  MdOutlineCancel,
  MdCall,
} from 'react-icons/md';
import { LogoIcon } from './svgIcons';

const icons = {
  default: LogoIcon,
  showPassword: AiFillEye,
  hidePassword: AiFillEyeInvisible,
  google: FcGoogle,
  edit: MdEdit,
  save: AiOutlineSave,
  image_edit: RiImageEditFill,
  add_property: MdOutlineAddBusiness,
  apartment: FaHome,
  office: GiDesk,
  maisonette: RiBuilding2Line,
  condo: GiBlockHouse,
  shop: FaStoreAlt,
  land: FaImage,
  warehouse: FaWarehouse,
  parking: FaParking,
  beds: FaBed,
  bathrooms: FaBath,
  rooms: MdBedroomParent,
  delete: FaTrash,
  location: MdLocationOn,
  floors: FaSignal,
  squareFeet: BiArea,
  email: MdEmail,
  info: FaInfoCircle,
  social: FaShareAlt,
  furnished: FaChair,
  favorite: FaHeart,
  feature_quality: FaShieldAlt,
  feature_find: FaPaperPlane,
  feature_update: FaBuilding,
  feature_low_cost: FaFileInvoiceDollar,
  upload: FaCloudUploadAlt,
  cancel: MdOutlineCancel,
  sms: FaSms,
  call: MdCall,
  viber: FaViber,
  whatsApp: FaWhatsapp,
  gridView: BsFillGridFill,
  listView: FaListAlt,
  burger_menu: MdMenu,
  profile: TfiUser,
};

export default icons;
