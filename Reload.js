class reloadBtn {
  constructor({ btn }) {
    this.button = btn;
    this.button.addEventListener("click", this.handleReloadGame);
  }

  handleReloadGame = () => {
    window.location.reload();
  };
}

const reload = new reloadBtn({ btn: document.getElementById("reload") });
