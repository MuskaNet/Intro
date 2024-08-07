import { ref } from 'vue'

function loadingStart() {
  loading.value = true
}
function loadingEnd() {
  loading.value = false
}

let loading = ref(true)

const progressbar = {
  start: loadingStart,
  end: loadingEnd,
  loading: loading
}

export default progressbar
