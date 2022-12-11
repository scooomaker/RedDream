import type { NextPage } from 'next'
import { useEffect } from 'react'

let selectedImage = '../1.jpg'
const Home: NextPage = () => {
  useEffect(() => {
    // 获取所有图片的路径
    const imagePaths = [
      '../1.jpg',
      '../2.jpg',
      '../3.jpg',
      '../4.jpg',
      '../5.jpg',
      '../6.jpg',
      '../7.jpg',
      '../8.jpg',
      '../9.jpg',

    ]

    // 随机选择一张图片
    selectedImage = imagePaths[Math.floor(Math.random() * imagePaths.length)]

    console.log(selectedImage)

    // 使用选定的图片作为背景图片
     document.body.style.backgroundImage = `url(${selectedImage})`
  }, [])

  return (
    <>
      {/* <div className="justify-center items-center  p-0 my-[50%]">
        <span className="font-['Noto Sans SC'] font-medium pl-9 absolute top-1/2 left-[15%] mt-[-50px] ml-[-50px]">
          Hi, I am scooo.
        </span>
      </div> */}

      {/* style={{ backgroundImage: `url(${bgImg})` }} */}
      {/* style={{ backgroundImage: `url(${bgImg})` }} */}
      {/* 现在可以使用两种方法设置背景图片了 */}

      {/* bg-cover bg-no-repeat bg-center */}
      <div className="h-screen grid content-center justify-items-center">
        <div className='text-[100px] text-white'>
          花魂鸟魂总难留,鸟自无言花白羞。
        </div>
      </div>

    </>
  )
}

export default Home
