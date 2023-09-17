import {AiOutlineMenu} from 'react-icons/ai'

function Nav() {
  return (
    <nav className="lg:w-full lg:h-full xs:w-full xs:h-20 flex sticky top-0 z-10 bg-white" style={{ zIndex: 100 }} >
        <div className="w-1/2 h-20 flex lg:items-center lg:justify-center xs:items-center xs:justify-center">
            <p className="font-bold font-oswald text-xl">BH CREATIVE</p>
        </div>
        <div className="w-1/2 h-20 flex lg:items-center lg:justify-center xs:items-center xs:justify-center">
            <AiOutlineMenu size={20} />
            <p className='font-oswald pl-2 '>MENU</p>
        </div>
    </nav>
  )
}

export default Nav