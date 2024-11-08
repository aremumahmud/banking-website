import { MdOutlinePerson3, MdHandshake } from 'react-icons/md'
import {FaStackExchange}  from 'react-icons/fa6'


function Bars() {
  return (
    <div className="bars">
      <div className="item">
        <div className="icon"><MdOutlinePerson3 size={50}/></div>
        <p className="title">Community</p>
        <p className="text">Must explain to you how work mistaken give you complete guide they cannot foresee pain.</p>
          </div>
                <div className="item">
        <div className="icon"><MdHandshake  size={50}/></div>
        <p className="title">Commitment</p>
        <p className="text">Business it will frequently occur that pleasures have to be repudiated and annoyances accepted.</p>
          </div>
                <div className="item">
        <div className="icon"><FaStackExchange size={50} /></div>
        <p className="title">Consistency</p>
        <p className="text">Being able to do what we like best every pleasure is to be welcomed and pain avoided but in certain.</p>
      </div>
    </div>
  );
}

export default Bars;
