// TODO мб vueuse, но пока так пойдет
export default function scrollTo(id: string) {
  const el = document.getElementById(id)

  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

// export type ScrollOptions = {
//   offset?: number
//   behavior?: ScrollBehavior
// }

// export default function scrollTo(id: string, options: ScrollOptions = {}) {
//   const el = document.getElementById(id)
//   if (!el) return

//   const top = el.getBoundingClientRect().top + window.scrollY
//   const offset = options.offset ?? 0

//   window.scrollTo({
//     top: top - offset,
//     behavior: options.behavior ?? 'smooth',
//   })
// }
