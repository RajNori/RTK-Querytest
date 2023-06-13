import {useRemovePhotoMutation} from "../store";
import {GoTrashcan} from "react-icons/go";

function PhotosListItem({photo}) {
  const [removePhoto] = useRemovePhotoMutation();
  const handleRemovePhoto = () => {
    removePhoto(photo);
  };
  return (<div className="relative cursor-pointer m-2" onClick={handleRemovePhoto}>
   <img className=" rounded-lg drop-shadow-2xl h-20 w-20" src={photo.url} alt="decoration"/>
   <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-70">
  <GoTrashcan className="text-red-500 text-2xl" />
   </div>
   </div>);
}
export default PhotosListItem;
