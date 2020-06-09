export default () => {
    const viewCatalogo =  `
    <h2 class="text-center">Gatos</h2>
    <figure>
      <img src="https://media.tenor.com/images/47b81948be5023555549c01d88ae3289/tenor.gif" alt="Gato">
      <img src="https://media.tenor.com/images/c50ca435dffdb837914e7cb32c1e7edf/tenor.gif" alt="Gato">
      <img src="https://media.giphy.com/media/H4DjXQXamtTiIuCcRU/giphy.gif" alt="Gato">
      <img src="https://cdn.shopify.com/s/files/1/2178/9625/files/Waveing_cat_grande.gif?v=1525911823" alt="Gato">
      <img src="https://i.pinimg.com/originals/ec/40/fe/ec40fe64121c9fbcd3d0086fe8669811.gif" alt="Gato">   
    </figure>`;
    const divElem = document.createElement('div');
    divElem.innerHTML = viewCatalogo;
    return divElem
};