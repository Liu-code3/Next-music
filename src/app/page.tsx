import styles from "./page.module.scss";

import TopSwiper from "@/components/top-swiper";
import TabCategory from '@/components/tab-category';
import Recommends from "@/components/recommends";
import ProductList from "@/components/product-list";


export const metadata = {
    title: '云音乐商城 - 音乐购有趣',
    keywords: '数码影音，beats耳机，击音耳机，漫步者，akg，潮牌，T恤，音乐生活，食品，服饰配件，礼品，礼物，礼盒，鲜花，ip周边，云音乐，商城，云贝',
    description: '云音乐商城是专注于音乐场景打造的音乐购物平台，包含音乐人周边、3c影音数码、音乐市集等，和我们一起让音乐购有趣，给生活加点料',
    viewport: {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 1,
    },
    // 使用了 favicon.ico 网站图标 就不需要写如下的了
    // icons: {
    //   icon: '/favicon.ico',
    // },
};

export default function Home() {
  return (
    <div className={styles.home}>
        <TopSwiper />
        <TabCategory />
        <Recommends />

        <div className="wrapper">
            <ProductList />
        </div>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
       底部
      </footer>
    </div>
  );
}
