// TODO мб vueuse, но пока так пойдет
export default function scrollTo(id: string) {
  const el = document.getElementById(id)

  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
