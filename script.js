const searchBox = document.getElementById(`search-item`);

searchBox.onkeyup = () => {
  const search = searchBox.value.toUpperCase();
  const pList = document.getElementById(`product-list`);
  const product = document.querySelectorAll(`.product`);
  const pName = pList.getElementsByTagName(`h2`);

  for (let i = 0; i < pName.length; i++) {
    let match = product[i].getElementsByTagName(`h2`)[0];

    if (match) {
      let textValue = match.textContent || match.innerHTML;

      if (textValue.toUpperCase().indexOf(search) > -1) {
        product[i].style.display = "";
      } else {
        product[i].style.display = "none";
      }
    }
  }
};
