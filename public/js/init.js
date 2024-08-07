var sakura

function sakuraGenerate() {
  sakura = new Sakura('body')
  window.sakura = sakura
}

document.addEventListener('DOMContentLoaded', () => {
  clickEffect()
  sakuraGenerate()
})
