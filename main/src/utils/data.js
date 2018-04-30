const setData = () => {
  const str = `
    localStorage._vd2 = JSON.stringify(window.vd);
  `
  const script = document.createElement('script')
  script.innerHTML = str
  document.body.append(script)
  document.body.removeChild(script)
}

const getData = () => {
  const data = JSON.parse(localStorage.getItem('_vd2'))
  return data;
}

export { setData, getData }
