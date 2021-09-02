import ContactCell from "./ContactCell/ContactCell"
import StatusCell from "./StatusCell/StatusCell"
import TagsCell from "./TagsCell/TagsCell"
import AssignedCell from "./AssignedCell/AssignedCell"
import SKUCell from "./SKUCell/SKUCell"
import MoreCell from "./MoreCell/MoreCell"
import DescriptionCell from "./DescriptionCell/DescriptionCell"

export const COLUMNS =[
    {
        Header : 'Contact',
        accessor :'contact',
        Cell: ()=>{
            return <ContactCell/>
         }
    },
    {
        Header : 'User Status',
        accessor :'status',
        Cell: ()=>{
            return <StatusCell/>
         }
    },
    {
        Header : 'Tags',
        accessor :'tags',
        Cell: ()=>{
            return <TagsCell/>
         }
    },
    {
        Header : 'Assigned To',
        accessor :'assigned',
        Cell: ()=>{
            return <AssignedCell/>         }
    },
    {
        Header : 'SKU',
        accessor :'sku',
        Cell: ()=>{
            return <SKUCell/>         }
    },
    {
        Header : 'Description',
        accessor :'description',
        Cell: ()=>{
            return <DescriptionCell/>         }
    },
    {
        Header : '+',
        accessor :'more',
        Cell: ()=>{
            return <MoreCell/>         }
    },
   
]
