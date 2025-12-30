import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

export async function GET(request, { params }) {
   const {cabinid} = params;
   console.log(cabinid)
   try{
     const [cabin, bookedDates] = await Promise.all([getCabin(cabinid), getBookedDatesByCabinId(cabinid)]);
     return Response.json({cabin, bookedDates})
   }
   catch{
      return Response.json({ message: "Cabin not found " });
   }
}
// export async function POST() {

// }
