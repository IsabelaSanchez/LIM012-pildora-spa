export default () => {
    const viewHome = `
    <h2 class="text-center">¡Bienvenido a nuestra página!</h2>
    <figure class="text-center">
      <img class="image" src="https://wexthis.com/wp-content/uploads/2015/09/cat-head-in-a-box-animated.gif" alt="Pusheen codeando">
    </figure>`;
    const divElem = document.createElement('div');
    divElem.innerHTML = viewHome;
    return divElem
};