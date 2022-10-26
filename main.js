'use strict';

let addStrikeThrough = () => {

}

let setImage = (id, url) => {
  let image = document.querySelector(`#${id}`);
  image.source = url;
}