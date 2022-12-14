import type { NextPage } from 'next'
import { useEffect } from 'react'
import Paths from './paths'

const Home: NextPage = () => {
  useEffect(() => {
    

    const selectedImage = Paths.imagePaths[Math.floor(Math.random() * Paths.imagePaths.length)]
    const selectedYiyan = Paths.yiyan[Math.floor(Math.random() * Paths.yiyan.length)]

    console.log(selectedImage)
    console.log(selectedYiyan)

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
