import APPsTable from "@/components/Admin/APPsTable"
import ContactsTable from "@/components/Admin/ContactsTable"
import EPsTable from "@/components/Admin/EpsTable"
import EventsTable from "@/components/Admin/EventsTable"
import PlacesTable from "@/components/Admin/PlaceTable"

const AdminPanel = () => {
  return (
    <div className=" py-9 px-8">
      <ContactsTable />
      <APPsTable />
      <EventsTable />
      <PlacesTable />
      <EPsTable />
    </div>
  )
}

export default AdminPanel
