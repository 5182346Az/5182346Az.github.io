(() => {
  const copyText = async (text) => {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return;
    }
    const input = document.createElement("textarea");
    input.value = text;
    input.setAttribute("readonly", "");
    input.style.position = "fixed";
    input.style.opacity = "0";
    document.body.appendChild(input);
    input.select();
    const copied = document.execCommand("copy");
    input.remove();
    if (!copied) throw new Error("Clipboard unavailable");
  };

  document.addEventListener("click", async (event) => {
    const button = event.target.closest("[data-share-copy]");
    if (!button) return;
    const platform = button.dataset.sharePlatform || "平台";
    const status = document.getElementById("share-platform-status");
    try {
      await copyText(button.dataset.shareUrl || window.location.href);
      if (status) status.textContent = `链接已复制，可以粘贴到${platform}分享。`;
      button.classList.add("share-copied");
      window.setTimeout(() => button.classList.remove("share-copied"), 1400);
    } catch {
      if (status) status.textContent = "复制失败，请手动复制浏览器地址栏中的链接。";
    }
  });
})();
