import { ref, watchEffect } from 'vue'
import { toValue } from 'vue'

export function useFetch(url) {
  const data = ref(null)
  const error = ref(null)
  const isLoading = ref(true)

  watchEffect(async () => {
    isLoading.value = true
    try {
      data.value = await fetch(toValue(url)).then((res) => res.json())
      error.value = null
    } catch (err) {
      error.value = err.message
      data.value = null
    } finally {
      isLoading.value = false
    }
  })

  return { data, error, isLoading }
}
