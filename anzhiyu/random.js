var posts=["2024/12/02/自动驾驶汽车的未来：变革交通的科技-1/","2024/12/02/这是一篇人工智能文章/","2024/12/02/自动驾驶汽车的未来：变革交通的科技/","2024/12/01/这是一篇新的博文-1/","2024/11/30/这是一篇新的人工智能文章/","2024/11/30/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };