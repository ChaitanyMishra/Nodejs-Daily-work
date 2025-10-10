document.addEventListener('DOMContentLoaded', () => {
  const createForm = document.getElementById('create-form')
  const urlInput = document.getElementById('url-input')
  const createResult = document.getElementById('create-result')

  const analyticsForm = document.getElementById('analytics-form')
  const analyticsId = document.getElementById('analytics-id')
  const analyticsResult = document.getElementById('analytics-result')

  createForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const url = urlInput.value.trim()
    if (!url) return
    createResult.textContent = 'Creating...'
    try {
      const res = await fetch('/url', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      })
      const data = await res.json()
      if (!res.ok) throw data
      createResult.innerHTML = `Short id: <strong>${data.id}</strong><br/>Open: <a href="/url/${data.id}" target="_blank">/url/${data.id}</a>`
    } catch (err) {
      createResult.textContent = err?.error || err?.message || 'Error creating short URL'
    }
  })

  analyticsForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const id = analyticsId.value.trim()
    if (!id) return
    analyticsResult.textContent = 'Fetching...'
    try {
      const res = await fetch(`/url/analytics/${encodeURIComponent(id)}`)
      const data = await res.json()
      if (!res.ok) throw data
      analyticsResult.textContent = JSON.stringify(data, null, 2)
    } catch (err) {
      analyticsResult.textContent = JSON.stringify(err, null, 2)
    }
  })
})
