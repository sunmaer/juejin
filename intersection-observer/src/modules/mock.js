import Mock from 'mockjs';

Mock.setup({
  timeout: '10-100', // 设置请求延时时间
});

const getTodoList = () => {
  const list = [];

  for (let i = 0; i < 10; i++) {
    const data = {
      id: i,
      cover: [
        'https://puui.qpic.cn/vcover_hz_pic/0/mzc00200q06w7zx1585712510429/0',
        'https://i.gtimg.cn/qqlive/img/jpgcache/files/qqvideo/hori/m/mzc002001pvxwzy_big.jpg',
        'https://puui.qpic.cn/vcover_hz_pic/0/mzc00200ral2qx71585817879441/0',
        'https://i.gtimg.cn/qqlive/img/jpgcache/files/qqvideohori/i/i200hs4ip5a6u7a_big.jpg',
        'https://i.gtimg.cn/qqlive/img/jpgcache/files/qqvideo/hori/v/vbb35hm6m6da1wc_big.jpg',
      ][Math.round(Math.random() * 4)],
      title: Mock.Random.ctitle(4, 16),
      subtitle: Mock.Random.cparagraph(1, 3),
      date: Mock.Random.datetime(),
    };

    list.push(data);
  }

  return {
    list,
  };
};

Mock.mock('list.json', /post|get/i, getTodoList);
