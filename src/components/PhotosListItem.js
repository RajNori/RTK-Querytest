function PhotosListItem({photo}) {
  return (<div>
   <img className="h-20 w-20" src={photo.url} alt="decoration"/>
   </div>);
}
export default PhotosListItem;
