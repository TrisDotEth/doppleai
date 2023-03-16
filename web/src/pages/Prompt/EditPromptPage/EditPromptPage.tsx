import EditPromptCell from 'src/components/Prompt/EditPromptCell'

type PromptPageProps = {
  id: number
}

const EditPromptPage = ({ id }: PromptPageProps) => {
  return <EditPromptCell id={id} />
}

export default EditPromptPage
