function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Avnner Costa com um soriso de canto de boca, usando camisa preta em um fundo roxo"
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Avnner Costa com um soriso de canto de boca, usando uma camisa branca e um fundo azul royal"
    )
  }
}
