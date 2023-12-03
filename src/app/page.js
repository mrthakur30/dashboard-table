import UserList from "@/components/UserList";
import axios from "axios";

export default async function Home() {

  var fetchedUsers = [];

  try {
    fetchedUsers = await axios.get('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json')
      .then((response) => {
        return response.data
      });
  } catch (error) {
    console.log(error);
  }

  return (
    <main className="grid justify-items-center ">
      {
        (fetchedUsers.length > 0) && <UserList fetchedUsers={fetchedUsers} />
      }
    </main>
  )
}
