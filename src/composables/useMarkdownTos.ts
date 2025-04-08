import MarkdownIt from 'markdown-it'
import { onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const mdParser = new MarkdownIt()

// TODO обработать ошибки / лоадер
export function useMarkdownTos() {
  const { locale } = useI18n()

  const md = ref('')

  async function loadMarkdown() {
    const res = await fetch(`/md/tos.${locale.value}.md`)
    const text = await res.text()
    md.value = mdParser.render(text)
  }

  onMounted(loadMarkdown)

  watch(() => locale.value, loadMarkdown)

  return { md }
}
