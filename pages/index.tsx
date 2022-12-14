import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'

const imagePaths = [
  '../pc/1.jpg',
  '../pc/2.jpg',
  '../pc/3.jpg',
  '../pc/4.jpg',
  '../pc/5.jpg',
  '../pc/6.jpg',
]


const yiyan = [
  ' 任凭霸水三千,我只取一敬饮 ',
  ' 花魂鸟魂总难留,鸟自无言花白羞 ',
  ' 嫩寒锁梦因春冷,芳气袭人是酒香 ',
  ' 一场曲梦同谁近,千古情人独我演 ',
  ' 寒塘渡鹤影,冷月葬花魂 ',
  ' 身后有余忘缩手,眼前无路想回头 ',
  ' 纵然生得好皮囊,腹内原来草莽 ',
  ' 万两黄金容易得,知心一个也难求 ',
  ' 无风仍脉脉,不雨亦潇滩 ',
  ' 一朝春尽红颜老,花落人亡两不知 ',
  ' 假作真时真亦假,无为有处有还无 ',
  ' 世事洞明皆学问,人情练达即文章 ',
  ' 莫失莫忘,仙寿恒昌不离不弃,芳龄永继 ',
  ' 花谢花飞飞满天,红消香断有谁怜? ',
  ' 任凭弱水三千,我只取一瓢饮 ',
  ' 看破的通入空门,痈迷的妄送性命 ',
  ' 王在楼中求善价,钗于套内待时飞 ',
  ' 黄金万两容易得,知心一个也难求 ',
  ' 幽微灵秀地,无可奈何天 ',
  ' 我惭携宝剑,只为看山来 ',
  ' 文死谏,武死战 ',
  ' 王在楼中求善价,钗于在内待时飞 ',
  ' 如花美眷,怎敌似水流年 ',
  ' 白骨如由忘姓氏,无非公子与红妆 ',
  ' 草木也知愁,韶华竞白头! ',
  ' 弱水三千只取一瓢饮,沧海万项唯系一江潮 ',
  ' 未若锦斐收艳骨,一杯净土拖风流 ',
  ' 闲处光阴易过 ',
  ' 背纱窗下,我本无缘黄土境中,卿何薄命 ',
  ' 焦首朝朝还暮暮,煎心日日复年年 ',
  ' 花影不离身左右,乌声只在耳东西 ',
  ' 机关算尽太聪明,反算了期卿性命 ',
  ' 吟成豆落才犹艳,睡足除藤梦也香 ',
  ' 孤标做世借谁隐?一样开花为底迟? ',


]

const Home: NextPage = () => {
  useEffect(() => {
    

    const selectedImage = imagePaths[Math.floor(Math.random() * imagePaths.length)]
    const selectedYiyan = yiyan[Math.floor(Math.random() * yiyan.length)]

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
