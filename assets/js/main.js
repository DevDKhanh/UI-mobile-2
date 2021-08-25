(function(){
      function copy(text, icon) {
        var input = document.createElement('input');
        input.setAttribute('value', text);
        document.body.appendChild(input);
        input.select();
        var result = document.execCommand('copy');
        document.body.removeChild(input);
        Toast({
          type: "success",
          message: "Copied",
          duration: 3000
        });
        return result;
    }

    $('.info-item .btn-copy').click(function(){
      const text = this.parentElement.children[0].innerText;
      copy(text.trim());
    });
})();


//handle show info post
(function(){

  //news see more
  $('.news-item').click(function(){
    const main = document.querySelector('#show-more');
    const id = this.dataset.id||"Unknown";
    const htmls = `
    <p>
    <img src="https://images.pexels.com/photos/4206616/pexels-photo-4206616.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=350&w=380" alt="img" >
    <h2 class="title-more" >Title ${id}</h2>
    <span class="text">
    Lorem ipsum dolor sit amet, consectetur adi piscing elit. 
    Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, 
    vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec 
    congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. 
    Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a 
    lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. 
    In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. 
    Integer fringilla congue eros non fermentum. 
    Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.
    </span>
  </p>
    `
    if (main) {
      base(main, htmls);
    }
  });

  //service see more
  $('.service-item').click(function(){
    const main = document.querySelector('#show-more');
    const id = this.dataset.id||"Unknown";
    const htmls = `
    <p>
    <img src="https://images.pexels.com/photos/4206616/pexels-photo-4206616.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=350&w=380" alt="img" >
    <h2 class="title-more" >Title service ${id}</h2>
    <span class="text">
    Lorem ipsum dolor sit amet, consectetur adi piscing elit. 
    Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, 
    vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec 
    congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. 
    Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a 
    lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. 
    In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. 
    Integer fringilla congue eros non fermentum. 
    Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.
    </span>
  </p>
    `
    if (main) {
      base(main, htmls, true);
    }
  });

  function base(main, html, isHight) {
    const show = document.createElement('div');
    isHight?show.classList.add('tab-show-more', 'hight'):show.classList.add('tab-show-more');
    show.innerHTML = `
    <label class="btn-close">
      <ion-icon name="close-circle-outline"></ion-icon>
    </label>
    <div class="content-more">
      ${html}
    </div>
    `;
    main.appendChild(show);

    $('.tab-show-more .btn-close').click(function(){
      main.removeChild(show);
    });
  }
})();

//handle show img 
(function(){
  const listViews = document.querySelector('.album-list');

  const img = [
    'https://images.pexels.com/photos/6121448/pexels-photo-6121448.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/6205021/pexels-photo-6205021.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/7459424/pexels-photo-7459424.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/3064258/pexels-photo-3064258.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/7536223/pexels-photo-7536223.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/7536208/pexels-photo-7536208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/4030651/pexels-photo-4030651.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/7537887/pexels-photo-7537887.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/8995700/pexels-photo-8995700.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  ]

  const column1 = [], column2 = [];
  let indexImage = 0;

  img.map((img, index)=> {
    const i = {
      img: img,
      index: index
    }
    if (index%2==0) {
      column1.push(i);
    } else {
      column2.push(i);
    }
  });

  listViews.innerHTML = `${mapColumn(column1)} ${mapColumn(column2)}`

  $('.album-item').click(function(){
    indexImage = this.dataset.index;
    showImage(indexImage);
  });

  function showImage(index) {
    const main = document.querySelector('#show-more');
      const htmls = 
        `<div class="images-show">
            <img src="${img[index]}" alt="this is image"/>.
        </div>`;
      if (main) {
        base(main, htmls, true);
      }
  }

  function base(main, html) {
    const show = document.createElement('div');
    show.classList.add('tab-show-more');
    show.style.height = '100%';
    show.innerHTML = `
    <div class="control-img">
      <label class="btn-prev-img">
        <ion-icon name="arrow-back-circle-outline"></ion-icon>
      </label>
      <label class="btn-next-img">
        <ion-icon name="arrow-forward-circle-outline"></ion-icon>
      </label>
      <label class="btn-close-2">
        <ion-icon name="close-circle-outline"></ion-icon>
      </label>
    </div>
    <div class="content-more">
      ${html}
    </div>
    `;
    main.appendChild(show);
    handleImage();

    $('.tab-show-more .btn-close-2').click(function(){
      main.removeChild(show);
    });

  }

  function mapColumn(arr) {
    const htmls = arr.map(value => {
        return (`
        <div data-index="${value.index}" class="album-item">
          <div class="img-item">
            <img src="${value.img}" alt="">
          </div>
        </div>
        `);
    });

    return (`
    <div class="column">
      ${htmls.join('')}
    </div>
    `);
  }

  function handleImage() {
    const btnPrev = document.querySelector('.btn-prev-img');
    const btnNext= document.querySelector('.btn-next-img');
    const imgShow = document.querySelector('.images-show img');

    btnPrev.addEventListener('click', function(){
      if ( Number(indexImage)>0) {
        indexImage = Number(indexImage) - 1;
        imgShow.src = img[indexImage];
      }
    });

    btnNext.addEventListener('click', function(){
      if (indexImage < img.length-1) {
        indexImage = Number(indexImage) + 1;
        imgShow.src = img[indexImage];
      }
    });
  }
})();