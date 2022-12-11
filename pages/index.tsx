import type { NextPage } from 'next'


const bgImg = '../1.jpg'
const Home: NextPage = () => {
  return (
    <>
      {/* <div className="justify-center items-center  p-0 my-[50%]">
        <span className="font-['Noto Sans SC'] font-medium pl-9 absolute top-1/2 left-[15%] mt-[-50px] ml-[-50px]">
          Hi, I am scooo.
        </span>
      </div> */}
      <div className='bg-contain bg-center'>

      </div>
      {/* style={{ backgroundImage: `url(${bgImg})` }} */}
      {/* style={{ backgroundImage: `url(${bgImg})` }} */}
      {/* 现在可以使用两种方法设置背景图片了 */}
      <div className='h-screen bg-cover bg-no-repeat bg-center grid content-center justify-items-center bg-background'style={{ backgroundImage: `url(${bgImg})` }} >
        <div className='text-[100px] text-white'>
        花魂鸟魂总难留,鸟自无言花白羞。
          </div>
      </div>

    </>
  )
}

export default Home
