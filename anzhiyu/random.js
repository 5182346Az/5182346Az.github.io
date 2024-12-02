var posts=["2024/11/30/hello-world/","2024/11/30/这是一篇人工智能文章/","2024/11/30/这是一篇新的人工智能文章/","2024/12/01/这是一篇新的博文-1/","2024/12/01/这是一篇新的博文/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };