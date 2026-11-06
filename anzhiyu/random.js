var posts=["2026/11/07/Claude-Code-Codex-Seedance-AI视频制作全流程/","2026/11/07/2026-11-07-Edgetunnel2/","2024/12/02/自动驾驶汽车的未来：变革交通的科技/","2024/12/02/这是一篇人工智能文章/","2024/11/30/这是一篇新的人工智能文章/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };