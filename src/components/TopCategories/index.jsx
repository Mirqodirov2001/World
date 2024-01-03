import './style.scss'
import Image from 'next/image'
import Link from 'next/link'
import hotels from '../../assets/icons/image 17.svg'
import tours from '../../assets/icons/image-5.svg'
import flights from '../../assets/icons/air.svg.svg'

const index = () => {
  return (
    <section id='top'>
      <div className=' container mx-auto mt-[30px] items-center'>
        <h1 className=' text-[32px] font-bold text-[#fff]'>Top categories</h1>
        <div className='flex gap-8 mt-[32px]'>
          <div className=' top items-center '>
            <div className='items-center'>
              <div className='gap flex items-center justify-center mt-1 gap-10'>
                <div>
                  <Image className=' ml-2 mb-1' src={hotels} alt='hotels img' />
                  <p className="text text-[#383fa5] text-[18px] text-['Helvetica'] font-normal">
                    <Link href='/hotels'>Hotels</Link>
                  </p>
                </div>
                <div>
                  <Image className=' ml-2 mb-1' src={tours} alt='tours img' />
                  <p className="text text-[#383fa5] text-[18px] text-['Helvetica'] font-normal">
                    <Link href='/tours'>Tours</Link>
                  </p>
                </div>
                <div>
                  <Image
                    className='img ml-2 mb-1'
                    src={flights}
                    alt='flights img'
                  />
                  <p className="text text-[#383fa5] text-[18px] text-['Helvetica'] font-normal">
                    <Link href='/flights'>Flights</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default index
