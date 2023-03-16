import AttributeCell from 'src/components/Attribute/AttributeCell'

type AttributePageProps = {
  id: number
}

const AttributePage = ({ id }: AttributePageProps) => {
  return <AttributeCell id={id} />
}

export default AttributePage
