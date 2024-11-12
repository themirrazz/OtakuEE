(function () {
    var locales = ['en-US','en-GB','fr','ja','zh-CN','zh-HK','kr','pt','il','de','ar'];
    setInterval(function () {
        Otaku.UI.RotateLeft(15);
        Otaku.Locales.Set(locales[Math.floor(Math.random()*locales.length)]);
    });
})();
