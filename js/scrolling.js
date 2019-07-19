$.scrollify({
    section : ".scrollify",
    sectionName : "section-name",
    interstitialSection : "",
    easing: "easeOutExpo",
    scrollSpeed: 50,
    offset : 0,
    scrollbars: false,
    standardScrollElements: "",
    setHeights: true,
    overflowScroll: true,
    updateHash: true,
    touchScroll:true,
    before:function() {},
    after:function() {},
    afterResize:function() {},
    afterRender:function() {}
  });

  let viewport = document.querySelector('.exp-content');
  let content = viewport.querySelector('.card-holder');

  let sb = new ScrollBooster({
      viewport,
      content,
      mode: 'x',
      onUpdate: (data)=>{
          content.style.transform =`translateX(${-data.position.x}px)`
      }
  });
