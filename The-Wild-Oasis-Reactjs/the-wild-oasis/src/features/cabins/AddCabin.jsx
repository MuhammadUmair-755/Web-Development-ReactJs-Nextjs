import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="new-cabin">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="new-cabin">
          <CreateCabinForm />
        </Modal.Window>       
      </Modal>
    </div>
  );
}

//   function AddCabin() {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div>
//       <Button onClick={() => setIsOpen((open) => !open)}>Add new cabin</Button>
//       {isOpen && (
//         <Modal onCloseModal={() => setIsOpen(false)}>
//           <CreateCabinForm  onCloseModal={() => setIsOpen(false)}/>
//         </Modal>
//       )}
//     </div>
//   );
// }
export default AddCabin;
