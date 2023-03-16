import PromptCell from 'src/components/Prompt/PromptCell'

type PromptPageProps = {
  id: number
}

const PromptPage = ({ id }: PromptPageProps) => {
  return <PromptCell id={id} />
}

export default PromptPage
