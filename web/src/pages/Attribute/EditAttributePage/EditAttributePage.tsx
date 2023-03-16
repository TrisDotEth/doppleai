import EditAttributeCell from 'src/components/Attribute/EditAttributeCell'

type AttributePageProps = {
  id: number
}

const EditAttributePage = ({ id }: AttributePageProps) => {
  return <EditAttributeCell id={id} />
}

export default EditAttributePage
