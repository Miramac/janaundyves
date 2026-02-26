const video = document.getElementById('main-video')

if (video) {
  video.addEventListener('error', () => {
    const wrapper = video.closest('.video-wrapper')
    if (wrapper) {
      wrapper.innerHTML = `
        <p style="color: #888; text-align: center; padding: 2rem;">
          Video konnte nicht geladen werden.<br/>
          Bitte Videodatei unter <code>/videos/video.mp4</code> ablegen.
        </p>
      `
    }
  })
}
