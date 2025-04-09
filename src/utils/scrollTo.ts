// TODO мб vueuse, но пока так пойдет
// можно расширить и добавить оффсет или задавать бехейв
export default function scrollTo(id: string) {
  const target = document.getElementById(id);

  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  } else {
    console.warn('Scroll target not found');
  }
}
