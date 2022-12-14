import type { NextPage } from 'next'
import { useEffect } from 'react'
import { imagePaths, yiyan } from './paths'

const Home: NextPage = () => {
  useEffect(() => {
    

    const selectedImage = imagePaths[Math.floor(Math.random() * imagePaths.length)]
    const selectedYiyan = yiyan[Math.floor(Math.random() * yiyan.length)]

    console.log(selectedImage)
    console.log(selectedYiyan)

    // 使用选定的图片作为背景图片
    document.body.style.backgroundImage = `url(${selectedImage})`

    let myElements = document.getElementsByClassName("yiyan");
    if (myElements.length > 0) {
      let firstElement = myElements[0];
      firstElement.innerHTML = selectedYiyan;
    }

  }, [])

  return (
    <>

      <div className="h-screen grid content-center justify-items-center">
        <div className='yiyan text-[5vw] text-white'>

        </div>
        <div className='text-white text-[2vw]'>
          -----红楼梦
        </div>
      </div>

    </>
  )
}

export default Home
