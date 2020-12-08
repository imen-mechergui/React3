import imen from "./foto.jpg";
function profilPhoto() {
  return (
    <div className="rpofilPhoto" 
      >
<img src={imen} alt="foto" style={{
      height:'250px',
      Width:'250px'
      }} />
</div>
  );
}
export default profilPhoto